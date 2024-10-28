import React ,{useState, forwardRef}from 'react'
import { Dialog} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from 'react-select';
import { TextField, Divider } from '@mui/material'

import FormLabel from '@mui/material/FormLabel';
import './employment.css'

const years = [
    { value: 'one Year', label: '1 Year' },
    { value: 'two Year', label: '2 Year' },
    { value: 'three Year', label: '3 Year' },
    { value: 'four Year', label: '4 Year' },
    { value: 'five Year', label: '5 Year' },
    { value: 'six Year', label: '6 Year' },
    { value: 'seven Year', label: '7 Year' },
    { value: 'eight Year', label: '8 Year' },
    { value: 'nine Year', label: '9 Year' },
    { value: 'ten Year', label: '10 Year' },
    { value: 'eleven Year', label: '11 Year' },
    { value: 'twele Year', label: '12 Year' },
    { value: 'thirteen Year', label: '13 Year' },
    { value: 'foutreen Year', label: '14+ Year' },
  ];

  const Months = [
    { value: 'first Month', label: '1 Month' },
    { value: 'two Month', label: '2 Month' },
    { value: 'three Month', label: '3 Month' },
    { value: 'four Month', label: '4 Month' },
    { value: 'five Month', label: '5 Month' },
    { value: 'six Month', label: '6 Month' },
    { value: 'seven Month', label: '7 Month' },
    { value: 'eight Month', label: '8 Month' },
    { value: 'nine Month', label: '9 Month' },
    { value: 'ten Month', label: '10 Month' },
    { value: 'eleven Month', label: '11 Month' },
    
  ];


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


