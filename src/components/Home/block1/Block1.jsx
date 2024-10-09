import React from 'react'
import "./block1.css"
import { Box,Button,Typography } from '@mui/material'


import { SlReload } from "react-icons/sl";
import PageSlider from './topcompnies/Topcompanies';
import FtrComp from './featuredcompanies/FtrComp';

import Category from './categories/Category';
import SearchBox from './Search/searchBox';




let btn={
  padding: '.4rem',
  borderRadius: '20px',
  outline: 'none',
  border: '1px solid rgb(210, 207, 207)',
 

}

export default function Block1() {


  return (
    <Box sx={{
       
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"column",
        marginTop:'4rem',
       
      
        
        
        
    }}>
      
        <Typography variant='h3' sx={{fontWeight:"bold",fontFamily:"inter" ,fontSize:{xs:"1.7rem",sm:"3rem"}}}>Find your dream job now</Typography>
        <Typography variant='h5'
        sx={{fontSize:{xs:".8rem",sm:"1.3rem"},marginTop:".2rem"}}
        >7 lakh+ jobs for you to explore</Typography>

       
        
       
        <SearchBox/>
       
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
