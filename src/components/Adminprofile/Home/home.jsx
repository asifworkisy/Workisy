import React,{useRef} from 'react'
import Profile from '../Profilebar/profile'
import Quick from '../Quicklinks/quick'
import Resume from '../Resume'
import Skills from '../Keyskills/skills'
import Employment from '../Employment/employment'
import Education from '../Education/education'
import ItSkills from '../Itskills/itskills'
import Project from '../Project/project'
import ProfileSummary from '../ProfileSummary/summary'
import Awards from '../Awards/awards'
import Certification from '../Certification/certifiaction'
import CareerProfile from '../CareerProfile/career'
import PersonalDetails from '../PersonalDetails/personal'
import './home.css'


const Home=()=>{

  const sectionRefs = {
    resume: useRef(null),
    keySkills: useRef(null),
    employement:useRef(null),
    education: useRef(null),
    itSkills: useRef(null),
    projects: useRef(null),
    projectSummary: useRef(null),
    awards: useRef(null),
    certification: useRef(null),
    career: useRef(null),
    personal: useRef(null),
  };
  
  return (
    <div className='home-cnt'>
      <div>
        <Profile/>
      </div>
      
      <div className='quick-profile-cnt' >
        <div className='profile-left-cnt'>
          <Quick sectionRefs={sectionRefs}/>
        </div>
        <div className='profile-right-cnt'>
          <Resume ref={sectionRefs.resume}/>
          <Skills ref={sectionRefs.keySkills}/>
          <Employment ref={sectionRefs.employement}/>
          <Education ref={sectionRefs.education}/>
          <ItSkills ref={sectionRefs.itSkills}/>
          <Project ref={sectionRefs.projects}/>
          <ProfileSummary ref={sectionRefs.projectSummary}/>
          <Awards ref={sectionRefs.awards}/>
          <Certification ref={sectionRefs.certification}/>
          <CareerProfile ref={sectionRefs.career}/>
          <PersonalDetails ref={sectionRefs.personal}/>
        </div>
      </div>  
    </div>
  )
}

export default Home