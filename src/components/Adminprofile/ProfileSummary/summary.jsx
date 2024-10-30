import React,{useState, forwardRef} from 'react'
import { CiEdit } from 'react-icons/ci'
import { Dialog, TextField } from '@mui/material';


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

const ProfileSummary=forwardRef((props, ref)=>{
    const [opneSummary, setOpenSummary]=useState(false)
    const [summary, setProjectSummary]=useState("Give recruiters a brief overview of the highlights of your career, key achievements, and career goals to help recruiters know your profile better.")
   
    const handelSubmitSummary=(event)=>{
      event.preventDefault()
      setProjectSummary(summary)
      setOpenSummary(false)
    }
  return (
        <div className='profile-admin-cnt skills-co-cnt' ref={ref}>
          <div className='itskills-cnt'>
            <div style={{display:'flex', }}>
              <p className="resume-heading">Profile summary</p>
              <button className='edit-button' onClick={()=>setOpenSummary(!opneSummary)}><CiEdit style={{outline:'none'}}/></button>
            </div>
            <p style={{alignSelf:'flex-start', marginTop:'14px'}}>{summary}</p>
            <Dialog open={opneSummary} onClose={() => setOpenSummary(false)}  maxWidth="md"   fullWidth  PaperProps={{ sx: {borderRadius: '20px',overflowY: 'auto','::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',},}}>
              <div style={{display:'flex', flexDirection:'column', padding:'50px'}}>
                  <h1 className="resume-modal-heading">Profile summary</h1>
                  <p className="resume-modal-para">Give recruiters a brief overview of the highlights of your career, key achievements, and career goals to help recruiters know your profile better.</p>
                  <form style={{marginTop:'20px'}} onSubmit={handelSubmitSummary}>
                    <div style={{marginTop:'30px', display:'flex', flexDirection:'column',}}>
                        <TextField label="summary" multiline rows={2}  placeholder="Type here..." fullWidth  variant="outlined" onChange={(e)=>setProjectSummary(e.target.value)}  sx={{  borderRadius: '8px',  marginTop:'15px',  outline:'none',  '& .MuiOutlinedInput-root': {borderRadius: '8px', },  }}  styles={ customStyles}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                        <button className="resume-model-button" onClick={()=>setOpenSummary(false)}>Cancel</button>
                        <button className="resume-model-button" type="submit" >Save</button>
                    </div> 
                  </form>
              </div>
               
            </Dialog>
          </div>
        </div>    
  )
})

export default ProfileSummary