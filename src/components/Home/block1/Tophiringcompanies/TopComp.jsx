import React, { useState } from 'react'
import "./ftrComp.css"
import { Box, Button, MenuItem, Select, Typography } from '@mui/material'


import {topSkills} from "./data"
import Cards from './Cards'
export default function FtrComp() {

  

let [data,setData]=useState([1,2,3,4,5,6,7]);




  
  return (
  
    <Box sx={{width:"100%",marginTop:"2rem",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",rowGap:"1rem",flexDirection:"column"}}>
          <Typography variant='h5'sx={{
            fontWeight:600
          }}>Top hiring companies based on skills</Typography>
           <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue="All"
        sx={{height:"40px",width:"150px",color:"white",backgroundColor:"#096eb6", '.MuiSelect-icon': {
          color: 'white', // Change the icon color here
        },}}
      >
        {
          topSkills.map((company,id)=>(
        <MenuItem value={company.skill} style={{ color: 'black', }} key={id} onClick={()=>setData(company.companyIds)}>
          {company.skill}
        </MenuItem>
            
          ))
        }
       
         </Select>

      </Box>
   
      <Cards companyIds={data}/>
     
      

        <Box sx={{ display: 'flex', justifyContent: 'center',  }}>
        <Button variant='outlined' sx={{
          backgroundColor:"white"
        }}>View all companies</Button>
      </Box>
              
    
        
      
      
    </Box>
  )
}
