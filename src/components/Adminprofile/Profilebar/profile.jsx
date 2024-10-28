// import React, { useState, useRef } from 'react'
// import { Box, Avatar, IconButton,styled ,Divider} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import {  PiBuildingOfficeThin,PiBagThin } from "react-icons/pi";
// import {CiLocationOn} from 'react-icons/ci'
// import {IoCallOutline, IoMailOutline} from 'react-icons/io5'
// import './profile.css'

// const StyledBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '20px',
//   position: 'relative',
// }));

// const Profile=()=>{
//   const [selectedImage, setSelectedImage] = useState(null);
//   const fileInputRef = useRef(null);

 
//   const handleIconClick = () => {
//     fileInputRef.current.click();
//   };

//   // Handle file selection and change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result); // Set the image for preview
//       };
//       reader.readAsDataURL(file); // Read the file as a Data URL
//     }
//   };
//   return (
//     <div className='sidebar-cnt'>
//       <div style={{backgroundColor:'#275DF5', height:'60px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}></div>
//       <div className='prfile-img-cnt'>
//         <div className='profile-img'>
//           <StyledBox>
//             <Avatar
//               src={selectedImage || 'https://via.placeholder.com/100'} 
//               alt="Profile"
//               sx={{ width: 80, height: 80,  border: '2px solid #8b8f92 ',  position: 'relative',}}/>
//             <IconButton   color="primary" onClick={handleIconClick} disableRipple
//               sx={{ position: 'absolute', top: '75%',  left: '87%',   transform: 'translate(-50%, -50%)', backgroundColor: '#275DF5',  color:'#ffffff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', height:'10px', width:'10px', outline:'none','&:focus-visible': {outline:'none'},}} >
//               <AddIcon />
//             </IconButton>
//             <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
//           </StyledBox>
//         </div>
//         <div className='profile-name-cnt'>
//           <h1 className='profile-cand-name'> Saibabu</h1>
//           <p className='profile-role'>Web Developer</p>
//           <div className='loc-cnt'><CiLocationOn/><p className='profile-role'>Hyderbad, Telangana</p></div>
//         </div>
//       </div>
//       <Divider/>
//       <div className='company-details-cnt'>
//         <div className='com-details-cnt' >
//           <p><PiBuildingOfficeThin/></p>
//           <p className='com-para'>Appit</p>
//         </div>
//         <div className='com-details-cnt'>
//           <p><PiBagThin/></p>
//           <p className='com-para'>Exp : 1 year</p>
//         </div>
//         <div className='com-details-cnt'>
//           <p>< IoCallOutline/></p>
//           <p className='com-para'>9087654321</p>
//         </div>
//         <div className='com-details-cnt'>
//           <p>< IoMailOutline/></p>
//           <p className='com-para'>saibabu@gamil.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile

import React, { useState, useRef } from 'react';
import { PiMapPinLight } from "react-icons/pi";
import { Avatar, IconButton, styled, Box, Divider } from '@mui/material';
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import AddIcon from '@mui/icons-material/Add';
import './profile.css';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    position: 'relative',
    marginLeft:'100px'
    
}));

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container-profile">
            {/* Profile Photo Div */}
            <div className="profile-img">
                <StyledBox>
                    <Avatar
                        src={selectedImage || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1730110783~exp=1730114383~hmac=e3840286b799be25cacf78d83a4d0a8cb8d2f524191c9e145beb87047dbff06f&w=740"}
                        alt="Profile"
                        sx={{
                            height:"161px",
                            width:"161px"  ,
                            border: '2px solid #8b8f92',
                        }}
                    />
                    <IconButton
                        color="primary"
                        onClick={handleIconClick}
                        disableRipple
                        sx={{  position: 'absolute',  top: '75%', left: '70%',  backgroundColor: '#275DF5',    color: '#ffffff',  borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',   height: '30px',  width: '30px',  outline: 'none', '&:focus-visible': { outline: 'none' },  }} >
                        <AddIcon />
                    </IconButton>
                    <input  type="file"  accept="image/*" ref={fileInputRef}  style={{ display: 'none' }} onChange={handleFileChange}/>
                </StyledBox>
            </div>

            {/* Profile Details Container */}
            <div className="details-container">
                <div className="up-container">
                    <h1 className="name">Praveen</h1>
                    <p className="role"> Web Developer</p>
                    <p className="company">Next Wave</p>
                </div>
                <Divider/>
                <div className="bottom-container">
                    <div className="left-container">
                        <p className="location"> <PiMapPinLight className="icon" /> Hyderabad</p>
                        <p className="experience">  <PiShoppingBagLight className="icon" />  1 year 3 months</p>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="right-container">
                        <p className="notice"> <SlPhone className="icon" /> 9876543201</p>
                        <p className="notice"><CiMail className="icon" />praveen@appitsotware.com</p>
                        <p className="notice"> <CiCalendar className='icon'/>1 Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
