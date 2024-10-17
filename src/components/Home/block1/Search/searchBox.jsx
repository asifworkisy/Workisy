import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import SearchInput from './searcBar'

import Experience from './exprience';
import Location from './Location';

export default function SearchBox() {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        
       
        borderRadius:"50px",
        px:"1rem",
        marginTop:"2rem",
        transform:"scale(.9)",
        backgroundColor:"white",
        width:"auto"
       
      
    }}>
        <SearchInput/>
        <Divider  orientation="vertical" flexItem sx={{ margin: '0 16px',display:{xs:"none",sm:"block"}}}/>
        <Experience/>
        <Divider  orientation="vertical" flexItem sx={{ margin: '0 16px',display:{xs:"none",sm:"block"}}}/>
        <Location/>
        <Button sx={{
          color:"white",
          backgroundColor:"#096eb6",
          borderRadius:{xs:"10vw",sm:"2vw"},
          textTransform:"capitalize",
          
         px:"1.5vw",
         fontSize:{xs:"2vw",sm:"1vw"}
        }}>Search</Button>
    </Box>
  )
}
