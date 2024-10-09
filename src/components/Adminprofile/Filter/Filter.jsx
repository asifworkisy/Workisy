import React, { useState } from 'react';
import './Filter.css';

const FilterDropdown = ({ options, title }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="filter-section">
      <div className="filter-title">{title}</div>
      <div className="filter-options">
        {options.slice(0, showMore ? options.length : 4).map((option) => (
          <button key={option.id} className="filter-option">
            {option.label}
          </button>
        ))}
      </div>
      <div className="show-more" onClick={handleShowMoreToggle}>
        {showMore ? '- show less options' : '+ show more options'}
      </div>
    </div>
  );
};

const Filter = () => {
  const locationOptions = [
    { id: 1, label: 'Bengaluru / Bangalore' },
    { id: 2, label: 'Hyderabad / Secunderabad, Telangana' },
    { id: 3, label: 'Mumbai' },
    { id: 4, label: 'Pune' },
    { id: 5, label: 'Chennai' },
    { id: 6, label: 'Delhi' },
    // Add more options if needed
  ];

  const experienceOptions = [
    { id: 1, label: '2 - 5 Years' },
    { id: 2, label: '5 - 7 Years' },
    { id: 3, label: '1 - 2 Years' },
    { id: 4, label: '0 - 1 Years' },
    { id: 5, label: '7 - 10 Years' },
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <span>Filter</span>
        <span className="reset-all">Reset All</span>
      </div>
      <FilterDropdown options={locationOptions} title="Location" />
      <FilterDropdown options={experienceOptions} title="Having Experience of" />
      {/* Add more dropdowns as needed */}
    </div>
  );
};

export default Filter;
