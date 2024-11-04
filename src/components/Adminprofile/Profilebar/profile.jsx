

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
                        src={selectedImage || "https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"}
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
