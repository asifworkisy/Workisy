import React,{useState} from 'react'
import Select from 'react-select';
import './itskills.css'
import { Dialog } from '@mui/material'

const ItskillsStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '16px',             // Border-radius of 10px
      border: '1px solid #aeb1b3', 
                                         // 1px solid #121224 border
      width: '136%',                    // 100% width
      height: '29px',                   // Height of the dropdown box
      boxShadow: 'none',                // Remove outline on focus
      '&:hover': {
        border: '1px solid #121224',    // Border color on hover
      },
    }),
  };

const ItSkills=()=>{
    const [openIt, setOpenIt]=useState(false)
    const [skillIt, setSkillIt]=useState("")
    const [version, setVersion]=useState("")
    const [lastused, setLatused]=useState("")
    const [ItSkilsData, setITSKillsData]=useState([])
    const lastUsed=[]
    for (let year = 2024; year >= 1940; year--) {
        lastUsed.push({ value: year, label: year.toString() });
       }

    const handleChangeSaveITskill=()=>{
        const itDetails={
            skillName:skillIt,
            versionName:version,
            lastUsedYear:lastUsed.label,
        }

        setITSKillsData((prevData) => {
            if (!Array.isArray(prevData)) {
                return [itDetails]; // Initialize it as an array if it wasn't one
            }
            return [...prevData, itDetails]; // Otherwise, spread in the existing data
        });
    }   
  return (
    <div className='profile-admin-cnt skills-co-cnt'>
        <div className='itskills-cnt'>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>IT Skills</h1>
                <p className='add-emplo-para' onClick={()=>setOpenIt(!openIt)}>Add Details</p>
            </div>
            {ItSkilsData.map((skill, index)=>(
                <li></li>
            ))}
            <Dialog open={openIt} onClose={()=>setOpenIt(false)} maxWidth="md" fullWidth  PaperProps={{
                sx: {borderRadius: '20px', overflowY: 'auto','::-webkit-scrollbar': {display: 'none', },'-ms-overflow-style': 'none', 'scrollbar-width': 'none', },}}>

                <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                   <h1 className="resume-modal-heading">IT Skills</h1>
                   <p className="resume-modal-para">Mention skills like programming languages (Java, Python), softwares (Microsoft Word, Excel) and more, to show your technical expertise.</p>
                   <form style={{marginTop:'20px'}} onSubmit={handleChangeSaveITskill}>
                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Skill / software name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" id="company-name" className='text-input' placeholder='Skills / Software name' onChange={(e)=>setSkillIt(e.target.value)}/>
                      </div>
                  
                      <div  className='version-used-cnt'>
                       <div style={{ display:'flex', flexDirection:'column', width:'50%'}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Software version<span style={{ color: 'red' }}>*</span></label>
                            <input style={{paddingLeft:'5px'}} type="text" id="company-name" className='text-input' placeholder='Skills / Software name' onChange={(e)=>setVersion(e.target.value)}/>
                        </div>
                    
                        <div style={{ display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>lastused<span style={{ color: 'red' }}>*</span></label>
                            <div style={{marginTop:'9px', marginLeft:'5px'}}>
                                    <Select
                                        value={lastused}
                                        onChange={(lastused)=>setLatused(lastused)}
                                        options={lastUsed}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ItskillsStyles}
                                    />
                            </div>
                        </div>    
                      </div>
                      
                      <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <button className="resume-model-button" onClick={()=>setOpenIt(false)}>Cancel</button>
                            <button className="resume-model-button" type="submit" >Save</button>
                        </div>
                    </form>  
                </div>
            </Dialog>    
           
        </div>
    </div>    
  )
}

export default ItSkills