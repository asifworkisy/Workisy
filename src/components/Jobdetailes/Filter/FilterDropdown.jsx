


import React, { useState, useEffect, useRef } from 'react';
import styles from './FilterDropdown.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import both icons
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
    <div className={styles['filter-dropdown']} ref={dropdownRef} role="region" aria-labelledby={`${title}-label`}>
      {/* Dropdown trigger */}
      <button
       onClick={onToggle}
       className={`${styles['location-button']} ${className ? styles[className] : ''}`}
       aria-expanded={isOpen}
       aria-controls={`${title}-dropdown`}
       id={`${title}-label`}
       style={{
         backgroundColor: selectedOptions.length > 0 ? '#2557a7' : 'transparent',
         color: selectedOptions.length > 0 ? 'white' : 'black',
       }}
      >
        <span>
          {title}
          {selectedOptions.length > 0 && (
            <span className= {styles['count']}>({selectedOptions.length})</span>
          )}
        </span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />} {/* Toggle icon based on isOpen */}
      </button>

      {/* Show dropdown only if isOpen is true */}
      {isOpen && (
        <div className= {styles['location-filter']}  id={`${title}-dropdown`}>
          <div className= {styles['dropdown-body']}  >
            <div className= {styles['search-container']} >
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className= {styles['search-input']}
                aria-label="Search options"
              />
              <IoMdSearch className= {styles['search-icon']}  />
            </div>

            {withSlider && (
              <div className={styles['slider-container']}>
                <label htmlFor="slider">Slider Range</label>
                <Slider
                  min={sliderRange[0]}
                  max={sliderRange[1]}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className={styles['slider']}
                />
                <div className={styles['slider-value']}>Value: {sliderValue}</div>
              </div>
            )}
           {!withSlider && (
              <ul className={styles['checkbox-list']}>
                {filteredOptions.map((option) => (
                  <li key={option.id} className={styles['checkbox-item']}>
                    <label className={styles['checkbox-label']}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                      />
                      {option.label}
                    </label>
                    <span className={styles['count']}>({option.count})</span> 
                  </li>
                ))}
              </ul>
            )}


            <div className={styles['buttons-container']}>
              <button className={styles['reset-button']} onClick={resetSelection}>
                   Reset
              </button>
              <button className={styles['apply-button']} onClick={onToggle}>
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

