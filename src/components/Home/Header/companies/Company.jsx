import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material';

const data = {
  exploreCategories: {
    title: "Explore categories",
    jobs: [
      "Unicorn",
      "MNC",
      "Startup",
      "Product based",
      "Internet"
    ]
  },
  exploreCollections: {
    title: "Explore collections",
    jobs: [
      "Top companies",
      "IT companies",
      "Fintech companies",
      "Sponsored companies",
      "Featured companies"
    ]
  },
  researchCompanies: {
    title: "Research companies",
    jobs: [
      "Interview questions",
      "Company salaries",
      "Company reviews",
      "Salary Calculator"
    ]
  }
  
};

export default function Companies() {
  return(
    <Box sx={{
      display:"flex",
      columnGap:"1rem"
       
    }}>

      {
        
        Object.values(data).map((category,id)=>(
          < >
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            mt:"0rem",
            rowGap:".9rem"
           
           
          }}>
            <Typography sx={{fontWeight:"550",color:"black"}}>{category.title}</Typography>
            {
              category.jobs.map((job,i)=>(
          
                  <Link 
                    key={i}
                    style={{
                            textDecoration:"none",
                            fontSize:".9rem",
                            color:" rgb(61, 61, 61)",
              
                          }}
                    to="/adminProfile">{job}</Link>
                
              ))
            }
          </Box>
          <Divider
        orientation="vertical"
        flexItem
        sx={{ margin: '0 16px', backgroundColor: 'rgba(0, 0, 0, 0.1)',display:id===2?"none":"block" }}
      />  
          </>
        ))
      }
     
      
    </Box>
  )
}
