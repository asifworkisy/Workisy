import React, { useState } from 'react';
import './dropBtn.css'; 
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowDropdown ,IoMdArrowDropup} from "react-icons/io";
import { BsChatRightDots } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
function Dropdown() {
    
    const [isOpen, setIsOpen] = useState(false);
    let s={
        fontSize:"30px"
    }

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={()=>setIsOpen(!isOpen)}>
              Next steps
                {isOpen ? <IoMdArrowDropup  className='drop-icon'/> : <IoMdArrowDropdown style={s}/>}
                
            </button>
            
            <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
                
                <button className='li'><FaRegPenToSquare className='dropdown-icon'/>Send Assigment</button>
                <button className='li'><RiCalendarScheduleLine className='dropdown-icon'/>Schedule interview</button>
                <button className='li'><BsChatRightDots className='dropdown-icon' />Start chart</button>
                <button className='li'>< BsPersonCheck className='dropdown-icon' />Hire</button>
            </div>
        </div>
    );
}

export default Dropdown;
