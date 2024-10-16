import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material';

const jobData = {
  popularCategories: {
    title: "Popular categories",
    jobs: [
      "IT jobs",
      "Sales jobs",
      "Marketing jobs",
      "Data Science jobs",
      "HR jobs",
      "Engineering jobs"
    ]
  },
  jobsInDemand: {
    title: "Jobs in demand",
    jobs: [
      "Fresher jobs",
      "MNC jobs",
      "Remote jobs",
      "Work from home jobs",
      "Walk-in jobs",
      "Part-time jobs"
    ]
  },
  jobsByLocation: {
    title: "Jobs by location",
    jobs: [
      "Jobs in Delhi",
      "Jobs in Mumbai",
      "Jobs in Bangalore",
      "Jobs in Hyderabad",
      "Jobs in Chennai",
      "Jobs in Pune"
    ]
  }
};
export default function Job()
{
 
  return(
    <Box sx={{
      display:"flex",
      columnGap:"1rem"
       
    }}>

      {
        
        Object.values(jobData).map((category,id)=>(
          <>
          <Box key={id} sx={{
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