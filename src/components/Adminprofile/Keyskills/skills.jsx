import React, {useState} from 'react'
import { CiEdit } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Dialog} from '@mui/material';
import CreatableSelect from "react-select/creatable";
import './skills.css'

const initialSkills = [
  { label: "JavaScript", value: "javascript" },
  { label: "React", value: "react" },
];

const Skills=()=>{
   const [openskills, setOpenskills]=useState(false)
   const [skills, setSkills] = useState(initialSkills);
   const [saveSkills, setSavedSkills]=useState([])
   const handleChange = (selectedOptions) => {
    setSkills(selectedOptions || []); // Sets the new selected skills or empty array when all are removed
  };
   const handleSkillsSave=()=>{
    setSavedSkills(skills)
    setOpenskills(false)
   }
  return (
    <div className="profile-admin-cnt skills-co-cnt">
    <div className='keyskills-cnt'>
       <div style={{display:'flex', }}>
            <p className="resume-heading">Key Skills</p>
            <button className='edit-button' onClick={()=>setOpenskills(!openskills)}><CiEdit style={{outline:'none'}}/></button>
        </div>
        <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', marginTop:'20px'}}>
            {saveSkills.map(each=>(
              <li key={each.value} className='skill-list-item' >{each.label}</li>
            ))}
        </ul>
        
        <Dialog open={openskills} onClose={()=>setOpenskills(false)} maxWidth="md" fullWidth PaperProps={{sx: { borderRadius: '20px' }}}>
           <div style={{display:'flex', flexDirection:'column',padding:'20px'}}>
             <h1 className="resume-modal-heading">Key Skills</h1>
             <p className="resume-modal-para">Add skills that best define your expertise, for e.g, Direct Marketing, Oracle, Java, etc. (Minimum 1)</p>
             <div>
                <h3 className="resume-modal-heading" style={{fontSize:'16px', fontFamily:'"Satoshi", "Satoshi Fallback"'}}>Skills</h3>
                <ul style={{display:'flex', flexWrap:'wrap', listStyleType:'none'}}>
                  {skills.map((skill, index) => (
                    <li key={index} className='skill-list-item'>
                      {skill.label} <button className='close-btn' onClick={() => handleChange(skills.filter((s) => s.value !== skill.value))}><IoIosClose size={20} style={{outline:'none'}}/></button>
                    </li>
                  ))}
                </ul>
             </div>
             <CreatableSelect
                isMulti // Enables multiple selections
                value={skills} // Binds the selected skills to the component
                onChange={handleChange} // Handles skill addition/removal
                options={skills} // Provides options to select
                placeholder="Add skills..."
                isClearable
                closeMenuOnSelect={false}
              />
              <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                <button className="resume-model-button" onClick={()=>setOpenskills(false)}>Cancel</button>
                <button className="resume-model-button" onClick={handleSkillsSave}>Save</button>
              </div>
           </div>
           
        </Dialog>
    </div>
    </div>
  )
}
export default Skills
