import React,{useState, forwardRef} from 'react'
import { Dialog} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from 'react-select';
import {Divider } from '@mui/material'
import './education.css'

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

const Education=forwardRef((props, ref)=>{
    const [opneEdu, setEducation]=useState(false)
    const [educationType, setTypeEducation]=useState(educationOption[1])
    const [university, setUniversity]=useState('')
    const [course, setCourse]=useState('')
    const [specilization,setSpecilization ]=useState('')
    const [eduRadiovalue, setEduRadiovalue]=useState('')
    const [startyear, setStartyear]=useState("")
    const [endYear, setEndyear]=useState("")
    const [gradeType, setGradeType]=useState("")
    const [marks, setMarks]=useState("")
    const [eduData, setEduData]=useState([])

    const [board, setBoard]=useState("")
    const [passoutYear, setPassoutYear]=useState("")
    const [schoolMedium, setSchoolMedium]=useState("")
    const [interMarks, setInterMarks]=useState("")
    const [interEngMarks, setInterEngMarks]=useState("")
    const [interMathMarks, setInterMathMarks]=useState("")
    const [sscMarks, setSscMarks]=useState("")
    const [sscpassoutYear, setSccPassoutYear]=useState("")
    
    const [sscData, setSscData]=useState([])
    const [interData, setInterData]=useState([])
    const startyearOptions = [];
    const endYearOptions=[];
    
    console.log(educationType)
    for (let year = 2024; year >= 1940; year--) {
     startyearOptions.push({ value: year, label: year.toString() });
    }

    for (let year = 2034; year >= 1940; year--) {
        endYearOptions.push({ value: year, label: year.toString() });
    }

    const handleChangeSaveEdu=(event)=>{
        event.preventDefault()

        const eduDetails={
           educationType: educationType.label,
           universityName :university,
           courseName :course.label,
           specilizationName:specilization,
           eduRadiovalue:eduRadiovalue,
           startyear:startyear.label,
           endYear:endYear.label,
           gradeType:gradeType.label,
           marks:marks
        }

        const sscDetails={
            educationType: educationType.label,
            board:board.label,
            sscPassyear: sscpassoutYear.label,
            sccMarks:sscMarks,
            schoolMedium:schoolMedium.label

        }

        const InterDetails={
            educationType: educationType.label,
            passoutYear:passoutYear.label,
            board:board.label,
            interMarks:interMarks,
            interEngMarks:interEngMarks,
            interMathMarks:interMathMarks,

        }
       
        if(educationType.label==='Class XII'){
            setInterData((prevData) => {
                if (!Array.isArray(prevData)) {
                    return [InterDetails]; // Initialize it as an array if it wasn't one
                }
                return [...prevData, InterDetails]; // Otherwise, spread in the existing data
            });
        }else if(educationType.label==='Class X'){
            setSscData((prevData) => {
                if (!Array.isArray(prevData)) {
                    return [sscDetails]; // Initialize it as an array if it wasn't one
                }
                return [...prevData, sscDetails]; // Otherwise, spread in the existing data
            });
        }else{
            setEduData((prevData) => {
                if (!Array.isArray(prevData)) {
                    return [eduDetails]; // Initialize it as an array if it wasn't one
                }
                return [...prevData, eduDetails]; // Otherwise, spread in the existing data
            });
    
        }
        

        setEducation(false)
        
        
    }
   
   
  return (
    <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
        <div className='employment-cnt'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>Education</h1>
                <p className='add-emplo-para' onClick={()=>setEducation(!opneEdu)}>Add Education</p>
            </div>
            <div className='data-cnt'>
                {eduData.map((edu, index)=>(
                <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
                <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{edu.courseName}</h3>
                <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{edu.universityName}</p>
                <div style={{display:'flex', flexDirection:'row', padding:'0px', margin:'0px'}}>
                    <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{`${edu.startyear}-${edu.endYear}`}</p>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <p style={{fontSize:'15px', color:'#717b9e', margin:'5px'}}>{edu.eduRadiovalue}</p>
                </div>
                </div>
                ))}
            </div>

            <div className='data-cnt'>
                {interData.map((inter, index)=>(
                <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{inter.educationType}</h3>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{inter.board}</p>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{inter.passoutYear}</p>
                </div>
                ))}
            </div>
            <div className='data-cnt'>
                {sscData.map((ssc, index)=>(
                <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <h3 style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{ssc.educationType}</h3>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{ssc.board}</p>
                    <p style={{fontSize:'15px', color:'#121224', padding:'0px', margin:'0px'}}>{ssc.sscPassyear}</p>
                </div>
                ))}
            </div>
            <Dialog open={opneEdu} onClose={()=>setEducation(false)} maxWidth="md" fullWidth  PaperProps={{
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
                 <h1 className="resume-modal-heading">Education</h1>
                 <p className="resume-modal-para">Details like course, university, and more, help recruiters identify your educational background</p>
                 <form style={{marginTop:'20px'}} onSubmit={handleChangeSaveEdu}>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name'>Education<span style={{ color: 'red' }}>*</span></label>
                            <div style={{marginTop:'7px', width:'100%'}}>
                                <Select
                                    value={educationType}
                                    onChange={(educationType)=>setTypeEducation(educationType)}
                                    options={educationOption}
                                    isSearchable
                                    placeholder="Select Education"
                                    styles={ customStyles}
                                    
                               />
                            </div>
                        </div>

                        {(educationType.label==='Doctorate/PhD ' || educationType.label==='Masters/Post-Graduation' || educationType.label==='Graduation/Diploma') && 
                         (<>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>University/Institute<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" id="company-name" className='text-input' placeholder='Enter University/Institute name' onChange={(e)=>setUniversity(e.target.value)}/>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Course<span style={{ color: 'red' }}>*</span></label>
                                <div style={{marginTop:'7px', width:'100%'}}>
                                    <Select
                                        value={course}
                                        onChange={(course)=>setCourse(course)}
                                        options={courses}
                                        isSearchable
                                        placeholder="Select Education"
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Specialization<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" id="company-name" className='text-input' placeholder='Enter specilizaton' onChange={(e)=>setSpecilization(e.target.value)}/>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Employemnt Type<span style={{ color: 'red' }}>*</span></FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label-education"
                                    name="row-radio-buttons-group-education"
                                    value={eduRadiovalue}
                                    onChange={(e)=>setEduRadiovalue(e.target.value)}
                                >
                                    <FormControlLabel value="fulltime" control={<Radio />} label="Fulltime" />
                                    <FormControlLabel value="part time" control={<Radio />} label="Part time" />
                                    <FormControlLabel value="distance learning" control={<Radio />} label="Distance learning" />
                                </RadioGroup>
                            </div>
                            <div style={{marginTop:'30px'}}>
                            
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Course Duration<span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'15px' }}>
                                    <div style={{ width:'100%'}}>   
                                    <Select
                                            value={startyear}
                                            onChange={(startyear)=>setStartyear(startyear)}
                                            options={startyearOptions}
                                            isSearchable
                                            placeholder="Starting year"
                                            style={{width:'100%'}}  
                                            styles={ customStyles}                                      
                                    />
                                    </div>   
                                    <span style={{fontWeight:'600', color:'#121224', marginLeft:'5px', marginRight:'5px'}}>TO</span>  
                                    <div style={{ width:'100%'}}>       
                                        <Select
                                            value={endYear}
                                            onChange={(endYear)=>setEndyear(endYear)}
                                            options={endYearOptions}
                                            isSearchable
                                            placeholder="Ending Year"
                                            styles={ customStyles}
                                            
                                        /> 
                                    </div>       
                                </div>   
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                    <label htmlFor="company-name" className='label-name'>Education<span style={{ color: 'red' }}>*</span></label>
                                    <div style={{marginTop:'7px', width:'100%'}}>
                                        <Select
                                            value={gradeType}
                                            onChange={(gradeType)=>setGradeType(gradeType)}
                                            options={grades}
                                            isSearchable
                                            placeholder="Select Grade"
                                            styles={ customStyles}
                                        />
                                    </div>
                                </div>
                            {(
                                    gradeType.label === 'scale 10 Grading System' ||
                                    gradeType.label === 'scale 4 Grading System' ||
                                    gradeType.label === '% Marks of 100 maximum'
                                ) &&
                            (<div style={{marginTop:'30px', display:'flex', flexDirection:'column'}}>
                                <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Marks<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" id="company-name" className='text-input' placeholder='Enter Marks' onChange={(e)=>setMarks(e.target.value)}/>
                                </div>
                            )}
                            </div>
                           </>)}
                        {(educationType.label==='Class XII' || educationType.label==='Class X') &&
                           (<>
                               <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                    <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Board<span style={{ color: 'red' }}>*</span></label>
                                    <div style={{marginTop:'7px', width:'100%'}}>
                                        <Select
                                            value={board}
                                            onChange={(board)=>setBoard(board)}
                                            options={educationBoards}
                                            isSearchable
                                            placeholder="Select Board"
                                            styles={ customStyles}
                                            
                                    />
                                    </div>
                                </div>
                                {educationType.label==='Class XII' &&
                                (<div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                    <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>passing out Year<span style={{ color: 'red' }}>*</span></label>
                                    <div style={{marginTop:'7px', width:'100%'}}>
                                        <Select
                                            value={sscpassoutYear}
                                            onChange={(sscpassoutYear)=>setSccPassoutYear(sscpassoutYear)}
                                            options={startyearOptions}
                                            isSearchable
                                            placeholder="Select passout year"
                                            styles={ customStyles}
                                    />
                                    </div>
                                </div>)}
                                {educationType.label==='Class X' && (
                                <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                    <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>passing out Year<span style={{ color: 'red' }}>*</span></label>
                                    <div style={{marginTop:'7px', width:'100%'}}>
                                        <Select
                                            value={passoutYear}
                                            onChange={(passoutYear)=>setPassoutYear(passoutYear)}
                                            options={startyearOptions}
                                            isSearchable
                                            placeholder="Select passout year"
                                            styles={ customStyles}
                                    />
                                    </div>
                                </div>
                                )}
                                <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                    <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>School Medium<span style={{ color: 'red' }}>*</span></label>
                                    <div style={{marginTop:'7px', width:'100%'}}>
                                        <Select
                                            value={schoolMedium}
                                            onChange={(schoolMedium)=> setSchoolMedium(schoolMedium)}
                                            options={medium}
                                            isSearchable
                                            placeholder="Select passout year"
                                            styles={ customStyles}
                                    />
                                    </div>
                                </div>
                               {educationType.label==='Class XII' &&
                                (<>
                                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                      <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Marks<span style={{ color: 'red' }}>*</span></label>
                                      <input type="text" id="company-name" className='text-input' placeholder='% marks of 100 maximum' onChange={(e)=>setInterMarks(e.target.value)}/>
                                    </div>
                                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                      <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>English Marks<span style={{ color: 'red' }}>*</span></label>
                                      <input type="text" id="company-name" className='text-input' placeholder='marks (out of 100)' onChange={(e)=>setInterEngMarks(e.target.value)}/>
                                    </div>
                                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                      <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Maths Marks<span style={{ color: 'red' }}>*</span></label>
                                      <input type="text" id="company-name" className='text-input' placeholder='marks (out of 100)' onChange={(e)=>setInterMathMarks(e.target.value)}/>
                                    </div>
                                </>)}
                                {educationType.label==='Class X' &&(
                                   <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                     <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Marks<span style={{ color: 'red' }}>*</span></label>
                                     <input type="text" id="company-name" className='text-input' placeholder='% marks of 100 maximum' onChange={(e)=>setSscMarks(e.target.value)}/>
                                 </div> 
                                )}
                            </>)
                         }
                        <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <button className="resume-model-button" onClick={()=>setEducation(false)}>Cancel</button>
                            <button className="resume-model-button" type="submit" >Save</button>
                        </div>
                 </form>
            </div>     
            </Dialog>
        </div>
    </div>    
  )
})
export default Education

