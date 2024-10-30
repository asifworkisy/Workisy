import React,{useState, forwardRef} from 'react'
import { Dialog,FormLabel, TextField } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Select from 'react-select';

import './award.css'

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

const Awards=forwardRef((props, ref)=>{
    const [openAwards,setOpenAwards]=useState(false)
    const [award, setAwardName]=useState("")
    const [selectYear, setSelectYear]=useState("")
    const [selectMonth, setSelectMonth]=useState("")
    const [description, setDescription]=useState("")
    const [awardsData, setAwardsData]=useState([])

    const handelSaveAwards=(e)=>{
       e.preventDefault()
       
       const awardDetails={
         awardName:award,
         description:description,
         dateOfAward:{
            year:selectYear?selectYear.label: "" ,
            month: selectMonth?selectMonth.label: "" 
         }
       }
      
       setAwardsData((prevData) => {
        if (!Array.isArray(prevData)) {
            // Initialize as an array if `prevData` isn't an array or is undefined
            return [awardDetails];
        }
        return [...prevData, awardDetails]; // Spread in the existing data
        });
        setOpenAwards(false)

    }
    console.log(awardsData)
  return (
    <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
      <div className='itskills-cnt'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className='resume-heading'>Awards</h1>
          <p className='add-emplo-para' onClick={() =>setOpenAwards(!openAwards)}>+Add</p>
        </div>
        <div className='award-section-item'>
            <div style={{marginTop:'3px'}}>
              <MilitaryTechIcon/>
            </div>
            <div className='award-section-content'>
              <h2 className='award-section-heading'>Best Employee Award</h2>
              <p className='award-section-para'>Feb 2024</p>
              <p className='award-section-para' style={{fontSize:'14px'}}>I got the best employee award for completing work in time and  efficiency in my work</p>
            </div>
          </div>
        {awardsData.map((award, index)=>(
          <div className='award-section-item'>
            <div style={{marginTop:'3px'}}>
              <MilitaryTechIcon/>
            </div>
            <div className='award-section-content'>
              <h2 className='award-section-heading'>{award.awardName}</h2>
              <p className='award-section-para'>{`${award.dateOfAward.month} ${award.dateOfAward.year}`}</p>
              <p className='award-section-para' style={{fontSize:'14px'}}>{award.description}</p>
            </div>
          </div>
        ))}
        
        <Dialog open={openAwards} onClose={() => setOpenAwards(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
            <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                <h1 className="resume-modal-heading">Awards & Achievements</h1>
                <p className="resume-modal-para">Add details of Achievements you have achieved/completed</p>
                <form style={{marginTop:'20px'}} onSubmit={handelSaveAwards}>
                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                        <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Award Name<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" id="company-name" className='text-input' placeholder='Enter award name' onChange={(e)=> setAwardName(e.target.value)}/>
                    </div>
                    <div style={{marginTop:'30px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'#121224', fontWeight:600}}>Date of Award <span style={{ color: 'red' }}>*</span></FormLabel>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <div style={{width:'100%'}}>
                                    <Select
                                        value={selectYear}
                                        onChange={(selectYear)=>setSelectYear(selectYear)}
                                        options={joinYear}
                                        isSearchable
                                        placeholder="Year"
                                        styles={ customStyles}
                                    />
                                </div>
                                <div style={{marginLeft:'20px', width:'100%'}}>
                                    <Select
                                        value={selectMonth}
                                        onChange={(selectMonth)=>setSelectMonth(selectMonth)}
                                        options={joinMonths}
                                        isSearchable
                                        placeholder="Month"
                                        styles={ customStyles}
                                />
                                </div>
                            </div>
                    </div>
                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                        <label htmlFor="company-name" className='label-name' style={{fontWeight:'600'}}>Description<span style={{ color: 'red' }}>*</span></label>
                        <TextField  multiline rows={2}  placeholder="Type here..." fullWidth  variant="outlined" onChange={(e)=> setDescription(e.target.value)}  sx={{  borderRadius: '8px',  marginTop:'15px',  outline:'none',  '& .MuiOutlinedInput-root': {borderRadius: '8px', },  }}  styles={ customStyles}/>
                    </div>  

                    <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                        <button className="resume-model-button" onClick={()=>setOpenAwards(false)}>Cancel</button>
                        <button className="resume-model-button" type="submit" >Save</button>
                    </div>
                </form>    
            </div>
        </Dialog>
      </div>
    </div>    
  )
})

export default Awards

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