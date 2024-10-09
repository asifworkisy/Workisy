import React, { useState } from 'react'
import "./ftrComp.css"
import { Box, Button, Typography } from '@mui/material'
import Slide from './Slide'

import {topSkills} from "./data"
export default function FtrComp() {
  const [activeButton, setActiveButton] = useState(0);

 
  
  
  const [topSkillsList,setTopSkillsList]=useState(topSkills.slice(0,3));
  

let [data,setData]=useState(topSkills[0].companyIds);

let [show,setShow]=useState(true);

  
  return (
  
    <Box sx={{width:"100%",height:"auto",marginTop:"3rem"}}>
      <Typography variant='h4'sx={{
        textAlign:"center",
        fontWeight:600
      }}>Top hiring companies now</Typography>
      <Box sx={{width:"100%",height:"100%",display:"flex",marginTop:"1.5rem"}}>
            <Box sx={{
              width:"20%",
              height:"100%",
              display:"flex",
              alignItems:"center",
              justifyContent:"flex-start",
              flexDirection:"column",
              rowGap:"1rem",
              
           
            }}>
              <Typography variant='h6' sx={{fontFamily:"inter"}}>Top Skills</Typography>
              <Box sx={{
                display:"flex",
                alignItems:"center",
                // justifyContent:"center",
                flexDirection:"column",
                rowGap:"1rem",
                height:"180px",
                width:"80%",
                
              scrollbarWidth: 'thin',
              scrollbarColor: '#096eb6 transparent',
                overflowX:"scroll"

                
              }}>
                {
                topSkillsList.map((label,id) => (
           <Button
             key={id}
             variant="contained"
             onClick={() => {
               setActiveButton(id)
               setData(label.companyIds)
             }}
             style={{
               backgroundColor: activeButton === id ? "#096eb6" : "white",
               color: activeButton === id ? "white" : "black",
               width:"10rem",
               textTransform:"capitalize",
               fontFamily:"inter"
               
             }}
           >
             {label.skill}
           </Button>
                 ))}
             
                </Box>

            <Button 
              sx={{
                display:show?"block":"none",
                textTransform:'capitalize',
                fontFamily:"santoshi",
                border:"1px solid #096eb6",
                borderRadius:"10px"
              }}
            onClick={()=>{
               setTopSkillsList([...topSkillsList, ...topSkills.slice(3, topSkills.length)]);
               setShow(false);
            
            }}>View more</Button>
            
            <Button 
              sx={{
                display:!show?"block":"none",
                textTransform:'capitalize',
                fontFamily:"santoshi",
                border:"1px solid #096eb6",
                borderRadius:"10px"
              }}
            onClick={()=>{
               setTopSkillsList(topSkills.slice(0,3));
               setShow(true);
            
            }}>View less</Button>
            
          
             
            </Box>
            <Box sx={{
               width:"70%",
               height:"100%",
              
            }}>

              <Slide companies={data}/>
              
            </Box>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center',  }}>
      <Button variant='outlined'>View all companies</Button>
    </Box>
    </Box>
  )
}
