import './quick.css'

const Quick=({ sectionRefs })=>{

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 50, // Adjust if there’s a fixed header
      behavior: "smooth",
    });
  };
  

  return (
    <div className='quick-links-cnt' >
       <h4 className='quick-link-head'>Manage Profile</h4>
       <div className='links-cnt'>
         <ul className='ul-list-cnt'>
           <li className='list-item' onClick={() => scrollToSection(sectionRefs.resume)}>Resume</li>
           <li className='list-item'>Resume Headlines</li>
           <li className='list-item' onClick={() => scrollToSection(sectionRefs.keySkills)}>Key Skills</li>
           <li className='list-item' onClick={() => scrollToSection(sectionRefs.education)}>Education</li>
           <li className='list-item'>IT Skills</li>
           <li className='list-item' onClick={() => scrollToSection(sectionRefs.projects)}>Projects</li>
           <li className='list-item'>Projects Summary</li>
           <li className='list-item'>Awards & Achievements</li>
           <li className='list-item' onClick={() => scrollToSection(sectionRefs.certification)}>Certification</li>
           <li className='list-item'>Career profile</li>
           <li className='list-item'>Personal Details</li>
         </ul>
       </div>
    </div>
  )
}
export default Quick