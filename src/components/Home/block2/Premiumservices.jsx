import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import pimg1 from"../../../assets/premium services/pimg1.png"
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import BoltIcon from '@mui/icons-material/Bolt';
import DescriptionIcon from '@mui/icons-material/Description';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const iconsList=[
    {
    icon:BoltIcon,
    desc:"Resume writing"
    },
    {
        icon:DescriptionIcon,
        desc:"Prority applicant"
    },
      {
          icon:BorderColorIcon,
        desc:"Resume display"
    }];
const ButtonType=({Icon,info})=>{
   
    return(
        <Stack direction="row" spacing={1} alignItems="center" sx={{
            border:"1px solid rgb(212, 212, 212)",
            width:{xs:"40vw",sm:"12vw",md:"auto"},
            borderRadius:"20px",p:".2rem",
            
        }}
             justifyContent="center" >
            <Icon sx={{fontSize:{xs:"5vw",sm:"1.1vw"},color:"#096eb6"}}/>
            <Typography variant='h6' sx={{fontSize:{xs:"3vw",sm:".8vw"},fontWeight:"600",color:"black"}}>{info}</Typography>
           <ArrowForwardIos sx={{fontSize:".8vw",color:"rgb(65, 64, 64)",fontFamily:"inter"}}/>
        </Stack>
    )
}

export default function Premiumservices() {
  return (
   
  
        <Box sx={{
            width:"70%",
            backgroundColor:"white",
            height:"auto",
            display:"flex",
            padding:"1.5rem",
            borderRadius:"20px",
            paddingLeft:"5rem",
            paddingRight:"5rem",
            border:"1px solid   rgb(204, 204, 204)",
            marginTop:"2rem"
            ,flexDirection:{xs:"column",sm:"row"}
        }}>

            <Box sx={{
                display:'flex',
                columnGap:"1rem",
                flexDirection:{xs:"column",sm:"row"}
            }}>
                 <Box component="img" src={pimg1} alt="." sx={{
                height:"7rem",
                width:"7rem",
                
                     }}/>

            <Box sx={{width:{xs:"100%",sm:"70%"},display:"flex",flexDirection:"column",rowGap:"1rem"}}>
                <Typography variant='h5' sx={{fontWeight:"bold",fontFamily:"inter",fontSize:{sm:"18px",md:"1.5vw"}}}>Accelerate your job search with premium services</Typography>
                <Typography sx={{fontFamily:"inter",fontSize:{sm:"10px",md:"1vw"}}}>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</Typography>
                <Box sx={{display:"flex",gap:"1rem",flexDirection:{xs:"column",sm:"row"}}}>
                    {
                        iconsList.map((i,index)=>(
                            <ButtonType Icon={i.icon} info={i.desc} key={index} />
                        ))
                    }

                   
                    
                </Box>
            </Box>

            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                marginTop:{xs:"1rem",sm:0}
            }}>
                <Link sx={{
                    fontSize:"1.2rem",
                    textDecoration:"none",
                    backgroundColor:"#096eb6",
                    color:"white",
                    padding:".7rem",
                    fontFamily:"santhosi",
                    borderRadius:"20px",
                    width:"120px"
                    
                }}>Learn more</Link>
                <Typography sx={{fontSize:".7rem",color:"rgb(65, 64, 64)",fontFamily:"santoshi"}}>include paid services</Typography>
            </Box>
           

        </Box>


    
 
  )
}
