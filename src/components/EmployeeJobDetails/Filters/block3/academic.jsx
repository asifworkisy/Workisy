import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
const Academic= ({background,setAllData,allData}) => {

 
     const options =background.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);
     let academicBackgrounds=selected.map((i)=>i.value)
     let update=allData.filter((applicant)=>{
             const checkBackGround=  academicBackgrounds.some((i)=>applicant.education.toLowerCase().includes(i.toLowerCase())) ;
             return checkBackGround;
     })

     setAllData(update)
    
   };
 
   return (
     <div className='options'>
       <Select styles={customStyles}
         options={options} 
         isMulti 
         value={selectedOptions} 
         onChange={handleChange} 
         placeholder="Eg. Btech" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Academic;