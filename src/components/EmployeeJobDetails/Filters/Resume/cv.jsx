import "./cv.css"
import { GrInstallOption } from "react-icons/gr";
function CV()
{
    return(
        <div className="cv">
            <div >
                <b>Attached CV</b>
                <p style={{fontSize:"13px"}}>Last updated on 20 Nov,23</p>
            </div>
            <GrInstallOption className="download"/>
            
        </div>
    )
}
export default CV;