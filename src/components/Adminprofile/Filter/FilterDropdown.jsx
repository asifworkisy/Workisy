

import React, { useState, useEffect, useRef } from 'react';
import './FilterDropdown.css';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdSearch } from 'react-icons/io';
import Slider from 'rc-slider'; // Import slider library
import 'rc-slider/assets/index.css'; // Slider CSS
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const FilterDropdown = ({
  options = [],
  title,
  isOpen,
  onToggle,
  withSlider,
  sliderRange,
  onSliderChange,
  className
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sliderValue, setSliderValue] = useState(sliderRange ? sliderRange[0] : 0);

  const dropdownRef = useRef(null); // Ref to target dropdown

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(); // Close dropdown when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const resetSelection = () => {
    setSelectedOptions([]);
    if (withSlider) {
      setSliderValue(sliderRange[0]); // Reset slider
      onSliderChange(sliderRange[0]); // Reset parent slider state
    }
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    onSliderChange(value); // Notify parent about slider change
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-dropdown" ref={dropdownRef} role="region" aria-labelledby={`${title}-label`}>
      {/* Dropdown trigger */}
      <button
        onClick={onToggle}
        className={`location-button ${className || ''}`} // Apply the className
        aria-expanded={isOpen}
        aria-controls={`${title}-dropdown`}
        id={`${title}-label`}
      >
        <span>
          {title}
          {selectedOptions.length > 0 && (
            <span className="count">({selectedOptions.length})</span>
          )}
        </span>
        <FiChevronDown />
      </button>

      {/* Show dropdown only if isOpen is true */}
      {isOpen && (
        <div className="location-filter" id={`${title}-dropdown`}>
          <div className="dropdown-body">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                aria-label="Search options"
              />
              <IoMdSearch className="search-icon" />
            </div>

            {withSlider && (
              <div className="slider-container">
                <label htmlFor="slider">Slider Range</label>
                <Slider
                  min={sliderRange[0]}
                  max={sliderRange[1]}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="slider"
                />
                <div className="slider-value">Value: {sliderValue}</div>
              </div>
            )}

            {!withSlider && (
           <ul className="checkbox-list">
           {filteredOptions.map((option) => (
             <li key={option.id}>
               <label>
                 <input
                   type="checkbox"
                   checked={selectedOptions.includes(option)}
                   onChange={() => handleCheckboxChange(option)}
                 />
                 {option.label}
               </label>
               <span className="count">({option.count})</span> {/* Align count to the right */}
             </li>
           ))}
         </ul>
           
            )}

            <div className="buttons-container">
              <button className="reset-button" onClick={resetSelection}>
                Reset
              </button>
              <button className="apply-button" onClick={onToggle}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Define prop types
FilterDropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  withSlider: PropTypes.bool,
  sliderRange: PropTypes.array,
  onSliderChange: PropTypes.func,
};

export default FilterDropdown;
