import "./header.css";
import {  IoMdSearch } from "react-icons/io";
function Header()
{
    return(
        <div className="head">
            <h3 className="h3">Applications for Digital Marketing internship</h3>
            <div className="searchBar">
            <IoMdSearch className="IomdSearch"/>
            <input type="text" placeholder="enter name" className="inp"></input>
            </div>
        </div>
    )

}
export default Header;