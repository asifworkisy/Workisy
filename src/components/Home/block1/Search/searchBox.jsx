import { Box } from '@mui/material'
import React from 'react'
import SearchInput from './searcBar'

import Experience from './exprience';
import Location from './Location';

export default function SearchBox() {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        border:"1px solid gray",
       
        borderRadius:"30px",
        marginTop:"2rem"
    }}>
        <SearchInput/>
        <Experience/>
        <Location/>
    </Box>
  )
}
