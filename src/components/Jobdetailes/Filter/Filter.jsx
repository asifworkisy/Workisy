import React, { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const filterRef = useRef(null);
  const [visibleLocations, setVisibleLocations] = useState(3);
  const [visibleExperiences, setVisibleExperiences] = useState(3);
  const [visibleSalaries, setVisibleSalaries] = useState(3);
  const [visibleFunctions, setVisibleFunctions] = useState(3);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);

  const locations = [
    "Bengaluru / Bangalore", 
    "Mumbai", 
    "Pune", 
    "Hyderabad / Secunderabad, Telangana", 
    "Chennai", 
    "Kolkata", 
    "Delhi", 
    "Jaipur"
  ];
  
  const experienceLevels = [
    "2 - 5 Years", 
    "0 - 1 Years", 
    "5 - 7 Years", 
    "1 - 2 Years", 
    "7 - 10 Years", 
    "10+ Years", 
    "Internship", 
    "Entry Level"
  ];
  
  const salaryRanges = [
    "0~100000",
    "100000~200000",
    "200000~500000",
    "500000~1000000",
    "1000000~2000000"
  ];
  
  const functions = [
    "Banking (7618)",
    "Finance (4712)",
    "finance (2684)",
    "technology (2029)",
    "Retail Banking (983)"
  ];

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleLocation = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) ? prev.filter(loc => loc !== location) : [...prev, location]
    );
  };

  const toggleExperience = (experience) => {
    setSelectedExperiences(prev => 
      prev.includes(experience) ? prev.filter(exp => exp !== experience) : [...prev, experience]
    );
  };

  const toggleSalary = (salary) => {
    setSelectedSalaries(prev => 
      prev.includes(salary) ? prev.filter(sal => sal !== salary) : [...prev, salary]
    );
  };

  const toggleFunction = (func) => {
    setSelectedFunctions(prev => 
      prev.includes(func) ? prev.filter(f => f !== func) : [...prev, func]
    );
  };

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedExperiences([]);
    setSelectedSalaries([]);
    setSelectedFunctions([]);
    setVisibleLocations(3);
    setVisibleExperiences(3);
    setVisibleSalaries(3);
    setVisibleFunctions(3);
    setDropdownOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className={styles.filterButton} aria-expanded={isDropdownOpen}>
        All Filters
      </button>
      
      {isDropdownOpen && (
        <div className={styles.filterContainer} ref={filterRef}>
          <div className={styles.filterHeader}>
            <span>Filter</span>
            <span className={styles.resetAll} onClick={resetFilters}>Reset All</span>
          </div>
          <hr className={styles.hr}/>

          <div className={styles.scrollableContainer}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Location</h3>
              <div className={styles.filterOptions}>
                {locations.slice(0, visibleLocations).map((location, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedLocations.includes(location) ? styles.selected : ''}`}
                    onClick={() => toggleLocation(location)}
                  >
                    {location}
                  </span>
                ))}
              </div>
              {visibleLocations < locations.length ? (
                <span className={styles.showMore} onClick={() => setVisibleLocations(locations.length)}>
                  + show more options
                </span>
              ) : (
                visibleLocations > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleLocations(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Having Experience of</h3>
              <div className={styles.filterOptions}>
                {experienceLevels.slice(0, visibleExperiences).map((experience, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedExperiences.includes(experience) ? styles.selected : ''}`}
                    onClick={() => toggleExperience(experience)}
                  >
                    {experience}
                  </span>
                ))}
              </div>
              {visibleExperiences < experienceLevels.length ? (
                <span className={styles.showMore} onClick={() => setVisibleExperiences(experienceLevels.length)}>
                  + show more options
                </span>
              ) : (
                visibleExperiences > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleExperiences(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Expected Salary</h3>
              <div className={styles.filterOptions}>
                {salaryRanges.slice(0, visibleSalaries).map((salary, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedSalaries.includes(salary) ? styles.selected : ''}`}
                    onClick={() => toggleSalary(salary)}
                  >
                    {salary}
                  </span>
                ))}
              </div>
              {visibleSalaries < salaryRanges.length ? (
                <span className={styles.showMore} onClick={() => setVisibleSalaries(salaryRanges.length)}>
                  + show more options
                </span>
              ) : (
                visibleSalaries > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleSalaries(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Functions</h3>
              <div className={styles.filterOptions}>
                {functions.slice(0, visibleFunctions).map((func, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedFunctions.includes(func) ? styles.selected : ''}`}
                    onClick={() => toggleFunction(func)}
                  >
                    {func}
                  </span>
                ))}
              </div>
              {visibleFunctions < functions.length ? (
                <span className={styles.showMore} onClick={() => setVisibleFunctions(functions.length)}>
                  + show more options
                </span>
              ) : (
                visibleFunctions > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleFunctions(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
