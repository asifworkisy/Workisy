import { useState } from 'react';
import './project.css';
import { Dialog, FormControlLabel, RadioGroup, Radio, FormLabel, TextField } from '@mui/material';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '16px',             // Border-radius of 10px
    border: '1px solid #aeb1b3', 
                                       // 1px solid #121224 border
    width: '100%',                    // 100% width
    height: '29px',                   // Height of the dropdown box
    boxShadow: 'none',                // Remove outline on focus
    '&:hover': {
      border: '1px solid #121224',    // Border color on hover
    },
  }),
};

const Project = () => {
  const [openPro, setOpenPro] = useState(false);
  const [proTitle, setProjectTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [proRadiovalue, setProRadiovalue] = useState("inprogress");
  const [selectWOrkFromOptYear, setSelectProWorkFromYear]=useState("")
  const [selectWOrkfromOptMonth,setselectWOrkfromOptMonth ]=useState("")
  const [selectWOrkTillOptYear, setSelectProWorkTIllYear]=useState("")
  const [selectWOrkTillOptMonth,setselectWOrkTIllOptMonth ]=useState("")
  const [projectDetails, setProjectDetails]=useState("")
  const [projectSite, setPRojectSite]=useState("")
  const [natureofEmpl, setnatureOfEmpl]=useState("fulltime")
  const [projectSkills, setProjectSkills]=useState("")
  const [roleDesctiption, setRoleDescription]=useState("")
  const [role,setRole]=useState("")
  const [teamSize, setTeamSize]=useState("")
  const [projectData, setProjectData]=useState([{ projectTitle: "Candidate Profile", 
                                               clientName:"Appit",
                                               workfrom: {
                                                year:"2024",
                                                month:"jan"
                                              },
                                              worktill:{
                                                 year:"2024",
                                                 month:"oct"
                                              },
                                              projectDetails:"it's  a candidate profile details in hiring portal",
                                              projectSite:"Onsite",
                                              }])


  const handlesaveProjectDetails=(event)=>{
       event.preventDefault()

      const projectItemDeatils={
        projectTitle: proTitle,
        clientName:clientName,
        radioValue:proRadiovalue,
        workfrom: {
          year: selectWOrkFromOptYear?selectWOrkFromOptYear.label: "",
          month: selectWOrkfromOptMonth? selectWOrkfromOptMonth.label: ""
        },
        
        worktill:{
          year: selectWOrkTillOptYear?selectWOrkTillOptYear.label: "",
          month: selectWOrkTillOptYear? selectWOrkTillOptYear.label: ""
        },
        natureOfEmpValue: natureofEmpl,
        projectDetails:projectDetails,
        projectSite:projectSite,
        skils:projectSkills,
        role:role,
        description:roleDesctiption,
        teamSize:teamSize

       }
      
       setProjectData((prevData) => {
        if (!Array.isArray(prevData)) {
            // Initialize as an array if `prevData` isn't an array or is undefined
            return [projectItemDeatils];
        }
        return [...prevData, projectItemDeatils]; // Spread in the existing data
    });
    setOpenPro(false)
    
  }
  
  
  return (
    <div className='profile-admin-cnt skills-co-cnt'>
      <div className='itskills-cnt'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className='resume-heading'>Projects</h1>
          <p className='add-emplo-para' onClick={() => setOpenPro(!openPro)}>Add Details</p>
        </div>
      
      
      {projectData.map((project)=>(
         <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
            <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{project.projectTitle}</h3>
            <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{`${project.clientName}(${project.projectSite})`}</p>
            {proRadiovalue==="inprogress" && (<p style={{fontSize:'15px', color:'#717b9e', margin:'5px', marginLeft:"-1px"}}>{`${project.workfrom.month} ${project.workfrom.year}`}</p>)}
            {proRadiovalue==="finished" && (<p style={{fontSize:'15px', color:'#717b9e', margin:'5px', marginLeft:"-1px"}}>{`${project.workfrom.month} ${project.workfrom.year} to ${project.worktill.month} ${project.worktill.year}`}</p>)}
            
            <p style={{fontSize:'14px', color:'#474D6A', padding:'0px', margin:'0px'}}>{project.projectDetails}</p>
         </div>
      ))}
   
      <Dialog open={openPro} onClose={() => setOpenPro(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
        
        <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
            <h1 className="resume-modal-heading">Projects</h1>
            <p className="resume-modal-para">Stand out for employers by adding details about projects you have done in college, internships, or at work</p>
          
            <form style={{marginTop:'20px'}} onSubmit={handlesaveProjectDetails}>
              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Prject title<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Enter Project title' onChange={(e)=> setProjectTitle(e.target.value)}/>
              </div>

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Tag this project with your employment/education<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Select employment/education' onChange={(e)=> setProjectTitle(e.target.value)}/>
              </div>

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Client<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Enter Client Name' onChange={(e)=> setClientName(e.target.value)}/>
              </div>
              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Employemnt Type<span style={{ color: 'red' }}>*</span></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label-project"
                        name="row-radio-buttons-group-project"
                        value={proRadiovalue}
                        onChange={(e)=>setProRadiovalue(e.target.value)}
                      >
                        <FormControlLabel value="inprogress" control={<Radio size="small"/>} label="In Progress" />
                        <FormControlLabel value="finished" control={<Radio size="small"/>} label="Finished" />
                    </RadioGroup>
              </div>

              <div style={{marginTop:'30px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Worked from<span style={{ color: 'red' }}>*</span></FormLabel>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{width:'100%'}}>
                                <Select
                                    value={selectWOrkFromOptYear}
                                    onChange={(selectWOrkFromOptYear)=>setSelectProWorkFromYear(selectWOrkFromOptYear)}
                                    options={WorkedYear}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                                />
                            </div>
                            <div style={{marginLeft:'20px', width:'100%'}}>
                                <Select
                                    value={selectWOrkfromOptMonth}
                                    onChange={(selectWOrkfromOptMonth)=>setselectWOrkfromOptMonth(selectWOrkfromOptMonth)}
                                    options={WorkedMonths}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                            />
                            </div>
                          </div>
              </div>
              {proRadiovalue === "finished" && (
                <div style={{marginTop:'30px'}}>
                          <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Worked Till<span style={{ color: 'red' }}>*</span></FormLabel>
                          <div style={{display:'flex', alignItems:'center'}}>
                              <div style={{width:'100%'}}>
                                  <Select
                                      value={selectWOrkTillOptYear}
                                      onChange={(selectWOrkTillOptYear)=>setSelectProWorkTIllYear(selectWOrkTillOptYear)}
                                      options={WorkedYear}
                                      isSearchable
                                      placeholder="Select or search for an option..."
                                      styles={ customStyles}
                                  />
                              </div>
                              <div style={{marginLeft:'20px', width:'100%'}}>
                                  <Select
                                      value={selectWOrkTillOptMonth}
                                      onChange={(selectWOrkTillOptMonth)=>setselectWOrkTIllOptMonth(selectWOrkTillOptMonth)}
                                      options={WorkedMonths}
                                      isSearchable
                                      placeholder="Select or search for an option..."
                                      styles={ customStyles}
                              />
                              </div>
                            </div>
                </div>
              )}
              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Details of Project<span style={{ color: 'red' }}>*</span></label>
                  <TextField  multiline rows={2}  placeholder="Type here..." fullWidth  variant="outlined" onChange={(e) => setProjectDetails(e.target.value)}  sx={{  borderRadius: '8px',  marginTop:'15px',  outline:'none',  '& .MuiOutlinedInput-root': {borderRadius: '8px', },  }}  styles={ customStyles}/>
              </div>     
              
              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Projecte Site<span style={{ color: 'red' }}>*</span></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label-project-site"
                        name="row-radio-buttons-group-project-site"
                        value={projectSite}
                        onChange={(e)=>setPRojectSite(e.target.value)}
                        
                      >
                        <FormControlLabel value="offsite" control={<Radio size="small"/>} label="offsite" />
                        <FormControlLabel value="onsite" control={<Radio  size="small"/>} label="onsite" />
                    </RadioGroup>
              </div>
              
              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Nature of Employment<span style={{ color: 'red' }}>*</span></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label-project-site"
                        name="row-radio-buttons-group-project-site"
                        value={natureofEmpl}
                        onChange={(e)=>setnatureOfEmpl(e.target.value)}
                        
                      >
                        <FormControlLabel value="fulltime" control={<Radio size="small"/>} label="fulltime" />
                        <FormControlLabel value="parttime" control={<Radio  size="small"/>} label="parttime" />
                        <FormControlLabel value="contractual" control={<Radio  size="small"/>} label="contractual" />
                    </RadioGroup>
              </div>

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Team Size<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Enter team size' onChange={(e)=>setTeamSize(e.target.value)}/>
              </div>

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Role<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Enter role' onChange={(e)=>setRole(e.target.value)}/>
              </div>

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Role Description<span style={{ color: 'red' }}>*</span></label>
                  <TextField  multiline rows={2}  placeholder="Type here..." fullWidth  variant="outlined" onChange={(e)=>setRoleDescription(e.target.value)}  sx={{  borderRadius: '8px',  marginTop:'15px',  outline:'none',  '& .MuiOutlinedInput-root': {borderRadius: '8px', },  }}  styles={ customStyles}/>
              </div>  

              <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                  <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Skills Used<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="company-name" className='text-input' placeholder='Enter role' onChange={(e)=>setProjectSkills(e.target.value)}/>
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                  <button className="resume-model-button" onClick={()=>setOpenPro(false)}>Cancel</button>
                  <button className="resume-model-button" type="submit" >Save</button>
              </div>
            </form> 
           
        </div>          
      </Dialog>
      </div>
    </div>
  );
};

export default Project;


const WorkedYear=[
    
  {"value": "2024", "label": "2024"},
  {"value": "2023", "label": "2023"},
  {"value": "2022", "label": "2022"},
  {"value": "2021", "label": "2021"},
  {"value": "2020", "label": "2020"},
  {"value": "2019", "label": "2019"},
  {"value": "2018", "label": "2018"},
  {"value": "2017", "label": "2017"},
  {"value": "2016", "label": "2016"},
  {"value": "2015", "label": "2015"},
  {"value": "2014", "label": "2014"},
  {"value": "2013", "label": "2013"},
  {"value": "2012", "label": "2012"},
  {"value": "2011", "label": "2011"},
  {"value": "2010", "label": "2010"},
  {"value": "2009", "label": "2009"},
  {"value": "2008", "label": "2008"},
  {"value": "2007", "label": "2007"},
  {"value": "2006", "label": "2006"},
  {"value": "2005", "label": "2005"},
  {"value": "2004", "label": "2004"},
  {"value": "2003", "label": "2003"},
  {"value": "2002", "label": "2002"},
  {"value": "2001", "label": "2001"},
  {"value": "2000", "label": "2000"},
  {"value": "1999", "label": "1999"}

]

const WorkedMonths=[
  {"value": "01", "label": "January"},
  {"value": "02", "label": "February"},
  {"value": "03", "label": "March"},
  {"value": "04", "label": "April"},
  {"value": "05", "label": "May"},
  {"value": "06", "label": "June"},
  {"value": "07", "label": "July"},
  {"value": "08", "label": "August"},
  {"value": "09", "label": "September"},
  {"value": "10", "label": "October"},
  {"value": "11", "label": "November"},
  {"value": "12", "label": "December"}
]