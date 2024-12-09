import {useState} from 'react'
import { CgAsterisk } from "react-icons/cg";
import  Creatable  from 'react-select/creatable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Header';


import './index.css'
const jobCategories = [
    {value: "---", label: "---"},
    { value: 'software_development', label: 'Software Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'human_resources', label: 'Human Resources' },
    { value: 'design', label: 'Design' },
    { value: 'finance', label: 'Finance' },
    { value: 'customer_service', label: 'Customer Service' },
    { value: 'product_management', label: 'Product Management' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'data_science', label: 'Data Science' },
    { value: 'legal', label: 'Legal' },
    { value: 'administration', label: 'Administration' },
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'research', label: 'Research' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'operations', label: 'Operations' },
    { value: 'project_management', label: 'Project Management' },
    { value: 'quality_assurance', label: 'Quality Assurance' },
    { value: 'logistics', label: 'Logistics' }
  ];
const departments = [
  {value: "---", label: "---"},
    { value: 'human_resources', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'customer_service', label: 'Customer Service' },
    { value: 'product_management', label: 'Product Management' },
    { value: 'design', label: 'Design' },
    { value: 'research_and_development', label: 'Research and Development' },
    { value: 'operations', label: 'Operations' },
    { value: 'legal', label: 'Legal' },
    { value: 'information_technology', label: 'Information Technology' },
    { value: 'administration', label: 'Administration' },
    { value: 'quality_assurance', label: 'Quality Assurance' },
    { value: 'procurement', label: 'Procurement' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'business_development', label: 'Business Development' },
    { value: 'data_science', label: 'Data Science' },
    { value: 'communications', label: 'Communications' },
    { value: 'training_and_development', label: 'Training and Development' }
  ];
const skills = [
  {value: "---", label: "---"},
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'html_css', label: 'HTML/CSS' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'express', label: 'Express.js' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'sql', label: 'SQL' },
    { value: 'git', label: 'Git' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'aws', label: 'AWS' },
    { value: 'azure', label: 'Azure' },
    { value: 'devops', label: 'DevOps' },
    { value: 'data_analysis', label: 'Data Analysis' },
    { value: 'machine_learning', label: 'Machine Learning' },
    { value: 'ui_ux_design', label: 'UI/UX Design' },
    { value: 'project_management', label: 'Project Management' },
    { value: 'scrum', label: 'Scrum' },
    { value: 'agile', label: 'Agile' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'seo', label: 'SEO' },
    { value: 'content_creation', label: 'Content Creation' },
    { value: 'public_speaking', label: 'Public Speaking' },
    { value: 'negotiation', label: 'Negotiation' },
    { value: 'customer_support', label: 'Customer Support' },
    { value: 'sales', label: 'Sales' }
  ];
  
const cities = [
    {value: "---", label: "---"},
    { value: 'hyderbad', label: 'Hyderbad' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangolore', label: 'Banglore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'pune', label: 'Pune' },
    { value: 'noida', label: 'Noida' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'amhadabad', label: 'Ahmadabad' },
    { value: 'canada', label: 'Canada' },
    { value: 'usa', label: 'USA' }
    
  ];
  
