import React, { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const filterRef = useRef(null);
  const [visibleLocations, setVisibleLocations] = useState(3);
  const [visibleExperiences, setVisibleExperiences] = useState(3);
  const [visibleSalaries, setVisibleSalaries] = useState(3);
  const [visibleFunctions, setVisibleFunctions] = useState(3);
  const [visibleIndustries, setVisibleIndustries] = useState(3);
  const [visibleRoles, setVisibleRoles] = useState(3);
  const [visibleJobTypes, setVisibleJobTypes] = useState(3);
  const [visibleJobFreshness, setVisibleJobFreshness] = useState(3);
  const [visibleQualifications, setVisibleQualifications] = useState(3);
  const [visibleCompanies, setVisibleCompanies] = useState(3);

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedJobFreshness, setSelectedJobFreshness] = useState([]);
  const [selectedQualifications, setSelectedQualifications] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

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

  const industries = [
    "Other (15607)",
    "Banking/Accounting/Financial Services (7333)",
    "Banking (1989)",
    "Insurance (1574)",
    "IT/Computers - Software (922)"
  ];

  const roles = [
    "Fresher (1363)",
    "Sales Exec/Sales Representative (427)",
    "Relationship Manager (219)",
    "Business Development Manager (203)",
    "Field Sales Executive (169)"
  ];

  const jobTypes = [
    "Permanent Job (28216)",
    "International (236)",
    "Jobs for Women (89)",
    "Contract Job (38)",
    "Work From Home (27)"
  ];

  const jobFreshness = [
    "In Last 30 Days (13787)",
    "In Last 15 Days (8937)",
    "In Last 7 Days (2964)",
    "In Last 3 Days (1748)",
    "In Last 1 Day (528)"
  ];

  const qualifications = [
    "Bachelor of Commerce (B.Com) (485)",
    "Bachelor of Business Administration (B.B.A) (446)",
    "Bachelor of Arts (B.A) (417)",
    "Bachelor Of Technology (B.Tech/B.E) (416)",
    "Bachelor of Science (B.Sc) (379)"
  ];

  const companies = [
    "Kotak Mahindra Bank Limited (1699)",
    "** (1364)",
    "The Muthoot Group (1308)",
    "JP Morgan Chase & Co. (582)",
    "Deutsche Bank (531)"
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

  const toggleSelection = (setter, selected, item) => {
    setter(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedExperiences([]);
    setSelectedSalaries([]);
    setSelectedFunctions([]);
    setSelectedIndustries([]);
    setSelectedRoles([]);
    setSelectedJobTypes([]);
    setSelectedJobFreshness([]);
    setSelectedQualifications([]);
    setSelectedCompanies([]);
    setVisibleLocations(3);
    setVisibleExperiences(3);
    setVisibleSalaries(3);
    setVisibleFunctions(3);
    setVisibleIndustries(3);
    setVisibleRoles(3);
    setVisibleJobTypes(3);
    setVisibleJobFreshness(3);
    setVisibleQualifications(3);
    setVisibleCompanies(3);
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
            {/* Location Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Location</h3>
              <div className={styles.filterOptions}>
                {locations.slice(0, visibleLocations).map((location, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedLocations.includes(location) ? styles.selected : ''}`}
                    onClick={() => toggleSelection(setSelectedLocations, selectedLocations, location)}
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

            {/* Experience Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Having Experience of</h3>
              <div className={styles.filterOptions}>
                {experienceLevels.slice(0, visibleExperiences).map((experience, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedExperiences.includes(experience) ? styles.selected : ''}`}
                    onClick={() => toggleSelection(setSelectedExperiences, selectedExperiences, experience)}
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

            {/* Salary Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Expected Salary</h3>
              <div className={styles.filterOptions}>
                {salaryRanges.slice(0, visibleSalaries).map((salary, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedSalaries.includes(salary) ? styles.selected : ''}`}
                    onClick={() => toggleSelection(setSelectedSalaries, selectedSalaries, salary)}
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

            {/* Function Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Function</h3>
              <div className={styles.filterOptions}>
                {functions.slice(0, visibleFunctions).map((func, index) => (
                  <span 
                    key={index} 
                    className={`${styles.filterOption} ${selectedFunctions.includes(func) ? styles.selected : ''}`}
                    onClick={() => toggleSelection(setSelectedFunctions, selectedFunctions, func)}
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

            {/* Industry Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Industry</h3>
              <div className={styles.filterOptions}>
                {industries.slice(0, visibleIndustries).map((industry, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                    <div className={styles.filterName}>
                    <input 
                      type="checkbox" 
                      checked={selectedIndustries.includes(industry)} 
                      onChange={() => toggleSelection(setSelectedIndustries, selectedIndustries, industry)}
                    />
                    {industry}
                    </div>
                  </label>
                ))}
              </div>
              {visibleIndustries < industries.length ? (
                <span className={styles.showMore} onClick={() => setVisibleIndustries(industries.length)}>
                  + show more options
                </span>
              ) : (
                visibleIndustries > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleIndustries(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            {/* Role Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Role</h3>
              <div className={styles.filterOptions}>
                {roles.slice(0, visibleRoles).map((role, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                    <div className={styles.filterName}>
                    <input 
                      type="checkbox" 
                      checked={selectedRoles.includes(role)} 
                      onChange={() => toggleSelection(setSelectedRoles, selectedRoles, role)}
                    />
                    {role}
                    </div>
                  </label>
                ))}
              </div>
              {visibleRoles < roles.length ? (
                <span className={styles.showMore} onClick={() => setVisibleRoles(roles.length)}>
                  + show more options
                </span>
              ) : (
                visibleRoles > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleRoles(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            {/* Job Type Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Job Type</h3>
              <div className={styles.filterOptions}>
                {jobTypes.slice(0, visibleJobTypes).map((jobType, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                    <div className={styles.filterName}>
                    <input 
                      type="checkbox" 
                      checked={selectedJobTypes.includes(jobType)} 
                      onChange={() => toggleSelection(setSelectedJobTypes, selectedJobTypes, jobType)}
                    />
                    {jobType}
                    </div>
                  </label>
                ))}
              </div>
              {visibleJobTypes < jobTypes.length ? (
                <span className={styles.showMore} onClick={() => setVisibleJobTypes(jobTypes.length)}>
                  + show more options
                </span>
              ) : (
                visibleJobTypes > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleJobTypes(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            {/* Job Freshness Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Job Freshness</h3>
              <div className={styles.filterOptions}>
                {jobFreshness.slice(0, visibleJobFreshness).map((freshness, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                   <div className={styles.filterName}>
                    <input 
                      type="checkbox" 
                      checked={selectedJobFreshness.includes(freshness)} 
                      onChange={() => toggleSelection(setSelectedJobFreshness, selectedJobFreshness, freshness)}
                    />
                    {freshness}
                    </div>
                  </label>
                ))}
              </div>
              {visibleJobFreshness < jobFreshness.length ? (
                <span className={styles.showMore} onClick={() => setVisibleJobFreshness(jobFreshness.length)}>
                  + show more options
                </span>
              ) : (
                visibleJobFreshness > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleJobFreshness(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            {/* Educational Qualification Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Educational Qualification</h3>
              <div className={styles.filterOptions}>
                {qualifications.slice(0, visibleQualifications).map((qualification, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                     <div className={styles.filterName}>                   
                    <input 
                      type="checkbox" 
                      checked={selectedQualifications.includes(qualification)} 
                      onChange={() => toggleSelection(setSelectedQualifications, selectedQualifications, qualification)}
                    />
                    {qualification}
                    </div>
                  </label>
                ))}
              </div>
              {visibleQualifications < qualifications.length ? (
                <span className={styles.showMore} onClick={() => setVisibleQualifications(qualifications.length)}>
                  + show more options
                </span>
              ) : (
                visibleQualifications > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleQualifications(3)}>
                    - show less options
                  </span>
                )
              )}
            </div>

            {/* Top Companies Filter */}
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Top Companies</h3>
              <div className={styles.filterOptions}>
                {companies.slice(0, visibleCompanies).map((company, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                    <div className={styles.filterName}>
                    <input 
                      type="checkbox" 
                      checked={selectedCompanies.includes(company)} 
                      onChange={() => toggleSelection(setSelectedCompanies, selectedCompanies, company)}
                    />
                    {company}
                    </div>
                  </label>
                ))}
              </div>
              {visibleCompanies < companies.length ? (
                <span className={styles.showMore} onClick={() => setVisibleCompanies(companies.length)}>
                  + show more options
                </span>
              ) : (
                visibleCompanies > 3 && (
                  <span className={styles.showMore} onClick={() => setVisibleCompanies(3)}>
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
