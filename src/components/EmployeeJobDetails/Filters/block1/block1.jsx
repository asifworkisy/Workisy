
import "./block1.css"
import { FaCrown, FaHeadset } from 'react-icons/fa';
import Msg from "./msgbox";
function Block1()
{
    return(
        <div className="block1">
            
           <div className="b11">
                <button className="b111">Access database<FaCrown style={{color:" rgb(189, 189, 71)",fontSize:"22px",marginBottom:"5px",marginLeft:'5px'}}/></button>
               
                <button className="b113">456</button>

           </div>
           <div className="b12">
                    <div className="b121">
                        <button className="b1211">Applications received</button>
                        <button className="b1212">6</button>  
                    </div>
                    <div className="b121">
                        <button className="b1211">Shortlisted</button>
                        <button className="b1212">0</button>  
                    </div>
                    <div className="b121">
                        <button className="b1211">Hired</button>
                        <button className="b1212">0</button>  
                    </div>
                    <div className="b121">
                        <button className="b1211">Not intersted</button>
                        <button className="b1212">0</button>  
                    </div>

           </div>
           <div className="b13">
                     <div className="b121">
                        <button className="b1211">Assigments</button>
                        <button className="b1212">343</button>  
                    </div>
                    <div className="b121">
                        <button className="b1211">Interviews</button>
                        <button className="b1212">0</button>  
                    </div>
                    <div className="b122">
                        <h5 style={{fontSize:"17px",fontWeight:"600"}}>Chat messages</h5>
                       <Msg></Msg>
                    </div>

           </div>
           <div className="b14">
            <div className="b141">
                 <FaHeadset style={{fontSize:"20px"}}/>
                 <p style={{marginRight:"70px",marginTop:"15px",fontSize:"15px",fontWeight:"bold"}}>Need Help?</p>
            </div>
            
           </div>
            
        </div>
    )
}
export default Block1;