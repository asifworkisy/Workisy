import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { GoX } from "react-icons/go";
import "./loginpage.css"
import { Button, Typography } from '@mui/material';
import MailLogin from './mailLogin';
import MobileLogin from './mobilelogin';
import { FcGoogle } from "react-icons/fc";

import Tooltip from '@mui/material/Tooltip';
import { popUp } from '../Header';


export default function Loginpage() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [showPage,setShowPage]=React.useState(true);

  const DrawerList = (
    <Box sx={{ width: 550, fontFamily:"inter" }}  role="presentation"  >
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-end", borderRadius:"20px",padding:"1rem"}}>
                <GoX className='gox'  onClick={toggleDrawer(false)}/>
        </Box>
        <Box sx={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>

        <Box sx={{width:"75%"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",marginBottom:'1rem'}}>
              
                <Typography variant='h5' sx={{fontSize:'1.3rem',fontWeight:'550'}}>Login</Typography>
                <Typography variant='h5' sx={{fontSize:'1rem',color:"rgb(0, 123, 255)"}}>Register for free</Typography>
            </Box>
            {
                showPage ? <MailLogin setShowPage={setShowPage}/> : <MobileLogin setShowPage={setShowPage}/>
            }
            <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                columnGap:".7rem",
                marginTop:"1rem"
            }}>
                <Box 
                sx={{
                    width :"150px",
                    height:".8px",
                    backgroundColor:"gray"
                    }}>
                    
                </Box>
                <Typography variant='p' sx={{
                    fontSize:".8rem",
                    color:"gray"
                }}>Or</Typography>
                <Box 
                sx={{
                    width :"150px",
                    height:".8px",
                    backgroundColor:"gray"
                    }}>

                </Box>
            </Box>
            <Box sx={{
                color:"#007BFF",
                fontWeight:"600",
                height:"25px",
                width:"100%",
                padding:"8px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                border:"1px solid #007BFF",
                borderRadius:"10px",
                marginTop:"1rem",
                columnGap:"1rem"
            }}>
                <FcGoogle style={{fontSize:"1.5rem"}}/>
                <Typography variant='p'>Sign with in Google</Typography>
            </Box>
            
          



        </Box>
        </Box>

     

     
    </Box>
  );

  const [open1, setOpen1] = React.useState(false);


  return (
    <div>
         <Tooltip 
         open={open1} 
         onClose={()=>setOpen1(false)}
          onOpen={()=>setTimeout(()=>setOpen1(true),200)} 
          title="Job seeker login"
          componentsProps={popUp}
          >
      
     <Button onClick={toggleDrawer(true)} sx={{
       fontFamily: "Inter",
       fontWeight: "bold",
       border: "1px solid rgb(0, 123, 255)",
       color: "rgb(0, 123, 255)",
       borderRadius: "20px",
       width: "80px",
       padding: "7px",
       textTransform:"capitalize",
       '&:hover': {
           backgroundColor: "rgb(243, 251, 255)",
       }

     }}> Login</Button>
    </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'  PaperProps={{
          sx: { borderRadius: "20px 0 0 20px" }  
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
