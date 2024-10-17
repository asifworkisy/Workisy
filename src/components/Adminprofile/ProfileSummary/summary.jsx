import React,{useState} from 'react'

const ProfileSummary=()=>{
    const [opneSummary, setOpenSummary]=useState(false)
  return (
        <div className='profile-admin-cnt skills-co-cnt'>
          <div className='itskills-cnt'>
            <div style={{display:'flex', }}>
              <p className="resume-heading">Resume Headlines</p>
              <button className='edit-button' onClick={handleOpen}><CiEdit style={{outline:'none'}}/></button>
            </div>
          </div>
        </div>    
  )
}

export default ProfileSummary