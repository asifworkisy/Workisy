import { Box } from '@mui/material'
import React, { useState } from 'react'
import Header from '../BuyOnline/header/Header'
import Online1 from './online1/Online1';
import Online2 from './online2/Online2';

export default function Body() {

    const [page,setPage]=useState(1);
  return (
   <Box>
    <Header setPage={setPage}/>
    {
        page===1?<Online1/>:<Online2/>
    }
   </Box>
  )
}
