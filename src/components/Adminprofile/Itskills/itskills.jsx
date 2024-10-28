import React,{useState, forwardRef} from 'react'
import Select from 'react-select';
import './itskills.css'
import { Dialog } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';

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

const ItSkills=forwardRef((props, ref)=>{
    const [openIt, setOpenIt]=useState(false)
    const [skillIt, setSkillIt]=useState("")
    const [version, setVersion]=useState("")
    const [lastused, setLatused]=useState("")
    const [ItSkilsData, setITSKillsData]=useState([...skillsData])
    const [expYear, setExpyear]=useState("")
    const [expMonth, setExpMonth]=useState("")
    const lastUsed=[]
   
    for (let year = 2024; year >= 1940; year--) {
        lastUsed.push({ value: year, label: year.toString() });
       }



    const handleChangeSaveITskill=(event)=>{
      event.preventDefault()
        const itDetails={
            skills:skillIt,
            version:version,
            lastUsed: lastused?.label || null,
            experience: {
              years: expYear ? expYear.label : null,
              months: expMonth ? expMonth.label : null,
            }
        }

        setITSKillsData((prevData) => {
          if (!Array.isArray(prevData)) {
              // Initialize as an array if `prevData` isn't an array or is undefined
              return [itDetails];
          }
          return [...prevData, itDetails]; // Spread in the existing data
      });

      setOpenIt(false)
    }   
  return (
    <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
        <div className='itskills-cnt'>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>IT Skills</h1>
                <p className='add-emplo-para' onClick={()=>setOpenIt(!openIt)}>Add Details</p>
            </div>
            <div>
                <table  cellPadding="10" style={{  width: '100%' }} className='table'>
                    <thead >
                        <tr className='thead-row'>
                            <th className='table-head'>Skills</th>
                            <th className='table-head'>Version</th>
                            <th className='table-head'>Last Used</th>
                            <th className='table-head'>Experience</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                     {ItSkilsData.map((skill, index)=>(
                        <tr key={index}>
                         <td className="custom-td">{skill.skills}</td>
                         <td className="custom-td">--</td>
                         <td className="custom-td">{skill.lastUsed}</td>
                         <td className="custom-td">{typeof skill.experience === 'string'
                            ? skill.experience
                            : `${skill.experience.years || 0}  ${skill.experience.months || 0}`}
                         </td>
                       </tr>
                    ))}
                     </tbody>
                </table>
            </div>
           
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
                            <div style={{marginTop:'9px', marginLeft:'5px', width:'290px'}}>
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
                      <div style={{marginTop:'30px'}}>
                            <FormLabel sx={{color:'#121224', marginTop:'10px', fontWeight:'600'}}>Experience<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                <Select
                                    value={expYear}
                                    onChange={(expYear)=>setExpyear(expYear)}
                                    options={ExpYears}
                                    isSearchable
                                    placeholder="Year"
                                    
                                />
                            </div>
                            <div style={{marginLeft:'20px', width:'100%'}}>
                                <Select
                                    value={expMonth}
                                    onChange={(expMonth)=>setExpMonth(expMonth)}
                                    options={ExpMonth}
                                    isSearchable
                                    placeholder="Month"
                                   
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
})

export default ItSkills

const ExpYears=[
    { "value": "year0", "label": "0 Year" },
    { "value": "year1", "label": "1 Year" },
    { "value": "year2", "label": "2 Years" },
    { "value": "year3", "label": "3 Years" },
    { "value": "year4", "label": "4 Years" },
    { "value": "year5", "label": "5 Years" },
    { "value": "year6", "label": "6 Years" },
    { "value": "year7", "label": "7 Years" },
    { "value": "year8", "label": "8 Years" },
    { "value": "year9", "label": "9 Years" },
    { "value": "year10", "label": "10 Years" },
    { "value": "year11", "label": "11 Years" },
    { "value": "year12", "label": "12 Years" },
    { "value": "year13", "label": "13 Years" },
    { "value": "year14", "label": "14 Years" },
    { "value": "year15", "label": "15 Years" },
    { "value": "year16", "label": "16 Years" },
    { "value": "year17", "label": "17 Years" },
    { "value": "year18", "label": "18 Years" },
    { "value": "year19", "label": "19 Years" },
    { "value": "year20", "label": "20 Years" },
    { "value": "year21", "label": "21 Years" },
    { "value": "year22", "label": "22 Years" },
    { "value": "year23", "label": "23 Years" },
    { "value": "year24", "label": "24 Years" },
    { "value": "year25", "label": "25 Years" },
    { "value": "year26", "label": "26 Years" },
    { "value": "year27", "label": "27 Years" },
    { "value": "year28", "label": "28 Years" },
    { "value": "year29", "label": "29 Years" },
    { "value": "year30", "label": "30 Years" }
  ]
  
const ExpMonth=[
    { "value": "month0", "label": "0 Month" },
    { "value": "month1", "label": "1 Month" },
    { "value": "month2", "label": "2 Months" },
    { "value": "month3", "label": "3 Months" },
    { "value": "month4", "label": "4 Months" },
    { "value": "month5", "label": "5 Months" },
    { "value": "month6", "label": "6 Months" },
    { "value": "month7", "label": "7 Months" },
    { "value": "month8", "label": "8 Months" },
    { "value": "month9", "label": "9 Months" },
    { "value": "month10", "label": "10 Months" },
    { "value": "month11", "label": "11 Months" }
  ]  

const skillsData = [
    {
      skills: "React.js",
      version: "--",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    },
    {
      skills: "Node.js",
      version: "--",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    },
    {
      skills: "Web Designing",
      version: "-",
      lastUsed: "2024",
      experience: "0 Year 4 Months"
    },
    {
      skills: "SQL",
      version: "-",
      lastUsed: "2023",
      experience: "1 Year 0 Months",
     
    },
    {
      skills: "Python",
      version: "--",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    },
    {
      skills: "Javascript",
      version: "-",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    },
    {
      skills: "CSS",
      version: "--",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    },

    {
      skills: "HTML",
      version: "--",
      lastUsed: "2024",
      experience: "1 Year 0 Months"
    }

  ];  
