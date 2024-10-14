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
       
      
    }}>
        <SearchInput/>
        <Divider  orientation="vertical" flexItem sx={{ margin: '0 16px' }}/>
        <Experience/>
        <Divider  orientation="vertical" flexItem sx={{ margin: '0 16px' }}/>
        <Location/>
        <Button sx={{
          color:"white",
          backgroundColor:"#096eb6",
          borderRadius:"2vw",
          textTransform:"capitalize",
          p:".vw",
         px:"1.5vw",
         fontSize:"1vw"
        }}>Search</Button>
    </Box>
  )
}
