import { FaStar } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";

import { IoIosInformationCircleOutline } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import Dropdown from "./dropBtn";
import { IoBag } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../Gallery/kohli.jpg"
import { RiSaveFill } from "react-icons/ri";
import { useState } from "react";
import Cmt from "./comment";

                        //     const checkGender=genders.includes(applicant.Gender)
function Card({toGetAll})
    {
        let [show,setShow]=useState(false);
        let [id,setId]=useState(0);
    
        return(
            <div>
                <ul className="cards">
                    {
                        
                        toGetAll.map((applicant)=>{        
                                
                                return(
                                
                                    <li className="cardR" key={applicant.id}>
        
                                    <div className="b2Top">
                                            <div className="str">
                                                <p><FaStar className="faicon" />Top applicant</p>
                                            </div>
                                            <p className="strp">Certified in Digital Marketing by Internshala Trainings.</p>
                                            <button className="strb">View candidate score <IoOpenOutline/></button>
                                        </div>
            
                                        <div className="card2">
            
                                        <div style={{display:"flex"}}>
                                            <div className="ca">
                                            <div className="card21">
                                            <input type="checkbox" className="box"/>
                                                  
                                           <div>
                                                    <h5 style={{fontWeight:"600",fontFamily:"Inter"}}>{applicant.name}</h5>
                                                    <div className="card22">
                                                        <p ><IoBag className="iconStyle"/>{applicant.experience}yrs 0m</p>
                                                        <p><FaToolbox className="iconStyle"/> ₹ 27.50 LACS</p>
                                                        <p><FaLocationDot className="iconStyle"/>{applicant.location}</p>
                                                    </div>
                                            </div>
                                        </div>
                    
                    
                                        <div className="details">
                                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                                    <p className="ed">EDUCATION</p>
                                                    <div style={{width:"80%"}}>
                                                        <p style={{fontWeight:"600"}}>{applicant.education},({applicant.graduationYear})</p>
                                                        <p style={{marginBottom:"10px",fontSize:"15px"}}>Asia,Pacific institute of information Techonology,Panipat</p>
                    
                                                    </div>
                                                </div>
                                            
                                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                                    <p className="es">SKILLS<IoIosInformationCircleOutline className="icon"/></p>
                                                    <ul className="ul-skill">
                                                        {
                                                        
                                                            applicant.skills.map((skill,i)=>{
                                                                return <li className="skill-li" key={i} ><p>{skill} |</p></li>
                                                                
                                                            })
                                                        }
                                            
                    
                                                    </ul>
                                                </div>

                                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                                        <p className="cl">COVER LETTER<IoIosInformationCircleOutline className="icon"/></p>
                                                        <p className="cover-desc">I have capable skils on this to do the job and I also have an experience in internship in digital marketing.</p>
                                                </div>

                                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                                        <p className="av">AVAILABILITY<IoIosInformationCircleOutline  className="icon"/></p>
                                                        <p className="avp">Yes, I am available to join immediately. And can relocate to Hyderabad.</p>
                                                </div>        
                                            
                                        </div>

                                            </div>
                                            <div className="pic1">
                                                    <img src={image} alt="."></img>
                                                    <p className="pic1-p">B.tech(I.t) Software Developer with 5.6 experience</p>
                                                    <button className="b1">View phone number</button>
                                                    <button className="b2">Call candidate</button>
                                                    <button className="call">Verified phone & email</button>
                                                    <div className="commit">
                                                        <button className="b19" onClick={()=>{
                                                            setId(applicant.id)
                                                            setShow(!show)}}>comment</button>
                                                        <button className="b18"><RiSaveFill className="save,fill"/> Save</button>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                        {
                                            show&&applicant.id===id&&<Cmt setShow={setShow}/>
                                        }
                                        <div className="cardBottom">
                                            <div className="leftBottom">
                                                <Link className="left_btn" to="resume" state={applicant}>View full application</Link>
                                                <button className="left_btn"><GrNotes/> Add notes</button>
                                                    
                                            </div>
                                            <div className="rightBottom">
                                                <button className="rbt1">Not Intersted</button>
                                                <button  className="rbt2">Shortlist</button>
                                               <Dropdown/>
                                            </div>
                                        </div>
                                        
                
                                    </div>
        
                
                
                                </li>
                
                                )
                            
                            
                        })
                        
                    }
                </ul>
            </div>
    
    
                
        )
    }
   
    
   

   


export default Card;