import React, { useState } from 'react';
import Select from 'react-select';

export const customStyles = {
  overflowY: 'auto',   
 maxHeight: '100px', 
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    placeholder: (provided) => ({
      ...provided,
      padding: "5px",
    height: "33px",
    width: "250px",
    letterSpacing: "0.7px",
    outline: "none",
    
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999, 
      height:"200px",
      overflowY:"auto",
    }),
    control: (provided,state) => ({
        ...provided,
        width:"250px",
        height:"auto",
        border: '1px solid #ccc', 
        boxShadow: 'none', 
        '&:hover': {
          border: '1px solid #007bff', 
        
        },
       
      }),
      multiValue: (provided) => ({
        ...provided,
        backgroundColor: "rgba(36, 127, 246, 0.789)",
        color:"white" ,
        borderRadius:"5px" ,
       
      
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        color: 'white',
      
       
      
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        color: '#ff6b6b', 
        ':hover': {
          backgroundColor: "rgba(36, 127, 246, 0.789);", 
          color: 'white',
         
         
        },
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#f0f0f0' : 'white', 
        color: state.isFocused ? 'rgb(0, 162, 255);' : 'black', 
        cursor: 'pointer',
      
      }),
   
  };


  
  const Location= ({location,setAllData,allData}) => {
 
    
    const options =location.map((i)=>({
        value:i,
        label:i

    }))


  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleChange = (selected) => {
    setSelectedOptions(selected);


    const data=selected.map((i)=> i.value);

   const filterData=allData.filter((applicant)=>{
      return data.some((i)=>i.toLowerCase()===applicant.location.toLowerCase())
      
    })
    
    setAllData(filterData);

    
  };


  return (
    <div className='options'>
      <Select styles={customStyles}
        options={options} 
        isMulti 
        value={selectedOptions} 
        onChange={handleChange} 
        placeholder="Eg. Hyderbad" 
        noOptionsMessage={() => 'No options available'}
        
      />
    </div>
  );
};

export default Location;

