import React,{useState} from 'react'
import { Dialog, FormLabel} from '@mui/material';
import { PiCertificateThin } from "react-icons/pi";
import './certification.css'

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
const Certification = () => {
    const [openCert, setOpenCert]=useState(false)
    const [certName, setCertificationName]=useState("")
    const [certIssuedBy, setCertIssuedBy]=useState("")
    const [certificateURL, setCertificationURL]=useState("")
    const [isChecked, setIsChecked] = useState(false);
    const [certYear, setCerYear]=useState("")
    const [certMonth, setCertMonth]=useState("")
    const [certifiacteData, setCertificateData]=useState([])


    const handleSaveCertifiate=(e)=>{
        e.preventDefault()
         const certiDetails={
            certificateName:certName,
            issuedBy: certIssuedBy,
            certificateUrl: certificateURL,
            validity:{
                year:certYear?certYear.label: "",
                month:certMonth? certMonth.label:""
            }

         }

         setCertificateData((prevData) => {
            if (!Array.isArray(prevData)) {
                // Initialize as an array if `prevData` isn't an array or is undefined
                return [certiDetails];
            }
            return [...prevData, certiDetails]; // Spread in the existing data
            });
            setOpenCert(false)
    }

    console.log(certifiacteData)
   
  return (
    <div className='profile-admin-cnt skills-co-cnt'>
        <div className='employment-cnt'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='resume-heading'>Certification</h1>
                <p className='add-emplo-para' onClick={()=>setOpenCert(!openCert)}>+Add</p>
            </div>
            <div className='award-section-item'>
                <div style={{marginTop:'3px'}}>
                   <PiCertificateThin size={20}/>
                </div>
                <div className='award-section-content' style={{marginLeft:'5px'}}>
                    <h2 className='award-section-heading'>HTML</h2>
                    <p className='certificate-issueby'>Next Wave</p>
                    <a  style={{fontSize:'14px', color:'#275DF5', marginTop:'2px'}} href="https://mui.com/material-ui/material-icons/?query=paper">https://mui.com/material-ui/material-icons/?query=paper</a>
                    <p className='certificate-issueby'>validity:lifeTime</p>
                    
                </div>
            </div>
            {certifiacteData.map((each)=>(
              <div className='award-section-item' >
                <div style={{marginTop:'3px'}}>
                   <PiCertificateThin size={20}/>
                </div>
                <div className='award-section-content' style={{marginLeft:'5px'}}>
                    <h2 className='award-section-heading'>{each.certificateName}</h2>
                    <p className='certificate-issueby'>{each.issuedBy}</p>
                    <a  style={{fontSize:'14px', color:'#275DF5', marginTop:'2px'}} href={`${each.certificateUrl}`}>{each.certificateUrl}</a>
                    {isChecked &&(<p className='certificate-issueby'>validity:lifeTime</p>)}
                    {!isChecked &&(<p className='certificate-issueby'>{`validity: ${each.validity.month} ${each.validity.year}`}</p>)}
                </div>
             </div> 
            ))}
            <Dialog open={openCert} onClose={() => setOpenCert(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
                <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                    <h1 className="resume-modal-heading">Certification</h1>
                    <p className="resume-modal-para">Add details of Certifications you have achieved/completed</p>
                    <form style={{marginTop:'20px'}} onSubmit={handleSaveCertifiate}>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Certification name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Please Enter your certification name' onChange={(e)=> setCertificationName(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Issued By<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Please mention your course completion ID' onChange={(e)=> setCertIssuedBy(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                            <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Certification URL<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="company-name" className='text-input' placeholder='Please mention your completion URL' onChange={(e)=> setCertificationURL(e.target.value)}/>
                        </div>
                        <div style={{marginTop:'30px', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                            <input  type="checkbox" id="company-name" className='text-input'style={{marginTop:'1px'}} onChange={(e) => setIsChecked(e.target.checked)}/>
                            <p htmlFor="company-name" className='cert-checkbox-name' >This credential does not expire</p>
                        </div>
                        {!isChecked &&
                         (<div style={{marginTop:'30px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Validity </FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                    <Select
                                        value={certYear}
                                        onChange={(certYear)=>setCerYear(certYear)}
                                        options={Years}
                                        isSearchable
                                        placeholder="Year"
                                        styles={ customStyles}
                                    />
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <Select
                                        value={certMonth}
                                        onChange={(certMonth)=>setCertMonth(certMonth)}
                                        options={Months}
                                        isSearchable
                                        placeholder="Month"
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                         </div>)}
                         <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <button className="resume-model-button" onClick={()=>setOpenCert(false)}>Cancel</button>
                            <button className="resume-model-button" type="submit" >Save</button>
                        </div>  
                    </form>
                </div>        
            </Dialog>
        </div>
    </div>    
  )
}

export default Certification


const Years=[
    
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

const Months=[
    {"value": "01", "label": "Jan"},
    {"value": "02", "label": "Feb"},
    {"value": "03", "label": "Mar"},
    {"value": "04", "label": "Apr"},
    {"value": "05", "label": "May"},
    {"value": "06", "label": "Jun"},
    {"value": "07", "label": "Jul"},
    {"value": "08", "label": "Aug"},
    {"value": "09", "label": "Sept"},
    {"value": "10", "label": "Oct"},
    {"value": "11", "label": "Nov"},
    {"value": "12", "label": "Dec"}
  ]