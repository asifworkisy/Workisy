import { Link, useLocation } from "react-router-dom";
import "./resume.css"
import { IoBag, IoOpenOutline } from "react-icons/io5";
import { FaStar, FaToolbox } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Dropdown from "../block2/dropBtn";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import kohli from "../Gallery/kohli.jpg"
import Profile from "./profile";
import CV from "./cv";
import { useState } from "react";
import Right from "./rightres";
import { CiTimer } from "react-icons/ci";
import { RiSaveFill } from "react-icons/ri";
import Cmt from "../block2/comment";
function Resume()
{
    const data=useLocation();
    const applicant=data.state;
  console.log(applicant)

  let [showComm,setComm]=useState(false);
  const [showProfile,setProfile]=useState(true);
  const [showCV,setCV]=useState(false);
  const handleP=()=>{
    if(!showProfile)  {
       setProfile(true); setCV(false)
    }

    
    }

    const handleC=()=>{
        if(!showCV)  {
           setProfile(false); setCV(true)
        }
        }
    
    return(
        <div>
        <div style={{position:"absolute"}}>
      
                    
                <div className="resume">
                
                        <div className="leftRes">
                        <div className="resumeHead">
                        <Link to="/" style={{textDecoration:"none",color:"rgb(105, 101, 101)"}} >{`Applications( Access database ) < `}</Link>
                        <p>{applicant.name}</p>
                        </div>
                        <h3 className="hd">Applications for Digital Marketing internship </h3>
                            <div className="b2Top bt">
                                            <div className="str">
                                                <p><FaStar style={{marginBottom:"6px",marginRight:"5px",color:"yellow"}}/>Top applicant</p>
                                            </div>
                                            <p style={{marginTop:"10px",fontWeight:"550"}}>Certified in Digital Marketing by Internshala Trainings.</p>
                                            <button style={{fontWeight:"550",backgroundColor:"rgb(200, 232, 249)",color:"rgb(54, 152, 237)",outline:"none",border:"none"}}>View candidate score <IoOpenOutline/></button>
                                        </div>
                            <div className="topcard">
                                
                                <img src={kohli} className="pic" alt="."/>
                                        <div>
                                                <h5 style={{fontWeight:"600",fontFamily:"Inter"}}>{applicant.name}</h5>
                                                <div style={{display:'flex',justifyContent:"space-between"}}>
                                                    <div style={{display:"flex",transform:"scale(0.8) translateX(-50px)"}}>
                                                                        <p style={{width:"100px"}}><IoBag className="iconStyle"/>{applicant.experience}yrs 0m</p>
                                                                        <p style={{width:"150px"}}><FaToolbox className="iconStle"/> ₹ 27.50 LACS</p>
                                                                        <p style={{width:"150px"}}><FaLocationDot className="iconStyle"/>{applicant.location}</p>
                                                    </div>
                                                    <button className="save"><RiSaveFill className="icon"/>Save</button>
                                                </div>
                                                <div className="profile-info p1">
                                                    <p className="hl">Current</p>
                                                    <p className="des">5.6 experience in Java fullstack ,React and 2yr experience in PHP </p>
                                                    <p className="h"><CiTimer className="timer"/> 15days or less</p>
                                                </div>
                                                <div className="profile-info p2">
                                                    <p className="hl">Highest degree</p>
                                                    <p className="des">Btech/B.E in Acharya nagarjuna university</p>
                                                </div>
                                                <div className="profile-info p3">
                                                    <p className="hl">Pre.locations</p>
                                                    <p className="des">Hyderbad, Goa, Vizag</p>
                                                </div>
                                                <div className="btnTop">
                                                    <button className="bn1">View phone number</button>
                                                    <button className="bn2"><FaPhoneAlt/> Call candidate</button>
                                                    <button className="bn3">Verify phone & email</button>
                                                </div>
                                                <p className="email"><IoMdMail className="emailIcon"/>dhevara@gmail.com</p>
                                        </div>
                                </div>
                            </div>
                            <Right setComm={setComm}/>

                </div>

              <div className="content">
               
                <div className="header">
                        <button className="li1" onClick={handleP}>Profile detail</button>
                        <button className="li2" onClick={handleC}  >Attached CV</button>
                </div>
                {showProfile&&<Profile/>}
                {showCV&&<CV/> }    
              </div>
                
                <div className="footer">
                                        <div style={{display:"flex",columnGap:"5px"}}>
                                            <Link style={{textDecoration:"none"}}>{`<`}</Link>
                                            <p>{`${applicant.id}/10`}</p>
                                            <Link style={{textDecoration:"none"}}>{`>`}</Link>
                                        </div>
                       
                        <p></p>
                        <div className="rightBottom">
                                                <button className="rbt1">Not Intersted</button>
                                                <button  className="rbt2">Shortlist</button>
                                               <Dropdown/>
                      </div>
                </div>

        </div>
        {
            showComm&&<div style={{zIndex:10,position:"absolute",height:"auto",width:"50%",marginLeft:"25%",marginTop:"100px",borderRadius:"5px"}}>
                <Cmt setShow={setComm}/>
                </div>
        }
        </div>
    )
}
export default Resume;