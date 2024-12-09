import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
const Skill= ({skill,setAllData,allData}) => {

 
     const options =skill.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);

   const skill=  selected.map((i)=>i.value);

  const update=allData.filter((applicant)=>{
        const checkSkills=applicant.skills.some(i=>skill.includes(i));
        return checkSkills;
   });
   setAllData(update);
   

   };
 
   return (
     <div className='options'>
       <Select styles={customStyles}
         options={options} 
         isMulti 
         value={selectedOptions} 
         onChange={handleChange} 
         placeholder="Eg. Java" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Skill;