import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Dialog} from '@mui/material';
import './index.css'
const Resume=()=>{
  const [open, setOpen]=useState(false)
  const [textAreaInput, setTextAreaInput]=useState("")
  const [savedHeadline, setSavedHeadline] = useState('Your current resume headline.');
  const handleOpen=()=>{
    setOpen(!open)
    
  }

  const handleheadlineSave=()=>{
    setSavedHeadline(textAreaInput)
    setOpen(false)
  }
  return (
    <div className="profile-admin-cnt">
        <div className="resume-cnt">
             <div className="resume-header-top-cnt">
               <p className="resume-heading">Resume</p>
               <div className="buttons-cnt">
                  <button className="resume-button">Download</button>
                  <button className="resume-button">Delete</button>
               </div>
             </div>
             <div className='input-file'>
                <input type="file" alt="file" />
                
             </div>
        </div>
        <div className="resume-cnt" style={{display:'flex', flexDirection:'column', }}>
           <div style={{display:'flex', }}>
              <p className="resume-heading">Resume Headlines</p>
              <button className='edit-button' onClick={handleOpen}><CiEdit style={{outline:'none'}}/></button>
           </div>
           <p style={{alignSelf:'flex-start', marginTop:'14px'}}>{savedHeadline}</p>
           <Dialog open={open}  onClose={()=>setOpen(false)} maxWidth="md" fullWidth> 
                <div className="resume-modal-cnt">
                  <h1 className="resume-modal-heading">Resume Headlines</h1>
                   <p className="resume-modal-para">It is the first thing recruiters notice in your profile. Write a concise headline introducing yourself to employers. (Minimum 5 words)</p>
                  <div>
                    <textarea rows={6} cols={70} className="text-area" value={textAreaInput} onChange={(e)=>setTextAreaInput(e.target.value)}></textarea>
                  </div>
                  <div style={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                    <button className="resume-model-button" onClick={()=>setOpen(false)}>Cancel</button>
                    <button className="resume-model-button" onClick={handleheadlineSave}>Save</button>
                  </div>
                </div>
              
              
          </Dialog> 
        </div>    
    </div>
  )
}


export default Resume