const educationOption=[
    {value:'doctarate', label: 'Doctorate/PhD '},
    {value:'masters', label: 'Masters/Post-Graduation'},
    {value:'graduation', label: 'Graduation/Diploma'},
    {value:'12TH', label: 'Class XII'},
    {value:'10th', label: 'Class X'}
]

const grades=[
    {value:'scale 10 Grading System', label:'scale 10 Grading System'},
    {value:'scale 4 Grading System', label:'scale 4 Grading System'},
    {value:'% Marks of 100 maximum', label:'% Marks of 100 maximum'},
    {value:'Course Requires Pass', label:'Course Requires Pass'},
]

const courses = [
    { value: "btech_be", label: "B.Tech/B.E." },
    { value: "bcom", label: "B.Com" },
    { value: "bsc", label: "B.Sc" },
    { value: "ba", label: "B.A" },
    { value: "diploma", label: "Diploma" },
    { value: "barch", label: "B.Arch" },
    { value: "bba_bms", label: "B.B.A/ B.M.S" },
    { value: "bdes", label: "B.Des." },
    { value: "bed", label: "B.Ed" },
    { value: "bel_ed", label: "B.El.Ed" },
    { value: "bped", label: "B.P.Ed" },
    { value: "bpharma", label: "B.Pharma" },
    { value: "bums", label: "B.U.M.S" },
    { value: "bams", label: "BAMS" },
    { value: "bca", label: "BCA" },
    { value: "bds", label: "BDS" },
    { value: "bfa", label: "BFA" },
    { value: "bhm", label: "BHM" },
    { value: "bhmct", label: "BHMCT" },
    { value: "bhms", label: "BHMS" },
    { value: "bvsc", label: "BVSC" },
    { value: "llb", label: "LLB" },
    { value: "mbbs", label: "MBBS" },
    { value: "iti_cert", label: "ITI Certification" },
    { value: "other_graduate", label: "Other Graduate" },
  ];

