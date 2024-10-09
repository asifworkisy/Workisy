import React, { useState, useRef } from 'react'
import { Box, Avatar, IconButton,styled ,Divider} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {  PiBuildingOfficeThin,PiBagThin } from "react-icons/pi";
import {CiLocationOn} from 'react-icons/ci'
import {IoCallOutline, IoMailOutline} from 'react-icons/io5'
import './profile.css'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  position: 'relative',
}));

const Profile=()=>{
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

 
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection and change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image for preview
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };
  return (
    <div className='sidebar-cnt'>
      <div style={{backgroundColor:'#275DF5', height:'60px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}></div>
      <div className='prfile-img-cnt'>
        <div className='profile-img'>
          <StyledBox>
            <Avatar
              src={selectedImage || 'https://via.placeholder.com/100'} 
              alt="Profile"
              sx={{ width: 80, height: 80,  border: '2px solid #8b8f92 ',  position: 'relative',}}/>
            <IconButton   color="primary" onClick={handleIconClick} disableRipple
              sx={{ position: 'absolute', top: '75%',  left: '87%',   transform: 'translate(-50%, -50%)', backgroundColor: '#275DF5',  color:'#ffffff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', height:'10px', width:'10px', outline:'none','&:focus-visible': {outline:'none'},}} >
              <AddIcon />
            </IconButton>
            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
          </StyledBox>
        </div>
        <div className='profile-name-cnt'>
          <h1 className='profile-cand-name'> Saibabu</h1>
          <p className='profile-role'>Web Developer</p>
          <div className='loc-cnt'><CiLocationOn/><p className='profile-role'>Hyderbad, Telangana</p></div>
        </div>
      </div>
      <Divider/>
      <div className='company-details-cnt'>
        <div className='com-details-cnt' style={{marginTop:'10px'}}>
          <p><PiBuildingOfficeThin/></p>
          <p className='com-para'>Appit</p>
        </div>
        <div className='com-details-cnt'>
          <p><PiBagThin/></p>
          <p className='com-para'>Exp : 1 year</p>
        </div>
        <div className='com-details-cnt'>
          <p>< IoCallOutline/></p>
          <p className='com-para'>9087654321</p>
        </div>
        <div className='com-details-cnt'>
          <p>< IoMailOutline/></p>
          <p className='com-para'>saibabu@gamil.com</p>
        </div>
      </div>
    </div>
  )
}

export default Profile