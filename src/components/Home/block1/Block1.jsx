import React from 'react'
import "./block1.css"
import { Box,Button,Typography } from '@mui/material'


import { SlReload } from "react-icons/sl";
import PageSlider from './topcompnies/Topcompanies';
import FtrComp from './featuredcompanies/FtrComp';

import Category from './categories/Category';
import SearchBox from './Search/searchBox';




let btn={
  px:"1rem",
  borderRadius: '20px',
  outline: 'none',
  border: '1px solid rgb(210, 207, 207)',
  textTransform:"capitalize",
  color:"black"
 

}

export default function Block1() {


  return (
    <Box sx={{
       
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"column",
       
      
       
      
        
        
        
    }}>
      <Box sx={{display:"flex",
        // flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#096eb6",
        width:"97%",
        padding:"2rem",
        borderRadius: '50px',
      
    
      }}>
        <Typography variant='h3' sx={{fontWeight:"bold",fontFamily:"inter" ,fontSize:{xs:"1.7rem",sm:"1.5rem"},marginTop:"2rem",color:"white",width:"300px"}}>Over 7,00,000+jobs to explore</Typography>
       
        <SearchBox/>

      </Box>
      
       
        <Box sx={{marginTop:"1rem",display:'flex',columnGap:"1rem"}}>
          <Button sx={btn}><SlReload/> Java fullstack</Button>
          <Button sx={btn}><SlReload/> Deloite</Button>
          <Button sx={btn}><SlReload/> Appit software</Button>
        
        </Box>
        

      <Category/>
      
       

      <Box sx={{width:"80%",marginTop:"2.5rem"}}>
      <PageSlider/>
      <FtrComp/>

      </Box>


    
      

        
       

         
        

    </Box>
  )
}
