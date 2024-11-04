import { Box } from '@mui/material'
import React from 'react'
import ResdexPage from './resume database/resdexpage/ResdexPage'
import NaukriResdexPage from './resume database/rexdex/Rexdex'
import WhatsNew from '../EmployerSide/EmployeLogin/what\'s New/whatsNew'
import Testimonials from '../EmployerSide/EmployeLogin/Recruiters Recommend/RecruitersRecommend'


export default function Online2() {
  return (
<Box>
  <ResdexPage/>
  <NaukriResdexPage/>
   <Testimonials/>
  <WhatsNew/>

</Box>
  )
}