const interview=[
    {value :'---', name:"---"},
    {value :'Technical Round', name:"Technical Round"},
    {value :'HR Round', name:"HR Round"},
    {value :'Manager Round', name:"Manager Round"}
]  
const jobtypelist=[
  {value: "---", name: "---"},
  {value: "Full Time", name: "Full Time"},
  {value: "part Time", name: "Part Time"},
  {value: "On contract", name: "On Contract"},
  {value: "Internship", name: "Internship"},
  {value: "Trainee", name: "Trainee"},
  {value: "Full Time/Permanant", name: "Full Time/Permanant"},
  {value: "Temporary / Contractual", name: "Temporary / Contractual"},
  {value: "Permanant", name: "parmanant"},
  {value: "Contractual", name: "Contractual"},
  {value: "Freelance", name: "Freelance"}
]
const experience=[
  {id:18, value:"---"},
   {id:1, value:"fresher"},
   {id:2, value:"0-1 years"},
   {id:3, value:"1-3 years"},
   {id:4, value:"3-5 years"},
   {id:5, value:"5+ years"},
   {id:6, value:"6+ years"},
   {id:7, value:"7+ years"},
   {id:8, value:"8+ years"},
   {id:9, value:"9+ years"},
   {id:10, value:"10+ years"},
   {id:12, value:"11+ years"},
   {id:13, value:"12+ years"},
   {id:14, value:"13+ years"},
   {id:15, value:"14+ years"},
   {id:16, value:"15+ years"},
   {id:17, value:"16+ years"},
]
const currency=[
  {id: 1, value:"---"},
  {id: 2, value:"USD($)"},
  {id: 3, value:"GPB(£)"},
  {id: 4, value:"EUR(€)"},
  {id: 5, value:"INR(Lacs)"}
]
const salaryrange=[
  {id:1, value: '---'},
  {id:2, value: 'Range'},
  {id:3, value: 'Starting Salary Amount'},
  {id:4, value: 'Maximum Salary Amount'},
  {id:5, value: 'Exact Salary Amount'}
]
const PostJob=()=>{
    const [selectedOption, setSelectedOption] = useState(null);
    const [jobOptions, setJobOptions] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [options, setOptions] = useState([]);
    const [endDat, setEnddate]=useState(true)
    const [payValue, setpayValue]=useState("")
    const jobhandleChange = (selected) => {
        setSelectedOption(selected);
      };
    const jobhandleCeatejob=(inputValue)=>{
      const newJob={label : inputValue, value : inputValue}
      setSelectedOption(newJob)
      setJobOptions((prevjobSelected)=>[...prevjobSelected, newJob])
    }
   
    const handleChangeskills=(selected)=>{
       setSelectedSkills(selected)
    }  
    const handleCreateSkilss=(inputValue)=>{
        const newOption = { label: inputValue, value: inputValue };
      setOptions((prevOptions) => [...prevOptions, newOption]);
      setSelectedSkills((prevSelected) => [...prevSelected, newOption]);
    }
    const handleSetPayValue=(event)=>(
      setpayValue(event.target.value)
    )
    return(
        
       <>
        <Navbar/>
        <div className="postjob-app-cnt">
           <div className='job-title-cnt'>
                <h1 className="form-heading">Job Details</h1>
            </div>
           <form className="job-form-cnt">
               <hr className="hr-line"/>
               <div className=" d-flex flex-column ">
                 <label className="input-text" htmlFor="jobtitle">Job Title<CgAsterisk className='asterisk'/></label>
                 <input className="input mt-2" type="text" for="jobtitle" placeholder="Job Title"/>
               </div>
               <div className='d-flex flex-column mt-3'>
                  <label className="input-text" htmlFor="jobtitle">Job description<CgAsterisk className='asterisk'/></label>
                  <textarea rows={3} className='mt-3 text-area'></textarea>
               </div>
               <div className="category-cnt mt-3">
                    <div className='d-flex flex-column'>
                        <label className="input-text" htmlFor="jobtitle">Job Category<CgAsterisk className='asterisk'/></label>
                        <Creatable
                            isClearable
                            value={selectedOption}
                            onChange={jobhandleChange}
                            onCreateOption={jobhandleCeatejob}
                            options={jobCategories}
                            placeholder="Select a job category"
                            className="select-inp mt-2"
                    />
                    </div>
                    <div className='d-flex flex-column '>
                      <label className='input-text'>Department<CgAsterisk className='asterisk'/></label>
                      <select className="input mt-2 location-inp">
                        {departments.map(each=>(
                          <option  value={each.label}>{each.label}</option>
                        ))}
                      </select>
                    </div>
               </div>
                  
               <div className='d-flex flex-column mt-3'>
                 <label className="input-text" htmlFor="jobtitle">Skills<CgAsterisk className='asterisk'/></label>
                 <Creatable
                    isMulti
                    value={selectedSkills}
                    onChange={handleChangeskills}
                    onCreateOption={handleCreateSkilss}
                    options={skills}
                    placeholder="Select skills"
                    className='border'
                  />
               </div>
               <div className='category-cnt mt-3'>
                 <div className='d-flex flex-column'>
                    <label className='input-text'>Location<CgAsterisk className='asterisk'/></label>
                    <select className='input mt-2 location-inp'>
                        {cities.map(each=>(
                        <option  value={each.label}>{each.label}</option>
                        ))}
                    </select>
                 </div>
                 <div className='d-flex flex-column'>
                    <label className='input-text'>Interview Round<CgAsterisk className='asterisk'/></label>
                    <select className='input mt-2 location-inp'>
                        {interview.map(each=>(
                        <option  value={each.value}>{each.name}</option>
                        ))}
                    </select>
                 </div>
               </div>
               <div className='category-cnt mt-3'>
                    <div className=" d-flex flex-column ">
                        <label className="input-text" htmlFor="jobtitle">Start Date<CgAsterisk className='asterisk'/></label>
                        <input className="input mt-2 date-cnt" type="date" for="jobtitle" placeholder="Job Title"/>
                    </div>
                    { endDat &&
                    <div className=" d-flex flex-column ">
                        <label className="input-text" htmlFor="jobtitle">End Date<CgAsterisk className='asterisk'/></label>
                        <input className="input mt-2 date-cnt" type="date" id="jobtitle" placeholder="Job Title"/>
                   </div>
                   }
                   <div className='checkbox-cnt mt-4'>
                        <input type='checkbox' className='checkbox'onClick={()=>setEnddate(!endDat)}/>
                        <p className='no-end-para mt-3'>No End Date</p>
                   </div>
               </div>
               <hr className="hr-line"/>
               <div className='category-cnt mt-3'>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                    <label className="input-text" htmlFor="jobtitle">Total Openings<CgAsterisk className='asterisk'/></label>
                    <input className="input mt-2" type="text" for="jobtitle" placeholder="No of openings"/>
                  </div>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                      <label className="input-text" htmlFor="jobtitle">Status<CgAsterisk className='asterisk'/></label>
                      <select className="input mt-2">
                        <option>Open</option>
                        <option>closed</option>
                      </select>
                  </div>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                    <label className="input-text" htmlFor="jobtitle">Recruiter <CgAsterisk className='asterisk'/></label>
                    <input className="input mt-2" type="text" for="jobtitle" placeholder="Enter Name"/>
                  </div>
               </div>
               <div className='category-cnt mt-3'>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                    <label className="input-text" htmlFor="jobtitle">Job Type<CgAsterisk className='asterisk'/></label>
                    <select className='input mt-2'>
                      {jobtypelist.map(each=>(
                        <option key={each.value} value={each.value}>{each.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                    <label className="input-text" htmlFor="jobtitle">Work Experience<CgAsterisk className='asterisk'/></label>
                    <select className='input mt-2'>
                      {experience.map(each=>(
                        <option key={each.id} value={each.value}>{each.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className=" d-flex flex-column mt-3 status-cnt">
                    <label className="input-text" htmlFor="jobtitle">Currency</label>
                   <select  className='input mt-2'>
                    {currency.map(each=>(
                      <option key={each.id} value={each.value}>{each.value}</option>
                    ))}
                   </select>
                  </div>
               </div>
               <hr className="hr-line"/>
               <div className="category-cnt justify-content-start mt-3">
                 <div className='d-flex flex-column mt-2'>
                    <label className="input-text" htmlFor="jobtitle">Show pay by<CgAsterisk className='asterisk'/></label>
                    <select  className="input select-inp mt-2" value={payValue} onChange={handleSetPayValue}>
                      {salaryrange.map(each=>(
                        <option key={each.id} value={each.value} >{each.value}</option>
                      ))}
                    </select>
                 </div>
                 {payValue==="Range" &&(
                  <div className='d-flex flex-row justify-content-between mt-2'>
                    <div className='d-flex flex-column salary-inp'>
                        <label className="input-text" htmlFor="jobtitle">Minimum Salary<CgAsterisk className='asterisk'/></label>
                        <input type="number   " className='input mt-2' placeholder='Amount/year'/>
                    </div>
                    <div className='d-flex flex-column salary-inp'>
                        <label className="input-text" htmlFor="jobtitle">Maximum Salary<CgAsterisk className='asterisk'/></label>
                        <input type="number" className='input mt-2' placeholder='Amount/year'/>
                    </div>
                  </div>
                )
                 }
                { payValue==="Starting Salary Amount" && (
                  <div className='d-flex flex-column mt-2 margin'>
                    <label className="input-text " htmlFor="jobtitle">Starting Salary Amount<CgAsterisk className='asterisk'/></label>
                    <input type="number" className='input mt-2 start-salary' placeholder='Amount/year'/>
                 </div>
                )}
                { payValue==="Maximum Salary Amount" && (
                  <div className='d-flex flex-column mt-2 margin'>
                    <label className="input-text " htmlFor="jobtitle">Maximum Salary Amount<CgAsterisk className='asterisk'/></label>
                    <input type="number" className='input mt-2 start-salary' placeholder='Amount/year'/>
                   
                 </div>
                )}
                 { payValue==="Exact Salary Amount" && (
                  <div className='d-flex flex-column mt-2 margin'>
                    <label className="input-text " htmlFor="jobtitle">Exact Salary Amount<CgAsterisk className='asterisk'/></label>
                    <input type="number" className='input mt-2 start-salary' placeholder='Amount/year'/>
                 </div>
                )}
                
               </div>
               <div className='d-flex flex-row'>
                  <div className='checkbox-cnt mt-4'>
                    <input type='checkbox' className='checkbox'/>
                    <p className='no-end-para mt-3'>is this remote job?</p>
                  </div>
                  <div className='checkbox-cnt mt-4 ms-5'>
                    <input type='checkbox' className='checkbox pr-2'/>
                    <p className='no-end-para mt-3 '>Disclose salary on career site</p>
                  </div>
               </div>
               <div className='d-flex flex-column  mt-4'>
                  <p className="input-text">Required fields</p>
                  <div className='required-cnt '>
                      <div className='checkbox-cnt '>
                            <input type='checkbox' className='checkbox'/>
                            <p className='no-end-para mt-3'>Photo</p>
                      </div>
                      <div className='checkbox-cnt   check'>
                            <input type='checkbox' className='checkbox '/>
                            <p className='no-end-para mt-3'>Resume</p>
                      </div>
                      <div className='checkbox-cnt   check'>
                            <input type='checkbox' className='checkbox '/>
                            <p className='no-end-para req-para mt-3 '>Date of Birth</p>
                      </div>
                      <div className='checkbox-cnt  check'>
                            <input type='checkbox' className='checkbox '/>
                            <p className='no-end-para mt-3 req-para'>Gender</p>
                      </div>
                  </div>
               </div>
               <div className='buttons-cnt'>
                 <button className='btn-save'>save</button>
                 <button className='addmore-btn'>Save & Add More</button>
                 <button className='btn-cancel'>Cancel</button>
               </div>
           </form>
        </div>
        </> 
    )
}
export default PostJob