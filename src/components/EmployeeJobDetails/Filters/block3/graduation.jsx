import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
const Graduation= ({year,setAllData,allData}) => {
    

 
     const options =year.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);
    
    


     let years=selected.map((i)=>i.value);

     let update=allData.filter((applicant)=>{

       const checkGraduationYear=years.some((i)=>{
                            if(applicant.graduationYear.includes(i) ) return true;
                            else if(i.includes("2021") ) 
                                {
                                    if (applicant.graduationYear.slice(-4)<=2021) return true;
                                }
                                return false;
                           
                        });
          return checkGraduationYear;
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
         placeholder="Eg. 2024" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Graduation;