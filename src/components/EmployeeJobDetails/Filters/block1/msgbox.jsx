import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./block1.css"
function Msg()
{
    let [show,setShow]=useState(false);
    return(
        <div >
            <button onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)} style={{ backgroundColor: "#e6ebf0",outline:"none",border:"none"}}
            ><AiOutlineQuestionCircle className="b1Qst"/></button> 
            {
                show&&
                <div style={{marginTop:"-30px"}}>
                    <div className="arrow"/>
                    <div className="msg">
                        You dont have any chats for this internship yet.
                        Review application and start a chat with relevent application 
                    </div>

                </div>

            }
        </div>
    )
}
export default Msg;