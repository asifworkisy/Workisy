import React, { useState, useRef, useEffect } from 'react';
// import '../App.css';
import './FilterDropdowndata.css'
import FilterDropdown from './FilterDropdown';
import Filter from './Filter';



const location = [
  { id: 1, label: 'Bengaluru / Bangalore', count: 7183 },
  { id: 2, label: 'Hyderabad / Secunderabad', count: 4223 },
  { id: 3, label: 'Chennai', count: 3917 },
  { id: 4, label: 'Mumbai', count: 3248 },
  { id: 5, label: 'Pune', count: 2546 },
  { id: 6, label: 'Delhi', count: 1813 },
  { id: 7, label: 'Gurgaon / Gurugram', count: 1753 },
];

const experience = [
  { id: 1, label: '2 - 5 Years', count: 4043 },
  { id: 2, label: '5 - 8 Years', count: 3000 },
  { id: 3, label: '8 - 10 Years', count: 2500 },
];

const salary = [
  { id: 1, label: '50K - 100K', count: 3000 },
  { id: 2, label: '100K - 150K', count: 4000 },
];

const functionCart = [
  { id: 1, label: 'Engineering', count: 5000 },
  { id: 2, label: 'Marketing', count: 3000 },
];

const industry = [
  { id: 1, label: 'IT Services', count: 4000 },
  { id: 2, label: 'Manufacturing', count: 3500 },
];

const role = [
  { id: 1, label: 'Fresher', count: 579 },
  { id: 2, label: 'Sales Exec/Sales Representative', count: 426 },
  { id: 3, label: 'Business Development Manager', count: 360 },
];

const jobType = [
  { id: 1, label: 'Permanent Job', count: 28037 },
  { id: 2, label: 'International', count: 226 },
  { id: 3, label: 'Jobs for Women', count: 115 },
  { id: 4, label: 'Work From Home', count: 45 },
];

const JobFreshness = [
  { id: 1, label: 'In Last 30 Days', count: 10252 },
  { id: 2, label: 'In Last 15 Days', count: 4611 },
  { id: 3, label: 'In Last 7 Days', count: 2189 },
  { id: 4, label: 'In Last 3 Days', count: 1035 },
  { id: 5, label: 'In Last 1 Day', count: 52 },
];

const Education = [
  { id: 1, label: 'Bachelor of Commerce (B.Com)', count: 552 },
  { id: 2, label: 'Bachelor of Business Administration (B.B.A)', count: 468 },
  { id: 3, label: 'Bachelor of Arts (B.A)', count: 433 },
  { id: 4, label: 'Bachelor Of Technology (B.Tech/B.E)', count: 423 },
  { id: 5, label: 'Bachelor of Science (B.Sc)', count: 388 },
];
function FilterDropdowndata() {
    const [openDropdown, setOpenDropdown] = useState(null); // Tracks the open dropdown
  const [showAllFilters, setShowAllFilters] = useState(false); // Track "All Filters" button state
  const filterRef = useRef(null); // Ref for filter area

  // Function to handle the dropdown toggle
  const handleDropdownToggle = (title) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  // const handleAllFiltersToggle = () => {
  //   setShowAllFilters(true); // Show filters when clicked
  // };

  // Close filters if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowAllFilters(false); // Hide filters when clicking outside
      }
    };

    if (showAllFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAllFilters]);

  return (
    <div className='container'>
       <FilterDropdown
        // options={location}
        title="Quick Apply"
        // isOpen={openDropdown === "Quick Apply"}
        // onToggle={() => handleDropdownToggle("Quick Apply")}
      />
      <FilterDropdown
        options={location}
        title="Location"
        isOpen={openDropdown === "Location"}
        onToggle={() => handleDropdownToggle("Location")}
      />
      <FilterDropdown
        options={experience}
        title="Experience"
        isOpen={openDropdown === "Experience"}
        onToggle={() => handleDropdownToggle("Experience")}
      />
      <FilterDropdown
        options={salary}
        title="Salary"
        isOpen={openDropdown === "Salary"}
        onToggle={() => handleDropdownToggle("Salary")}
      />
      <FilterDropdown
        options={functionCart}
        title="Function"
        isOpen={openDropdown === "Function"}
        onToggle={() => handleDropdownToggle("Function")}
      />
      <FilterDropdown
        options={industry}
        title="Industry"
        isOpen={openDropdown === "Industry"}
        onToggle={() => handleDropdownToggle("Industry")}
      />
      <FilterDropdown
        options={role}
        title="Role"
        isOpen={openDropdown === "Role"}
        onToggle={() => handleDropdownToggle("Role")}
      />
      <FilterDropdown
        options={jobType}
        title="Job Type"
        isOpen={openDropdown === "Job Type"}
        onToggle={() => handleDropdownToggle("Job Type")}
        className="wide-button"
      />
      <FilterDropdown
        options={JobFreshness}
        title="Job Freshness"
        isOpen={openDropdown === "Job Freshness"}
        onToggle={() => handleDropdownToggle("Job Freshness")}
        className="wide-button2"
      />
      <FilterDropdown
        options={Education}
        title="Education"
        isOpen={openDropdown === "Education"}
        onToggle={() => handleDropdownToggle("Education")}
      />
      <Filter
       options={Education}
       title="Education"
       isOpen={openDropdown === "Education"}
       onToggle={() => handleDropdownToggle("Education")}
      />
      
    </div>
  )
}

export default FilterDropdowndata
