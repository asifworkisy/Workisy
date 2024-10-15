import { Box, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import playstore from "../../../assets/playstore.jpg"
import workisy from "../../../assets/logo.png"


const images = require.context("../../../assets/footer", false, /\.(gif|webp)$/);
const companyLogos = images.keys().map(images);
let data=[
    {
        title:"COMPANY",
        info:["About Us","Our Team","Press","Blog","Success Stories","Advertise with us","Contact Us"]
    },
    {
        title:"CANDIDATE ZONE",
        info:["CEAT","Premimu Membership","Placement Preparation","Jobs Roles & Responsibities"] 
    },
    {
        title:"EMPLOYER ZONE",
        info:["Post Job for Free","End-to-End Recruitment","Campus Recruitement","Online Assessment","Resume Search"]
    },
    {
        title:"INSTITUTE ZONE",
        info:["Post Your Institute","Email/SMS Campaign","Banner Ads Campaign","Placement Assistant"]
    }
]
const Company=({set})=>{
    return(
        <Box>
            <Typography variant='h6' sx={{fontSize:".9rem",fontWeight:"550",textTransform:"capitalize",fontFamily:"inter"}}>{set.title}</Typography>
            <Box>
                {
                    set.info.map((i,id)=>(
                        <Typography variant='h6' key={id} sx={{
                            fontSize:".8rem",
                            fontFamily:"inter",
                            fontWeight:"normal",
                            color:'black'
                           
                        }}>{i}</Typography>
                    ))
                }
            </Box>
        </Box>
    )
}

export default function Footer() {

    let icon={
        borderRadius:"50%",
        padding:".5rem",
        backgroundColor:"white",
        border:"1px solid gray ",
        color:"black",
        transition:"all .7s",
        "&:hover":{
            backgroundColor:"rgb(23, 23, 174)",
            color:"white",
            
        }
    }
    let imgStyle={
        height:"40px",
        width:"100px",
        flexShrink:0,
        animation: "moveImages 2s linear infinite",
      

    }
   
  return (
        <Box sx={{
            width:"100%",
            marginTop:"2rem"
        }}>
            <Box sx={{
                width:"100%",
                height:"auto",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"space-evenly",
                padding:"1rem",
                
              
            }}>
            
          {
            data.map((set,id)=> <Company key={id} set={set}/>)
          }
          <Box>
            <Typography variant='h6' sx={{fontFamily:".8rem",fontWeight:"600"}}>Follow us</Typography>
            <Box sx={{display:"flex",columnGap:"1rem"}}>
                <IconButton sx={icon}>
                     <FaFacebookF/>
                </IconButton>
                <IconButton sx={icon}>
                    <FaTwitter/>
                </IconButton>
                <IconButton sx={icon}>
                    <FaLinkedinIn/>
                </IconButton>

            </Box>
            <Box>
                <Typography variant='h6' sx={{fontFamily:"inter",fontSize:"1rem"}}>Connect with us on fingertips</Typography>
                <img src={playstore}  alt='.' style={{height:"100px",width:"150px"}}/>
            </Box>
          </Box>



            </Box>
          <Divider/>
            <Box sx={{
                width:"100%",
                height:"100px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"

               
            }}>
                <Box sx={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"1rem"}}>
                    <img  src={workisy} alt='.' style={{height:"50px",width:"150px"}}/>
                    <Box>
                    <Typography variant='h6' sx={{fontSize:".7rem"}}>All trademarks are the property of their respective owners</Typography>
                    <Typography variant='h6' sx={{fontSize:".7rem"}}>All rights reserved © 2024 Info Edge (India) Ltd.</Typography>

                    </Box>

                </Box>
              
                <Box sx={{width:"40%",alignItems:"center",display:"flex",justifyContent:"center",columnGap:"1rem"}}>
                    <Typography variant='h6' sx={{fontSize:"1rem",borderRight:"1px solid gray",paddingRight:"1rem",width:"7rem"}}>Our business</Typography>
                    <Box sx={{width:"90%",display:"flex",overflow:"hidden",columnGap:"1rem",backgroundColor:"white",py:".7rem"}}>
                        {
                           [...companyLogos,...companyLogos].map((i,j)=>(
                                <img style={imgStyle} key={j} src={i} alt='.'/>
                            ))
                            
                        }
                         <style>
                            {`
                            @keyframes moveImages {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-100%); }
                            }
                            `}
                      </style>
                    </Box>
                    

                </Box>

            </Box>
        
        

        </Box>
  )
}
