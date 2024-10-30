import React,{useState, forwardRef} from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoIosClose } from "react-icons/io";
import { Dialog, FormControl, FormControlLabel, Checkbox, FormLabel, Radio,RadioGroup } from '@mui/material';
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import './career.css'

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

const initialLoc = [
    { label: "Hyderbad", value: "hyd" },
    { label: "Mumbai", value: "mumbai" },
  ];  

const CareerProfile=forwardRef((props, ref)=>{
    const [openCareer, setOpenCareer]=useState(false)
    const [currentIndustry, setCurrentIndustry]=useState("")
    const [department, setDepartment]=useState("")
    const [jobRole, setJobRole]=useState("")
    const [radiovalue, setRadioValue]=useState("")
    const [jobType, setJobType] = useState({  permanent:"",  contractual: "",});
    const [employeementType, setEmployeementType] = useState({  fulltime:"",  parttime: "",});    
    const [locations, setLocation] = useState(initialLoc);
    const [expSalary, setexpSalary]=useState("")
    const [careerData, setCareerData]=useState([])
                                          
                                          

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setJobType((prev) => ({
      ...prev,
      [name]: checked ? name : "", 
    }));
};

const handleChangeValueEmployeement = (event) => {
  const { name, checked } = event.target;

  setEmployeementType((prev) => ({
    ...prev,
    [name]: checked ? name : "", 
  }));
};

const handleChangePreferedLoc=(selectedOptions)=>{
  setLocation(selectedOptions || []);
  
}

const handleSaveCareer=async (event)=>{
  event.preventDefault()

  const careerDetails={
    currentIndustry:currentIndustry.label,
    department:department? department.label: "",
    jobRole:jobRole? jobRole.label: "",
    radiovalue:radiovalue,
    jobType:jobType,
    employeementType:employeementType,
    locations:locations,
    expSalary:expSalary
  }

  setCareerData((prevData) => {
    if (!Array.isArray(prevData)) {
        
        return [careerDetails];
    }
    return [careerDetails]; 
    });

  //   try {
  //     const response = await fetch("https://workisy-backend-nyf4.onrender.com/api/careerDetails", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(careerDetails),
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

  setOpenCareer(false)
};

console.log(careerData)


  return (
    <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
        <div className='itskills-cnt'>
            <div style={{display:'flex', }}>
              <p className="resume-heading">Career Profile</p>
              <button className='edit-button' onClick={()=>setOpenCareer(!openCareer)}><CiEdit style={{outline:'none'}}/></button>
            </div>

           {careerData.map((each, index)=>
              (<div className='career-section-cnt' key={index}>
                <div className='career-details-cnt' style={{marginLeft:'40px'}}>
                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Current Industry</h3>
                      <h3 className='carreer-content'>{each.currentIndustry}</h3>
                    </div>


                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Desired job type</h3>
                      <h3 className='carreer-content'>{jobType.permanent},{jobType.contractual}</h3>
                    </div>

                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Prefered shift</h3>
                      <h3 className='carreer-content'>{each.radiovalue}</h3>
                    </div>

                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Expected salary</h3>
                      <h3 className='carreer-content'>{`₹${expSalary}`}</h3>
                    </div>
                </div>
                <div className='career-details-cnt career-second-cnt' >
                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Department</h3>
                      <h3 className='carreer-content'>{each.department}</h3>
                    </div>

                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Job role</h3>
                      <h3 className='carreer-content'>{each.jobRole}</h3>
                    </div>

                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Desired employment type</h3>
                      <h3 className='carreer-content'>{each.employeementType.parttime}, {each.employeementType.fulltime}</h3>
                    </div>

                    <div className='current-industry-cnt'>
                      <h3 className='carreer-title'>Preferred work location</h3>
                      <div className='pre-locations'>
                        {each.locations.map((preLoc)=>(
                         <p className='carreer-content'>{preLoc.label},</p>
                        ))} 
                      </div> 
                     
                      
                    </div>

                </div>
                
              </div>)
            )}
            <Dialog open={openCareer} onClose={() => setOpenCareer(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
                <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                    <h1 className="resume-modal-heading">Career Profile</h1>
                    <p className="resume-modal-para">Add details about your current and preferred job profile. This helps us personalise your job recommendations.</p>
                    <form style={{marginTop:'20px'}}>
                           <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name'>Current Industry<span style={{ color: 'red' }}>*</span></label>
                                <div style={{marginTop:'7px', width:'100%'}}>
                                    <Select
                                        value={currentIndustry}
                                        onChange={(currentIndustry)=>setCurrentIndustry(currentIndustry)}
                                        options={curentIndustryList}
                                        isSearchable
                                        placeholder="Select current industry"
                                        styles={customStyles}
                                        
                                />
                                </div>
                            </div>

                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name'>Department<span style={{ color: 'red' }}>*</span></label>
                                <div style={{marginTop:'7px', width:'100%'}}>
                                    <Select
                                        value={department}
                                        onChange={(department)=>setDepartment(department)}
                                        options={departmentList}
                                        isSearchable
                                        placeholder="Select current industry"
                                        styles={customStyles}
                                        
                                />
                                </div>
                            </div>    

                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                                <label htmlFor="company-name" className='label-name'>Job role<span style={{ color: 'red' }}>*</span></label>
                                <div style={{marginTop:'7px', width:'100%'}}>
                                    <Select
                                        value={jobRole}
                                        onChange={(jobRole)=>setJobRole(jobRole)}
                                        options={jobroleList}
                                        isSearchable
                                        placeholder="Select job role"
                                        styles={customStyles}
                                        
                                />
                                </div>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                              <FormControl component="fieldset">
                                  <FormLabel component="legend" sx={{color:'#121224', fontSize:'16px', fontWeight:"600"}}>Desired Job</FormLabel>
                                  <div className="checkbox-container">
                                    <FormControlLabel control={<Checkbox checked={jobType.permanent}   onChange={handleChange}  name="permanent" color="dark" size='small'/>}label="Permanent"/>
                                    <FormControlLabel  control={  <Checkbox  checked={jobType.contractual}   onChange={handleChange}  name="contractual"  color="dark" size='small'/>} label="Contractual"/>
                                  </div>
                              </FormControl>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                              <FormControl component="fieldset">
                                  <FormLabel component="legend" sx={{color:'#121224', fontSize:'16px', fontWeight:"600"}}>Desired employment type</FormLabel>
                                  <div className="checkbox-container">
                                    <FormControlLabel control={<Checkbox checked={employeementType.fulltime}   onChange={handleChangeValueEmployeement}  name="fulltime" color="dark" size='small'/>}label="Full time"/>
                                    <FormControlLabel  control={  <Checkbox  checked={employeementType.parttime}   onChange={handleChangeValueEmployeement}  name="parttime"  color="dark" size='small'/>} label="Part time"/>
                                  </div>
                              </FormControl>
                            </div>

                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:'600'}}>Preferred shift<span style={{ color: 'red' }}>*</span></FormLabel>
                              <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                  value={radiovalue}
                                  onChange={(e)=>setRadioValue(e.target.value)}
                              >
                                  <FormControlLabel value="day" control={<Radio color='dark' size='small'/>} label="Day" />
                                  <FormControlLabel value="neight" control={<Radio  color='dark' size='small'/>} label="Neight" />
                                  <FormControlLabel value="flexible" control={<Radio color='dark' size='small'/>} label="Flexible" />
                              </RadioGroup>
                            </div>
                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                               <h3 className="resume-modal-heading" style={{fontSize:'16px', fontFamily:'"Satoshi", "Satoshi Fallback"'}}>Skills</h3>
                               <CreatableSelect
                                    isMulti 
                                    value={locations} 
                                    onChange={handleChangePreferedLoc} 
                                    options={locations} 
                                    placeholder="Add locations..."
                                    isClearable
                                    closeMenuOnSelect={false}
                                />
                                <ul style={{display:'flex', flexWrap:'wrap', listStyleType:'none'}}>
                                  {locations.map((location, index) => (
                                    <li key={index} className='skill-list-item'>
                                      {location.label} <button className='close-btn' onClick={() => handleChangePreferedLoc(locations.filter((s) => s.value !== location.value))}><IoIosClose size={20} style={{outline:'none'}}/></button>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                              <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Expected salary<span style={{ color: 'red' }}>*</span></label>
                              <input type="text" id="company-name" className='text-input' placeholder='Enter expected salary' onChange={(e)=> setexpSalary(e.target.value)}/>
                            </div>

                            <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                              <button className="resume-model-button" onClick={()=>setOpenCareer(false)}>Cancel</button>
                              <button className="resume-model-button" onClick={handleSaveCareer}>Save</button>
                            </div>
                    </form>
                </div>
                
            </Dialog>
        </div> 
    </div>        
  )
})

export default CareerProfile


const curentIndustryList=[
    { "value": "bpm_analytics", "label": "Analytics / KPO / Research" },
    { "value": "bpm_bpo", "label": "BPM / BPO" },
    { "value": "it_services_consulting", "label": "IT Services & Consulting" },
    { "value": "technology_electronic_components", "label": "Electronic Components / Semiconductors" },
    { "value": "technology_electronics_manufacturing", "label": "Electronics Manufacturing" },
    { "value": "technology_ems", "label": "Electronic Manufacturing Services (EMS)" },
    { "value": "emerging_3d_printing", "label": "3D Printing" },
    { "value": "emerging_ai_ml", "label": "AI/ML" },
    { "value": "emerging_ar_vr", "label": "AR/VR" },
    { "value": "emerging_blockchain", "label": "Blockchain" },
    { "value": "emerging_cloud", "label": "Cloud" },
    { "value": "emerging_cybersecurity", "label": "Cybersecurity" },
    { "value": "emerging_drones_robotics", "label": "Drones/Robotics" },
    { "value": "emerging_iot", "label": "IoT" },
    { "value": "emerging_nanotechnology", "label": "Nanotechnology" },
    { "value": "hardware_networking", "label": "Internet" },
    { "value": "internet_ecommerce", "label": "E-Commerce" },
    { "value": "internet_ott", "label": "OTT" },
    { "value": "internet_software_product", "label": "Software Product" },
    { "value": "bfsi_banking", "label": "Banking" },
    { "value": "financial_services_asset_management", "label": "Asset Management" },
    { "value": "financial_services_broking", "label": "Broking" },
    { "value": "financial_services_fintech", "label": "FinTech / Payments" },
    { "value": "insurance_investment_banking", "label": "Investment Banking / Venture Capital / Private Equity" },
    { "value": "nbfc_micro_finance", "label": "Micro Finance" },
    { "value": "education_training", "label": "Education / Training" },
    { "value": "education_edtech", "label": "E-Learning / EdTech" },
    { "value": "manufacturing_auto_components", "label": "Auto Components" },
    { "value": "manufacturing_automobile", "label": "Automobile" },
    { "value": "manufacturing_ev", "label": "Electric Vehicle (EV)" },
    { "value": "building_material_cement", "label": "Cement" },
    { "value": "building_material_ceramic", "label": "Ceramic" },
    { "value": "building_material_glass", "label": "Glass" },
    { "value": "chemicals_paints", "label": "Paints" },
    { "value": "chemicals_defence_aerospace", "label": "Defence & Aerospace" },
    { "value": "industrial_construction_equipment", "label": "Construction Equipment" },
    { "value": "industrial_machine_tools", "label": "Machine Tools" },
    { "value": "iron_steel_mining", "label": "Metals & Mining" },
    { "value": "petrochemical_plastics", "label": "Plastics / Rubber" },
    { "value": "infrastructure_aviation", "label": "Aviation" },
    { "value": "logistics_tech", "label": "Logistics Tech" },
    { "value": "engineering_construction_oil_gas", "label": "Oil & Gas" },
    { "value": "ports_shipping_shipbuilding", "label": "Shipbuilding" },
    { "value": "power_hydro", "label": "Hydro" },
    { "value": "power_nuclear", "label": "Nuclear" },
    { "value": "power_solar", "label": "Solar" },
    { "value": "power_wind", "label": "Wind" },
    { "value": "real_estate_coworking", "label": "Co-working" },
    { "value": "real_estate_urban_transport", "label": "Urban Transport" },
    { "value": "consumer_beauty", "label": "Beauty & Personal Care" },
    { "value": "beverage_brewery", "label": "Brewery / Distillery" },
    { "value": "consumer_electronics_fitness", "label": "Fitness & Wellness" },
    { "value": "fmcg_tobacco", "label": "Tobacco" },
    { "value": "food_processing_dairy", "label": "Dairy" },
    { "value": "food_processing_meat_poultry", "label": "Meat / Poultry" },
    { "value": "textile_fashion", "label": "Fashion" },
    { "value": "textile_technical_textile", "label": "Technical Textile" },
    { "value": "healthcare_biotechnology", "label": "Biotechnology" },
    { "value": "media_advertising", "label": "Advertising & Marketing" },
    { "value": "advertising_public_relations", "label": "Public Relations" },
    { "value": "media_film_music", "label": "Film / Music / Entertainment" },
    { "value": "gaming_publishing", "label": "Printing & Publishing" },
    { "value": "sports_telecom", "label": "Telecom / ISP" },
    { "value": "professional_accounting", "label": "Accounting / Auditing" },
    { "value": "professional_architecture", "label": "Architecture / Interior Design" },
    { "value": "misc_agriculture", "label": "Agriculture / Forestry / Fishing" },
    { "value": "ngo_social_services", "label": "Social Services / Industry Associations" }
  ]
  
const departmentList=[
    { "value": "bfsi_investments_trading", "label": "BFSI, Investments & Trading" },
    { "value": "customer_success_service_operations", "label": "Customer Success, Service & Operations" },
    { "value": "data_science_analytics", "label": "Data Science & Analytics" },
    { "value": "engineering_hardware_networks", "label": "Engineering - Hardware & Networks" },
    { "value": "engineering_software_qa", "label": "Engineering - Software & QA" },
    { "value": "finance_accounting", "label": "Finance & Accounting" },
    { "value": "human_resources", "label": "Human Resources" },
    { "value": "it_information_security", "label": "IT & Information Security" },
    { "value": "marketing_communication", "label": "Marketing & Communication" },
    { "value": "product_management", "label": "Product Management" },
    { "value": "production_manufacturing_engineering", "label": "Production, Manufacturing & Engineering" },
    { "value": "project_program_management", "label": "Project & Program Management" },
    { "value": "quality_assurance", "label": "Quality Assurance" },
    { "value": "sales_business_development", "label": "Sales & Business Development" },
    { "value": "ux_design_architecture", "label": "UX, Design & Architecture" },
    { "value": "administration_facilities", "label": "Administration & Facilities" },
    { "value": "aviation_aerospace", "label": "Aviation & Aerospace" },
    { "value": "construction_site_engineering", "label": "Construction & Site Engineering" },
    { "value": "consulting", "label": "Consulting" },
    { "value": "content_editorial_journalism", "label": "Content, Editorial & Journalism" },
    { "value": "csr_social_service", "label": "CSR & Social Service" },
    { "value": "energy_mining", "label": "Energy & Mining" },
    { "value": "environment_health_safety", "label": "Environment Health & Safety" },
    { "value": "food_beverage_hospitality", "label": "Food, Beverage & Hospitality" },
    { "value": "healthcare_life_sciences", "label": "Healthcare & Life Sciences" },
    { "value": "legal_regulatory", "label": "Legal & Regulatory" },
    { "value": "media_production_entertainment", "label": "Media Production & Entertainment" },
    { "value": "merchandising_retail_ecommerce", "label": "Merchandising, Retail & eCommerce" },
    { "value": "procurement_supply_chain", "label": "Procurement & Supply Chain" },
    { "value": "research_development", "label": "Research & Development" },
    { "value": "risk_management_compliance", "label": "Risk Management & Compliance" },
    { "value": "security_services", "label": "Security Services" },
    { "value": "shipping_maritime", "label": "Shipping & Maritime" },
    { "value": "sports_fitness_personal_care", "label": "Sports, Fitness & Personal Care" },
    { "value": "strategic_top_management", "label": "Strategic & Top Management" },
    { "value": "teaching_training", "label": "Teaching & Training" },
    { "value": "other", "label": "Other" }
  ]
    
const jobroleList=[
    { "value": "automation_architect", "label": "Automation Architect" },
    { "value": "automation_developer", "label": "Automation Developer" },
    { "value": "back_end_developer", "label": "Back End Developer" },
    { "value": "big_data_engineer", "label": "Big Data Engineer" },
    { "value": "crm_architect", "label": "CRM Architect" },
    { "value": "data_engineer", "label": "Data Engineer" },
    { "value": "data_platform_engineer", "label": "Data Platform Engineer" },
    { "value": "embedded_systems_engineer", "label": "Embedded Systems Engineer" },
    { "value": "engineering_manager", "label": "Engineering Manager" },
    { "value": "erp_architect", "label": "ERP Architect" },
    { "value": "erp_developer", "label": "ERP Developer" },
    { "value": "front_end_developer", "label": "Front End Developer" },
    { "value": "full_stack_developer", "label": "Full Stack Developer" },
    { "value": "game_developer_programmer", "label": "Game Developer / Programmer" },
    { "value": "head_engineering", "label": "Head - Engineering" },
    { "value": "mobile_app_developer", "label": "Mobile / App Developer" },
    { "value": "practice_manager_head", "label": "Practice Manager / Head" },
    { "value": "search_engineer", "label": "Search Engineer" },
    { "value": "solution_architect", "label": "Solution Architect" },
    { "value": "technical_architect", "label": "Technical Architect" },
    { "value": "technical_lead", "label": "Technical Lead" },
    { "value": "webmaster", "label": "Webmaster" },
    { "value": "software_development_other", "label": "Software Development - Other" }
  ]
  