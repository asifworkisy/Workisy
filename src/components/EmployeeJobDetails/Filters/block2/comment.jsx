import "./cmt.css"
import { IoMdContact } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
export default function Cmt({setShow})
{
    return(
        <div className="comment">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                         <b>Comments</b>
                        <button style={{border:"none",outline:"none",backgroundColor:"rgb(195, 234, 255)"}}><IoMdClose style={{fontSize:"25px",backgroundColor:"rgb(195, 234, 255)"}} onClick={()=>setShow(false)}/></button>

                </div>
                <div>
                   <IoMdContact style={{fontSize:"50px",color:"gray"}}/>
                   <div className="sugg">
                        <textarea className="input" placeholder="enter ."/>
                
                        <p>Suggested tags</p>
                        
                        <div>
                            <button>Expected salary</button>
                            <button>Current salary</button>
                            <button>Notice period</button>
                            <button>Relevent experience</button>
                            <button>Wiiling to relocate</button>
                        </div>
                    <div>

                    </div>
                    </div> 
                </div>
                <button className="add">Add</button>
        </div>
    )
}
