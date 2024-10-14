import React from 'react'

import { Box,keyframes,Typography } from '@mui/material'





import Category from './categories/Category';
import SearchBox from './Search/searchBox';
import FtrComp from './Tophiringcompanies/TopComp';
import PopularCategories from './popularcategories/PopularCategories';
import Topcompanies from './Topcompanies/Topcompanies';



// let btn={
//   px:"1rem",
//   borderRadius: '20px',
//   outline: 'none',
//   border: '1px solid rgb(210, 207, 207)',
//   textTransform:"capitalize",
//   color:"black"
 

// }
let animate=keyframes`
     from{
                background-position:2500px;
                background-size: 2500px;
            }
            to{
                background-position: 0;
            }
             
`

export default function Block1() {


  return (
    <Box sx={{
       
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"column",
       
      
       
      
        
        
        
    }}>
      <Box sx={{
        display:"flex",

        flexDirection:{xs:"column",md:"row"},
        justifyContent:"center",
        
        
        background:"linear-gradient(75deg,rgb(80, 103, 230),#096eb6,rgb(80, 103, 230))",
        //  "linear-gradient(75deg,#096eb6,blue,#096eb6)", 
        width:"97%",
        padding:"2rem",
        animation:`${animate} 2s linear infinite`

        
      
    
      }}>
        
        <Typography sx={{fontWeight:"600",fontFamily:"inter" ,fontSize:{xs:"1.7rem",sm:"1.5rem"},marginTop:"2rem",color:"white",width:{xs:"auto",md:"226px"}}}>Over 7,00,000+ jobs to explore</Typography>
       
        <SearchBox/>

      </Box>
      
       
        {/* <Box sx={{marginTop:"1rem",display:'flex',columnGap:"1rem"}}>
          <Button sx={btn}><SlReload/> Java fullstack</Button>
          <Button sx={btn}><SlReload/> Deloite</Button>
          <Button sx={btn}><SlReload/> Appit software</Button>
        
        </Box> */}
        

      <Category/>
      
       

      <Box sx={{width:"80%",marginTop:{sm:"8vh",md:"5vh"}}}>
       
     
      <Topcompanies/>
      <PopularCategories/>
      <FtrComp/>
     

      </Box>


    
      

        
       

         
        

    </Box>
  )
}