const educationBoards = [
    // All India Boards
    { value: 'all_india_cbse', label: 'CBSE' },
    { value: 'all_india_cisce', label: 'CISCE(ICSE/ISC)' },
    { value: 'all_india_diploma', label: 'Diploma' },
    { value: 'all_india_national_open_school', label: 'National Open School' },
    { value: 'all_india_ib', label: 'IB(International Baccalaureate)' },
  
    // State Boards
    { value: 'state_andhra_pradesh', label: 'Andhra Pradesh' },
    { value: 'state_arunachal_pradesh', label: 'Arunachal Pradesh' },
    { value: 'state_assam', label: 'Assam' },
    { value: 'state_bihar', label: 'Bihar' },
    { value: 'state_chhattisgarh', label: 'Chhattisgarh' },
    { value: 'state_goa', label: 'Goa' },
    { value: 'state_gujarat', label: 'Gujarat' },
    { value: 'state_haryana', label: 'Haryana' },
    { value: 'state_himachal_pradesh', label: 'Himachal Pradesh' },
    { value: 'state_j_and_k', label: 'J & K' },
    { value: 'state_jharkhand', label: 'Jharkhand' },
    { value: 'state_karnataka', label: 'Karnataka' },
    { value: 'state_kerala', label: 'Kerala' },
    { value: 'state_madhya_pradesh', label: 'Madhya Pradesh' },
    { value: 'state_maharashtra', label: 'Maharashtra' },
    { value: 'state_manipur', label: 'Manipur' },
    { value: 'state_meghalaya', label: 'Meghalaya' },
    { value: 'state_mizoram', label: 'Mizoram' },
    { value: 'state_nagaland', label: 'Nagaland' },
    { value: 'state_odisha', label: 'Odisha' },
    { value: 'state_punjab', label: 'Punjab' },
    { value: 'state_rajasthan', label: 'Rajasthan' },
    { value: 'state_tamil_nadu', label: 'Tamil Nadu' },
    { value: 'state_telangana', label: 'Telangana' },
    { value: 'state_tripura', label: 'Tripura' },
    { value: 'state_uttar_pradesh', label: 'Uttar Pradesh' },
    { value: 'state_uttarakhand', label: 'Uttarakhand' },
    { value: 'state_west_bengal', label: 'West Bengal' },
    { value: 'state_other', label: 'Other' }
  ];
  
  const medium = [
    { label: "Assamese / Asomiya", value: "as" },
    { label: "Bengali / Bangla", value: "bn" },
    { label: "English", value: "en" },
    { label: "Gujarati", value: "gu" },
    { label: "Hindi", value: "hi" },
    { label: "Kannada", value: "kn" },
    { label: "Kashmiri", value: "ks" },
    { label: "Konkani", value: "kok" },
    { label: "Malayalam", value: "ml" },
    { label: "Manipuri", value: "mni" },
    { label: "Marathi", value: "mr" },
    { label: "Oriya", value: "or" },
    { label: "Punjabi", value: "pa" },
    { label: "Sanskrit", value: "sa" },
    { label: "Tamil", value: "ta" },
    { label: "Telugu", value: "te" },
    { label: "Urdu", value: "ur" },
    { label: "Other", value: "other" }
  ];