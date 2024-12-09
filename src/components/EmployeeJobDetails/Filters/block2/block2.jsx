import "./block2.css"
import { IoIosInformationCircleOutline } from "react-icons/io";
import Card from "./card";

function Block2({allData})
{
   
    return(
        <div className="block2">
            <div className="b21">
                <div className="b2p">
                    <IoIosInformationCircleOutline className="circleOutline"/>
                    <p style={{marginTop:"7px"}} >90% employers find their desired candidates within 3 days using Access Database! Our AI-powered 
                    recommendation engine curates upto 500 relevant profiles for your listing so that you can invite most suitable candidates. </p>
                </div>
                 <h5 className="b2p1">Showing 499 results out of 499 applications</h5>
            </div>
        <Card toGetAll={allData}></Card>
          

        </div>
    )
}
export default Block2;