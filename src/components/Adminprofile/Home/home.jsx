import React from 'react'
import Profile from '../Profilebar/profile'
import Quick from '../Quicklinks/quick'
import Resume from '../Resume'
import Skills from '../Keyskills/skills'
import Employment from '../Employment/employment'
import Education from '../Education/education'
import './home.css'
const Home=()=>{
  return (
    <div className='side-cnt'>
        <div className='profile-left-cnt'>
          <Profile/>
          <Quick/>
        </div>
        <div className='profile-right-cnt'>
          <Resume/>
          <Skills/>
          <Employment/>
          <Education/>
        </div>
    </div>
  )
}

export default Home