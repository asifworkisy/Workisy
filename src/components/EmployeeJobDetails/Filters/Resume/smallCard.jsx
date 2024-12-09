import "./small.css"
import image from "../Gallery/kohli.jpg"
import { IoBag } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
const Card = ()=>{
    return(
        <div className="x">
            <div className="a">
                <img src={image} alt="." />
                <div className="b">
                    <p className="name">Ramcharan</p>
                    <p>PHP full stack developer at google</p>
                </div>
            </div>
            <div className="b">
                <p><FaToolbox className="icon"/> 6y 2m</p>
                <p><IoBag className="icon"/> ₹ 27.50 LACS</p>
                 </div>
            <div className="c">
                <p><FaLocationDot className="icon"/> Hyderbad (Prefers Bangalore,Vizag)</p>
            </div>
            <div className="d">
                <p>Java | Spring framework | sql | React| Hibernate| Javascript | PHP</p>
            </div>

        </div>
    )
}
export default Card;