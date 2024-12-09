import "./profile.css"
import { IoSchool } from "react-icons/io5";
function Profile()
{
    let skills=["PHP","Html","Wordpress","MySql","CSS","Javascript","React.js","Buddyboss"]
    return(
        <div className="profile">
            <p className="pp1">
                Iam B.tech  It Software Developer in WordPress,PHP,MySQL,BuddyBoss And Html with 5.6 years experience.And i will join witin in 15 days.
            </p>
            <div className="skill">
                <b>Key skills</b>
               <ul className="skills">
                {
                    skills.map((i,id)=><li id="id">{i}</li>)
                }
               </ul>

            </div>
            <div className="work">
                <b>Work summary</b>
                <p>Iam looking for job change .Iam a software developer. I have 6 years experience in Wordpress,PHP and Mysql.I will join immedailtely within 15 days</p>
            </div>
            <div className="project">
                <div className="title">
                    <p>Industry</p>
                    <p>Department</p>
                    <p>Role</p>
                </div>
                <div>
                    <p>It servies and consulting</p>
                    <p>Engineering-software & QA</p>
                    <p>Backend Developer</p>
                </div>
            </div>
            <div className="education">
                <b>Education</b>
                <div >
                    <IoSchool className="school"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <b >Btech/B.E., Information Techonlogy,2012</b>
                        <p>Andhra University (ANU)</p>
                    </div>

                </div>
            </div>
            <div className="languages">
                <b>Langages known</b>
                <p className="p">English - proficient(Read, Write, Speak )</p>
                <p>Telugu - Expert(Read, Write, Speak )</p>
            </div>
            <div className="personal">
        
                    <b>Personal Detailes</b>

                <div >
                <div className="div">
                    <p className="p">Date of birth</p>
                   <p>8 Jul 1989</p>
                </div>
                <div className="div">
                    <p className="p">Gender</p>
                   <p>Male</p>
                </div>
                <div className="div">
                    <p className="p">Marital status</p>
                   <p>Single/unmarried</p>
                </div>
                <div className="div">
                    <p className="p">Physicaly challenged</p>
                   <p>No</p>
                </div>

                </div>
              
               

            </div>
            <div className="contact">
                    <b>Contact detailes</b>
                    <p>1-64a, Pallpu street, Guddigudem, 534316</p>
            </div>

        </div>
    )
}
export default Profile;