const Employment=forwardRef((props, ref)=>{
    const [openEmployee, setOpenEmployee]=useState(false)
    const [selectExpYearOpt,setSeletExpOpt]=useState(null)
    const [selectExpMonthOpt,setSeletMonthOpt]=useState(null)
    const [selectJoinYearOpt,setSeletJoinYear]=useState(null)
    const [selectJoinMOnthOpt, setJoinMOnthOpt]=useState(null)
    const [selectWoToYearOpt,setSeletwoToYear]=useState(null)
    const [selectWorkedTOMOnthOpt, setWorkedToMOnthOpt]=useState(null)
    const [selctNoticeDate,setSelectNOtice]=useState(null)
    const [radiovalue, setRadioValue]=useState('fulltime')
    const [companyName, setCompanyName]=useState('')
    const [currentJobTitle, setCurrentJobTitle] = useState('');
    const [currentSalary, setCurrentSalary] = useState('');
    const [skillsUsed, setSkillsUsed] = useState('');
    const [jobProfile, setJobProfile] = useState('');
    const [fulltimeRole, setFulltimeRole] = useState('');
    const [FulltimeData, setFulltimeData]=useState([])
    
    const [internCompName, setInternCompName]=useState('')
    const [internLocName, setInternLocName]=useState('')
    const [internDepName, setInternDEpName]=useState('')
    const [internStipend, setInternStipend]=useState("")
    const [internwoFrYear, setInternWOfrYear]=useState(null)
    const [internwoFrMonth, setInternWOfrMonth]=useState(null)
    const [internUptoWorkYear, setInternUptoWorkYear]=useState(null)
    const [internUptoWorkMonth, setInternUptoWorkMonth]=useState(null)
    const [internRole, setInternRole]=useState(null)
    const [internData, setInternData]=useState([])


    const handleChangeEXpYear=(selectExpYearOpt)=>{
        setSeletExpOpt(selectExpYearOpt)
    }

    const handleChangeMonth=(selectExpMonthOpt)=>{
        setSeletMonthOpt(selectExpMonthOpt)
    }
    const handleChangeJoinYear=(selectJoinYearOpt)=>{
        setSeletJoinYear(selectJoinYearOpt)
    }

    const handleEmploymentSave=(event)=>{
        event.preventDefault()
        
        const fulltimeDetails = {
            employmentType: radiovalue,
            companyName: companyName,
            experience: {
              years: selectExpYearOpt ? selectExpYearOpt.label : null,
              months: selectExpMonthOpt ? selectExpMonthOpt.label : null,
            },
            joiningDate: {
              year: selectJoinYearOpt ? selectJoinYearOpt.label : null,
              month: selectJoinMOnthOpt ? selectJoinMOnthOpt.label : null,
            },
            WorkedTillDate: {
                year: selectWoToYearOpt ? selectWoToYearOpt.label : null,
                month: selectWorkedTOMOnthOpt ? selectWorkedTOMOnthOpt.label : null,
              },
            noticePeriod: selctNoticeDate ? selctNoticeDate.label : null,
            currentJobTitle: currentJobTitle,
            currentRole:fulltimeRole,
            currentSalary: currentSalary,
            skillsUsed: skillsUsed,
            jobProfile: jobProfile,
          };
          

        const internDetails={
            employmentType: radiovalue,
            internCompnayName:internCompName,
            internLocation:internLocName,
            internDepartment:internDepName,
            internRole: internRole,
            internStipend:internStipend,
            interJoiningDate: {
                year: internwoFrYear ? internwoFrYear.label : null,
                month: internwoFrMonth ? internwoFrMonth.label : null,
              },
            internWorkedTillDate: {
                year: internUptoWorkYear ? internUptoWorkYear.label : null,
                month: internUptoWorkMonth ? internUptoWorkMonth.label : null,
              },  
        }

        if(radiovalue==='fulltime'){
            setFulltimeData((prevData) => {
                if (!Array.isArray(prevData)) {
                    return [fulltimeDetails]; // Initialize it as an array if it wasn't one
                }
                return [...prevData, fulltimeDetails]; // Otherwise, spread in the existing data
            });
        }else{
            setInternData((prevData) => {
                if (!Array.isArray(prevData)) {
                    return [internDetails]; // Initialize it as an array if it wasn't one
                }
                return [...prevData, internDetails]; // Otherwise, spread in the existing data
            });
            console.log(internData)
        } 
        setOpenEmployee(false)
            
    }
   

  return (
    <div className='profile-admin-cnt skills-co-cnt'ref={ref} >
        <div className='employment-cnt'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>Employment</h1>
                <p className='add-emplo-para' onClick={()=>setOpenEmployee(!openEmployee)}>Add Employment</p>
            </div>
            {radiovalue==="internship" &&(<div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start',  marginTop:'25px'}}>
                {internData.map((intern, index)=>(
                  <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>  
                    <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{intern.internRole}</h3>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{intern.internCompnayName}</p>
                    <div style={{display:'flex', flexDirection:'row', padding:'0px', margin:'0px'}}>
                        <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{radiovalue}</p>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{`${intern.interJoiningDate.month} ${intern.interJoiningDate.year} to ${intern.internWorkedTillDate.month} ${intern.internWorkedTillDate.year}`}</p>
                    </div>
                  </div>  
              ))}
            </div>)}
            {radiovalue==='fulltime' &&(<div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', marginTop:'25px'}}>
                {FulltimeData.map((fulltime, index)=>(
                  <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>  
                    <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{fulltime.currentRole}</h3>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{fulltime.companyName}</p>
                    <div style={{display:'flex', flexDirection:'row', padding:'0px', margin:'0px'}}>
                        <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{radiovalue}</p>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{`${fulltime.joiningDate.month} ${fulltime.joiningDate.year} to ${fulltime.WorkedTillDate.month} ${fulltime.WorkedTillDate.year}`}</p>
                    </div>
                    <p style={{fontSize:'15px', color:'#121224', fontFamily:'500',margin:'0px'}}>Notice period: <span style={{fontSize:'15px', color:'#717b9e'}}>{fulltime.noticePeriod}</span></p>
                    <p style={{fontSize:'17px', color:'#121224', fontFamily:'500',margin:'0px'}}>job profile: <span style={{fontSize:'15px', color:'#717b9e'}}>{fulltime.jobProfile}</span></p>
                    <p style={{fontSize:'17px', color:'#121224', fontFamily:'500',margin:'0px'}}>skills: <span style={{fontSize:'15px', color:'#717b9e'}}>{fulltime.skillsUsed}</span></p>
                  </div>  
              ))}
            </div>)}
            <Dialog open={openEmployee} onClose={()=>setOpenEmployee(false)} maxWidth="md" fullWidth sx={{ borderRadius:'20px'}}
                PaperProps={{
                    sx: {
                    borderRadius: '20px',
                    overflowY: 'auto', // To allow scrolling
                    '::-webkit-scrollbar': {
                        display: 'none', // Hide scrollbar for WebKit browsers
                    },
                    '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
                    'scrollbar-width': 'none',     // Hide scrollbar for Firefox
                    },
                }}>
              <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                 <h1 className="resume-modal-heading">Employement</h1>
                 <p className="resume-modal-para">Details like job title, company name, etc, help employers understand your work</p>
                 <form style={{marginTop:'20px'}} onSubmit={handleEmploymentSave}>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Employemnt Type<span style={{ color: 'red' }}>*</span></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radiovalue}
                        onChange={(e)=>setRadioValue(e.target.value)}
                    >
                        <FormControlLabel value="fulltime" control={<Radio />} label="Fulltime" />
                        <FormControlLabel value="internship" control={<Radio />} label="Internship" />
                    </RadioGroup>
                    {radiovalue==='fulltime' && (<div>
                        <div style={{marginTop:'30px'}}>
                            <FormLabel sx={{color:'#121224', marginTop:'10px', fontWeight:'600'}}>Total Experience<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                <Select
                                    value={selectExpYearOpt}
                                    onChange={handleChangeEXpYear}
                                    options={years}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                                />
                            </div>
                            <div style={{marginLeft:'20px', width:'100%'}}>
                                <Select
                                    value={selectExpMonthOpt}
                                    onChange={handleChangeMonth}
                                    options={Months}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                                />
                            </div>
                            </div>

                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Current company name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Enter Compnay Name' onChange={(e)=>setCompanyName(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name'>Current Job Title<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Enter designation name'  onChange={(e) => setCurrentJobTitle(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Role<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Enter Compnay Name' onChange={(e)=>setFulltimeRole(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Joining Date<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                    <Select
                                        value={selectJoinYearOpt}
                                        onChange={handleChangeJoinYear}
                                        options={joinYear}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                    />
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <Select
                                        value={selectJoinMOnthOpt}
                                        onChange={(selectJoinMOnthOpt)=>setJoinMOnthOpt(selectJoinMOnthOpt)}
                                        options={joinMonths}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Worked till<span style={{ color: 'red' }}>*</span></FormLabel>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{width:'100%'}}>
                                <Select
                                    value={selectWoToYearOpt}
                                    onChange={(selectWoToYearOpt)=>setSeletwoToYear(selectWoToYearOpt)}
                                    options={joinYear}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                                />
                            </div>
                            <div style={{marginLeft:'20px', width:'100%'}}>
                                <Select
                                    value={selectWorkedTOMOnthOpt}
                                    onChange={(selectWorkedTOMOnthOpt)=>setWorkedToMOnthOpt(selectWorkedTOMOnthOpt)}
                                    options={joinMonths}
                                    isSearchable
                                    placeholder="Select or search for an option..."
                                    styles={ customStyles}
                            />
                            </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Current Salary<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Eg: 45000' onChange={(e) => setCurrentSalary(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Skills used<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Add skills' onChange={(e) => setSkillsUsed(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Job profile<span style={{ color: 'red' }}>*</span></label>
                            <TextField label="Your Message" multiline rows={2}  placeholder="Type your message here..." fullWidth  variant="outlined" onChange={(e) => setJobProfile(e.target.value)}
                            sx={{
                                borderRadius: '8px',
                                marginTop:'15px',
                                outline:'none',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '8px', 
                                },
                            }}
                            styles={ customStyles}
                            />
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                        <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Notice Period<span style={{ color: 'red' }}>*</span></label>
                        <div style={{marginLeft:'10px', width:'100%'}}>
                                <Select
                                    value={selctNoticeDate}
                                    onChange={(selctNoticeDate)=>setSelectNOtice(selctNoticeDate)}
                                    options={noticeDays}
                                    isSearchable
                                    placeholder="choose notice period"
                                    styles={ customStyles}
                            />
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <button className="resume-model-button" onClick={()=>setOpenEmployee(false)}>Cancel</button>
                            <button className="resume-model-button" type="submit" >Save</button>
                        </div>
                    </div>)}
                    {radiovalue==="internship" && (<div>
                       
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Current company name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Enter Compnay Name' onChange={(e)=>setInternCompName(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name'>Location<span style={{ color: 'red' }}>*</span></label>
                            <div style={{marginLeft:'10px', width:'100%'}}>
                                <Select
                                    value={internLocName}
                                    onChange={(internLocName)=>setInternLocName(internLocName)}
                                    options={itCities}
                                    isSearchable
                                    placeholder="choose notice period"
                                    styles={ customStyles}
                               />
                            </div>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                           <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Department<span style={{ color: 'red' }}>*</span></label>
                           <div style={{marginLeft:'10px', width:'100%'}}>
                                <Select
                                    value={internDepName}
                                    onChange={(internDepName)=>setInternDEpName(internDepName)}
                                    options={departmentOptions}
                                    isSearchable
                                    placeholder="choose notice period"
                                    styles={ customStyles}
                               />
                            </div>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Role<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Enter Compnay Name' onChange={(e)=>setInternRole(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Working from<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                    <Select
                                        value={internwoFrYear}
                                        onChange={(internwoFrYear)=>setInternWOfrYear(internwoFrYear)}
                                        options={joinYear}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                    />
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <Select
                                        value={internwoFrMonth}
                                        onChange={(internwoFrMonth)=>setInternWOfrMonth(internwoFrMonth)}
                                        options={joinMonths}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Worked till<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                    <Select
                                        value={internUptoWorkYear}
                                        onChange={(internUptoWorkYear)=> setInternUptoWorkYear(internUptoWorkYear)}
                                        options={joinYear}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                    />
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <Select
                                        value={internUptoWorkMonth}
                                        onChange={(internUptoWorkMonth)=>setInternUptoWorkMonth(internUptoWorkMonth)}
                                        options={joinMonths}
                                        isSearchable
                                        placeholder="Select or search for an option..."
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Monthly stipend<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Eg: 15000' onChange={(e) => setInternStipend(e.target.value)}/>
                        </div>
            
                        <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <button className="resume-model-button" onClick={()=>setOpenEmployee(false)}>Cancel</button>
                            <button className="resume-model-button" type="submit" >Save</button>
                        </div>
                    </div>)}
                 </form>
              </div>

            </Dialog>    
        </div>
    </div>
  )
})

export default Employment





const joinYear=[
    
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

const joinMonths=[
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
  const noticeDays=[
    {value:'15 Days or less ',label:'15 Days or less '},
    {value:'1 Month',label:'1 Month'},
    {value:'2 Month',label:'2 Month'},
    {value:'3 Month',label:'3 Month'},
    {value:'More than Months',label:'More than Months'},
    {value:'no',label:'Serving Notice Period'},
  ]
  const itCities = [
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'gurgaon', label: 'Gurgaon' },
    { value: 'noida', label: 'Noida' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'trivandrum', label: 'Trivandrum' },
    { value: 'bhubaneswar', label: 'Bhubaneswar' },
    { value: 'coimbatore', label: 'Coimbatore' },
    { value: 'indore', label: 'Indore' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'kochi', label: 'Kochi' },
  ];  
  const departmentOptions = [
    { value: 'hr', label: 'Human Resources' },
    { value: 'it_support', label: 'IT Support' },
    { value: 'software_development', label: 'Software Development' },
    { value: 'web_development', label: 'Web Development' },
    { value: 'network_engineering', label: 'Network Engineering' },
    { value: 'cloud_computing', label: 'Cloud Computing' },
    { value: 'data_science', label: 'Data Science' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'devops', label: 'DevOps' },
    { value: 'ui_ux_design', label: 'UI/UX Design' },
    { value: 'quality_assurance', label: 'Quality Assurance' },
    { value: 'product_management', label: 'Product Management' },
    { value: 'database_administration', label: 'Database Administration' },
    { value: 'business_analysis', label: 'Business Analysis' },
    { value: 'mobile_app_development', label: 'Mobile App Development' },
    { value: 'it_project_management', label: 'IT Project Management' },
    { value: 'cloud_architecture', label: 'Cloud Architecture' },
    { value: 'machine_learning', label: 'Machine Learning' },
    { value: 'ai_engineering', label: 'AI Engineering' },
    { value: 'enterprise_architecture', label: 'Enterprise Architecture' },
    { value: 'systems_administration', label: 'Systems Administration' }
  ];