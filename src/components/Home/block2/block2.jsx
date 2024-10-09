import { Box } from '@mui/material'
import React from 'react'
import Jobvacancy from './Jobvacancy'

import Premiumservices from './Premiumservices'
import Latestjobs from './Latestjobs'
import LatestIntertships from './latestinternships'

export default function Block2() {
  return (
   <Box sx={{
    display:"flex",
    alignItems:"center",
  
    justifyContent:"center",
    flexDirection:'column'
   }}>
    <Jobvacancy/>
    <LatestIntertships/>
   <Latestjobs/>
    <Premiumservices/>
    <Premiumservices/>
   </Box>
  )
}
