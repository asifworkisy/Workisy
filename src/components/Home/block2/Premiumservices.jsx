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
        <Stack direction="row" spacing={1} alignItems="center" sx={{border:"1px solid rgb(212, 212, 212)",width:"27%",borderRadius:"20px",padding:".2rem"}} justifyContent="center" >
            <Icon sx={{fontSize:"1.1rem",color:"#096eb6"}}/>
            <Typography variant='h6' sx={{fontSize:".8rem",fontWeight:"600",color:"black"}}>{info}</Typography>
           <ArrowForwardIos sx={{fontSize:".8rem",color:"rgb(65, 64, 64)",fontFamily:"inter"}}/>
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
        }}>

            <Box sx={{
                display:'flex',
                columnGap:"1rem"
            }}>
                 <Box component="img" src={pimg1} alt="." sx={{
                height:"7rem",
                width:"7rem",
                
            }}/>

            <Box sx={{width:"60%",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
                <Typography variant='h5' sx={{fontWeight:"bold",fontFamily:"inter"}}>Accelerate your job search with premium services</Typography>
                <Typography sx={{fontFamily:"inter"}}>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</Typography>
                <Box sx={{display:"flex",columnGap:"1rem"}}>
                    {
                        iconsList.map((i,index)=>(
                            <ButtonType Icon={i.icon} info={i.desc} key={index}/>
                        ))
                    }

                   
                    
                </Box>
            </Box>

            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Link sx={{
                    fontSize:"1.2rem",
                    textDecoration:"none",
                    backgroundColor:"#096eb6",
                    color:"white",
                    padding:".7rem",
                    fontFamily:"santhosi",
                    borderRadius:"20px",
                    width:"100px"
                    
                }}>Learn more</Link>
                <Typography sx={{fontSize:".7rem",color:"rgb(65, 64, 64)",fontFamily:"santoshi"}}>include paid services</Typography>
            </Box>
           

        </Box>


    
 
  )
}
