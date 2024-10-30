import { Dialog, FormControlLabel, RadioGroup, Radio, FormLabel,FormControl, Checkbox, TextField} from '@mui/material'
import React,{useState, forwardRef} from 'react'
import { CiEdit } from 'react-icons/ci'
import Select from 'react-select';
import './personal.css'


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

const PersonalDetails=forwardRef((props, ref)=>{
    const [openPersonal, setOpenPersonal]=useState(false)
    const [selectedGender, setSelectedGender]=useState("")
    const [selectedPersonValues, setSelectedPersonValues] = useState([]);
    const [maritalStatus, setMaritalStatus]=useState("")
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [Category, setCategory] = useState('');
    const [abledPerson, setAbledPerson]=useState("")
    const [careerBreak, setCareerBreak]=useState("")
    const [workPermit, setWorkpermit]=useState("")
    const [selectCountries, setSelectCOuntries]=useState("")
    const [address, setAddress]=useState("")
    const [homwtown, setHometown]=useState("")
    const [pincode, setPincode]=useState("")
    const [disableType, setDisabledType]=useState("")
    const[disTypeDescr, setDisTypeDescr]=useState("")
    const [languages, setLanguages] = useState([
      { language: '', proficiency: '', checkboxValue: { read: false, write: false, speak: false } },
    ]);
    const [personalData, setPersonalData]=useState([])

   console.log(languages)
   
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1980 + 1 }, (_, i) => currentYear - i);

    const handleClickMoreInfo=(e)=>{
       if(e.target.tagName==='LI'){
        const value = e.target.textContent.replace('+', '').trim();

        setSelectedPersonValues((prevSelectedValues) => 
          prevSelectedValues.includes(value)
            ? prevSelectedValues.filter((item) => item !== value) 
            : [...prevSelectedValues, value] 
        );
       }
    }

    const handleLanguageChange = (index, event) => {
      const newLanguages = [...languages];
      newLanguages[index].language = event.target.value;
      setLanguages(newLanguages);
    };

    const handleProficiencyChange = (index, event) => {
      const newLanguages = [...languages];
      newLanguages[index].proficiency = event.target.value;
      setLanguages(newLanguages);
    };

    const handleCheckboxChange = (index, event) => {
      const { name, checked } = event.target;
      const newLanguages = [...languages];
      newLanguages[index].checkboxValue[name] = checked;
      setLanguages(newLanguages);
    };

    const addLanguage = () => {
      setLanguages([...languages, { language: '', proficiency: '', checkboxValue: { read: false, write: false, speak: false } }]);
    };
    
    const handleSavePerDetails = async (event) => {
      event.preventDefault();
  
      const personalDetails = {
        gender: selectedGender,
        personalVales: selectedPersonValues,
        maritalStatus: maritalStatus,
        dateOfBirth: {
            day: day || "", // Provide fallback value if undefined
            month: month || "",
            year: year || ""
        },
        category: Category,
        abledPerson: abledPerson,
        disableType: disableType ? disableType.label : "",
        disTypeDescr: disTypeDescr,
        careerBreak: careerBreak,
        workPermit: workPermit ? workPermit.label : "",
        selectCountries: selectCountries,
        address: address,
        homwtown: homwtown,
        pincode: pincode,
        languages: languages
    };
  
      // Set personal data in state
      setPersonalData((prevData) => {
          if (!Array.isArray(prevData)) {
              return [personalDetails];
          }
          return [personalDetails];
      });
  
      // Send the data to the API endpoint
      // try {
      //     const response = await fetch("https://workisy-backend-nyf4.onrender.com/api/personalDetails", {
      //         method: "POST",
      //         headers: {
      //             "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify(personalDetails),
      //     });
  
      //     if (response.ok) {
      //         const responseData = await response.json();
      //         console.log("Data successfully saved:", responseData);
      //     } else {
      //         console.error("Failed to save data:", response.statusText);
      //     }
      // } catch (error) {
      //     console.error("Error:", error);
      // }
  
      // Close the personal details form/modal
      setOpenPersonal(false);
  };

   console.log(personalData)
  return (
    <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
        <div className='itskills-cnt'>
            <div style={{display:'flex', }}>
              <p className="resume-heading">Personal Details</p>
              <button className='edit-button' onClick={()=>setOpenPersonal(!openPersonal)}><CiEdit style={{outline:'none'}}/></button>
            </div>
            {personalData.map((each, index)=>(
            <div key={index}>
              <div className='career-section-cnt' >
                  <div className='career-details-cnt' style={{marginLeft:'40px'}}>
                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Personal</h3>
                        <h3 className='carreer-content'>{each.gender},{each.maritalStatus}</h3>
                      </div>


                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Date of birth</h3>
                        <h3 className='carreer-content'>{`${each.dateOfBirth.day}-${each.dateOfBirth.month}-${each.dateOfBirth.year}`}</h3>
                      </div>

                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Category</h3>
                        <h3 className='carreer-content'>{each.category}</h3>
                      </div>

                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Differently abled</h3>
                        <h3 className='carreer-content'>{each.abledPerson}</h3>
                      </div>
                  </div>
                  <div className='career-details-cnt career-second-cnt' >
                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Career break</h3>
                        <h3 className='carreer-content'>{each.careerBreak}</h3>
                      </div>

                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Work permit</h3>
                        <h3 className='carreer-content'>{each.workPermit}</h3>
                      </div>

                      <div className='current-industry-cnt'>
                        <h3 className='carreer-title'>Address</h3>
                        <h3 className='carreer-content'>{each.address}</h3>
                      </div>

                  </div>
                  
              </div>
            </div>
            ))}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>languages</h1>
                <p className='add-emplo-para' onClick={()=>setOpenPersonal(!openPersonal)}>Add language</p>
            </div>
            <div>
                <table  cellPadding="10" style={{  width: '100%' }} className='table'>
                    <thead >
                        <tr className='thead-row'>
                            <th className='table-head'>Languages</th>
                            <th className='table-head'>Proficiency</th>
                            <th className='table-head'>Read</th>
                            <th className='table-head'>Write</th>
                            <th className='table-head'>Speak</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                      {personalData.length > 0 && personalData[0].languages.length > 0 ? (
                        personalData[0].languages.map((each, index) => (
                          <tr key={index}>
                            <td className="custom-td">{each.language}</td>
                            <td className="custom-td">{each.proficiency}</td>
                            <td className="custom-td">{each.checkboxValue.read ? '🗸' : '--'}</td>
                            <td className="custom-td">{each.checkboxValue.write ? '🗸' : '--'}</td>
                            <td className="custom-td">{each.checkboxValue.speak ? '🗸' : '--'}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center' }}>No data available</td>
                        </tr>
                      )}
                    </tbody>
                </table>
            </div>
            <Dialog open={openPersonal} onClose={() => setOpenPersonal(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
                <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                    <h1 className="resume-modal-heading">Personal Details</h1>
                    <p className="resume-modal-para">This information is important for employers to know you better.</p>

                    <form style={{marginTop:'20px'}} onSubmit={handleSavePerDetails}>
                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name'>Gender</label>
                          <ul className='gender-ul-cnt'>
                             <li  className={`gender-item-cnt ${selectedGender === 'Male' ? 'selected' : ''}`}   onClick={()=>setSelectedGender("Male")}>Male</li>
                             <li className={`gender-item-cnt ${selectedGender === 'Female' ? 'selected' : ''}`}   onClick={()=>setSelectedGender("Female")}>Female</li>
                             <li className={`gender-item-cnt ${selectedGender === 'Transgender' ? 'selected' : ''}`}   onClick={()=>setSelectedGender("Transgender")}>Transgender</li>
                          </ul>
                       </div>

                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name'>More information</label>
                          <p className="resume-modal-para">Companies are focusing on equal opportunities and might be looking for candidates from diverse backgrounds.</p>
                          <ul className='gender-ul-cnt' onClick={handleClickMoreInfo}>
                             <li className={`gender-item-cnt ${selectedPersonValues.includes('Single parent')? "selected" : ""}`}  >Single parent +</li>
                             <li className={`gender-item-cnt ${selectedPersonValues.includes('Working woman')? "selected" : ""}`} >Working woman +</li>
                             <li className={`gender-item-cnt ${selectedPersonValues.includes('Served in military')? "selected" : ""}`} >Served in military +</li>
                             <li className={`gender-item-cnt ${selectedPersonValues.includes('Retired (60)')? "selected" : ""}`}  >Retired (60) +</li>
                             <li className={`gender-item-cnt ${selectedPersonValues.includes('LGBTQ')? "selected" : ""}`}  >LGBTQ +</li>
                          </ul>
                       </div>

                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name'>Marital status</label>
                          <ul className='gender-ul-cnt'>
                             <li  className={`gender-item-cnt ${maritalStatus === 'Single/Unmarried' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Single/Unmarried")}>Single/Unmarried</li>
                             <li className={`gender-item-cnt ${maritalStatus === 'Married' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Married")}>Married</li>
                             <li className={`gender-item-cnt ${maritalStatus === 'Widowed' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Widowed")}>Widowed</li>
                             <li className={`gender-item-cnt ${maritalStatus === 'Divorced' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Divorced")}>Divorced</li>
                             <li className={`gender-item-cnt ${maritalStatus === 'Separated' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Separated")}>Separated</li>
                             <li className={`gender-item-cnt ${maritalStatus === 'Other' ? 'selected' : ''}`}   onClick={()=>setMaritalStatus("Other")}>Other</li>
                          </ul>
                       </div>

                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name'>Date of birth</label>
                          <div className="dob-container">

                            <select className="dob-dropdown" value={day} onChange={(e) => setDay(e.target.value)}>
                              
                                <option value="" disabled>Select Day</option>
                                {days.map((d) => (<option key={d} value={d}>{d}</option>))}
                              
                            </select>

                            <select className="dob-dropdown"  value={month} onChange={(e) => setMonth(e.target.value)}>
                              <option value="" disabled>Select Month</option>
                              {months.map((m, index) => ( <option key={index} value={m}>{m}</option> ))}
                            </select>

                            <select  className="dob-dropdown"  value={year}  onChange={(e) => setYear(e.target.value)}>
                              <option value="" disabled>Select Year</option>
                              {years.map((y) => (  <option key={y} value={y}>{y}</option>  ))}
                            </select>
                          </div>
                       </div>

                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name'>Category</label>
                          <p className="resume-modal-para">Companies welcome people from various categories to bring equality among all citizens.</p>
                          <ul className='gender-ul-cnt'>
                            
                             <li className={`gender-item-cnt ${Category === 'General' ? 'selected' : ''}`}   onClick={()=>setCategory("General")}>General</li>
                             <li className={`gender-item-cnt ${Category === 'Scheduled Caste(SC)' ? 'selected' : ''}`}   onClick={()=>setCategory("Scheduled Caste(SC)")}>Scheduled Caste(SC)</li>
                             <li className={`gender-item-cnt ${Category === 'Scheduled Tribe(ST)' ? 'selected' : ''}`}   onClick={()=>setCategory("Scheduled Tribe(ST)")}>Scheduled Tribe(ST)</li>
                             <li className={`gender-item-cnt ${Category === 'OBC- Creamy' ? 'selected' : ''}`}   onClick={()=>setCategory("OBC- Creamy")}>OBC- Creamy</li>
                             <li className={`gender-item-cnt ${Category === 'OBC-Non Creamy' ? 'selected' : ''}`}   onClick={()=>setCategory("OBC-Non Creamy")}>OBC-Non Creamy</li>
                             <li  className={`gender-item-cnt ${Category === 'Other' ? 'selected' : ''}`}   onClick={()=>setCategory("Other")}>Other</li>
                          </ul>
                       </div>

                       <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Are you differently abled?<span style={{ color: 'red' }}>*</span></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label-project"
                                name="row-radio-buttons-group-project"
                                value={abledPerson}
                                onChange={(e)=>setAbledPerson(e.target.value)}
                                sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'40%'}}
                              >
                                <FormControlLabel value="yes" control={<Radio size="small"/>} label="Yes" />
                                <FormControlLabel value="no" control={<Radio size="small"/>} label="No" />
                            </RadioGroup>
                      </div>
                      {abledPerson==="yes" && (
                       <div style={{marginLeft:'10px'}}>
                          <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name'>Type<span style={{ color: 'red' }}>*</span></label>
                                <div style={{marginTop:'7px', width:'100%'}}>
                                    <Select
                                      value={disableType}
                                        onChange={(disableType)=>setDisabledType(disableType)}
                                        options={disabilityOptions}
                                        isSearchable
                                        placeholder="Select current industry"
                                        styles={customStyles}
                                            
                                  />
                                  </div>
                          </div>
                          <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Do you need assistance at your workplace?<span style={{ color: 'red' }}>*</span></label>
                            <TextField  multiline rows={2}  placeholder="Type here(example Need-Wheelchair)" fullWidth  variant="outlined" onChange={(e)=> setDisTypeDescr(e.target.value)}  sx={{  borderRadius: '8px',  marginTop:'15px',  outline:'none',  '& .MuiOutlinedInput-root': {borderRadius: '8px', },  }}  styles={ customStyles}/>
                        </div> 
                      </div>
                      )}
                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Have you taken a career break?<span style={{ color: 'red' }}>*</span></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label-project"
                                name="row-radio-buttons-group-project"
                                value={careerBreak}
                                onChange={(e)=>setCareerBreak(e.target.value)}
                                sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'40%'}}
                              >
                                <FormControlLabel value="yes" control={<Radio size="small"/>} label="Yes" />
                                <FormControlLabel value="no" control={<Radio size="small"/>} label="No" />
                            </RadioGroup>
                      </div>
                      
                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name'>Work permit for USA</label>
                            <div style={{marginTop:'7px', width:'100%'}}>
                                <Select
                                    value={workPermit}
                                    onChange={(workPermit)=>setWorkpermit(workPermit)}
                                    options={ workpermitList}
                                    isSearchable
                                    placeholder="Select Education"
                                    styles={ customStyles}
                                    
                               />
                            </div>
                      </div>

                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Work permit for other countries<span style={{ color: 'red' }}>*</span></label>
                           <input type="text" id="company-name" className='text-input' placeholder='Enter countries' onChange={(e)=>setSelectCOuntries(e.target.value)}/>
                      </div>

                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Permanent address<span style={{ color: 'red' }}>*</span></label>
                           <input type="text" id="company-name" className='text-input' placeholder='Enter countries' onChange={(e)=>setAddress(e.target.value)}/>
                      </div>

                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Hometown<span style={{ color: 'red' }}>*</span></label>
                           <input type="text" id="company-name" className='text-input' placeholder='Enter countries' onChange={(e)=>setHometown(e.target.value)}/>
                      </div>

                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                          <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Pincode<span style={{ color: 'red' }}>*</span></label>
                           <input type="text" id="company-name" className='text-input' placeholder='Enter countries' onChange={(e)=>setPincode(e.target.value)}/>
                      </div>
                      <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                        <h1 className="resume-modal-heading">Language proficiency</h1>
                        <p className="resume-modal-para">Strengthen your resume by letting recruiters know you can communicate in multiple languages.</p>
                        {languages.map((lang, index) => (
                        <div  key={index}>
                          <div style={{marginTop:'30px', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>

                            <div style={{ display:'flex', flexDirection:'column',  width:'40%'}}>
                              <label htmlFor={`language-${index}`}  className='label-name' style={{fontWeight:'600'}}>Language</label>
                              <input type="text" id={`language-${index}`} value={lang.language} className='text-input' placeholder='Enter Language' onChange={(e) => handleLanguageChange(index, e)}/>
                            </div>

                            <div style={{ display:'flex', flexDirection:'column', width:'40%', marginLeft:'10px'}}>
                              <label htmlFor={`proficiency-${index}`} className='label-name' style={{fontWeight:'600'}}>proficiency</label>
                              <select className='text-input' name="proficiency"   value={lang.proficiency} onChange={(e) => handleProficiencyChange(index, e)} style={{height:'35px'}}>
                                <option value="Beginner">Beginner</option>
                                <option value="Proficient">Proficient</option>
                                <option value="Expert">Expert</option> 
                              </select>
                            </div>
                          </div>
                          
                          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
                              <FormControl component="fieldset">
                                  <div className="checkbox-container">
                                    <FormControlLabel control={<Checkbox checked={lang.checkboxValue.read}   onChange={(e) => handleCheckboxChange(index, e)}  name="read" color="dark" size='small'/>}label="Read"/>
                                    <FormControlLabel  control={  <Checkbox  checked={lang.checkboxValue.write}   onChange={(e) => handleCheckboxChange(index, e)}  name="write"  color="dark" size='small'/>} label="Write"/>
                                   
                                    <FormControlLabel  control={  <Checkbox  checked={lang.checkboxValue.speak}   onChange={(e) => handleCheckboxChange(index, e)}  name="speak"  color="dark" size='small'/>} label="Speak"/>
                                  </div>
                              </FormControl>

                              <p className='delete-lang'>Delete</p>
                          </div>
                           
                        </div>
                        ))}
                        <p className='delete-lang' onClick={addLanguage}>Add Language</p>
                      </div>

                      <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                        <button className="resume-model-button" onClick={()=>setOpenPersonal(false)}>Cancel</button>
                        <button className="resume-model-button" type="submit">Save</button>
                      </div>
                    </form> 
                </div>        
            </Dialog> 
        </div>
    </div>        
  )
})

export default PersonalDetails

const workpermitList=[
  {value:'have us', label: 'Have US H1 Visa'},
  {value:'need us', label: 'Need US H1 Visa'},
  {value:'tnpermit', label: 'US TN Permit holder'},
  {value:'green card', label: 'US Green card holder'},
  {value:'citizen', label: 'US Citizen'},
  {value:'authorized', label: 'Authorized to work in US'}
]

const disabilityOptions = [
  { value: 'blindness', label: 'Blindness' },
  { value: 'low-vision', label: 'Low Vision' },
  { value: 'hearing-impairment', label: 'Hearing Impairment' },
  { value: 'speech-language-disability', label: 'Speech and Language Disability' },
  { value: 'locomotor-disability', label: 'Locomotor Disability' },
  { value: 'leprosy-cured-person', label: 'Leprosy Cured Person' },
  { value: 'cerebral-palsy', label: 'Cerebral Palsy' },
  { value: 'dwarfism', label: 'Dwarfism' },
  { value: 'muscular-dystrophy', label: 'Muscular Dystrophy' },
  { value: 'acid-attack-victims', label: 'Acid Attack Victims' },
  { value: 'specific-learning-disabilities', label: 'Specific Learning Disabilities' },
  { value: 'autism-spectrum-disorder', label: 'Autism Spectrum Disorder' },
  { value: 'mental-illness', label: 'Mental Illness' },
  { value: 'haemophilia', label: 'Haemophilia' },
  { value: 'sickle-cell-disease', label: 'Sickle Cell Disease' },
  { value: 'thalassemia', label: 'Thalassemia' },
  { value: 'parkinsons-disease', label:  "Parkinson's Disease" },
  { value: 'intellectual-disability', label: 'Intellectual Disability' },
  { value: 'chronic-neurological-conditions', label: 'Chronic Neurological Conditions' },
  { value: 'multiple-sclerosis', label: 'Multiple Sclerosis' },
  { value: 'multiple-disabilities-deaf-blindness', label: 'Multiple Disabilities including Deaf Blindness' },
  { value: 'others', label: 'Others' },
];