
import "./rightres.css";
import Card from "./smallCard";
import { FaArrowRightLong } from "react-icons/fa6";

function Right({setComm})
{
    let arr =[1,2,3,4,5,6];
   return( 
    <div className="right">

        <div className="cmt">
            <p>no comments ..</p>
            <button  onClick={()=>setComm(true)}>Add comment</button>
        </div>
       
        <div className="top">
            <p>120 similar profiles</p>
            <button className="view">View all</button>
        </div>
         <div className="rightres">
            <div>
                {
                arr.map((i)=>{
                    return <Card/>
                })
                }

            </div>
            <div className="similar">
                  <center>
                    <button>Similr applicants<FaArrowRightLong className="icon"/></button>
                    </center>  
            </div>
        </div>
               



    </div>
   )

}
export default Right