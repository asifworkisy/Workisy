import { Box, Typography } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
const categories=[
    { icon:AccountBalanceIcon, category:"Banking",color:"rgb(238, 238, 249)"},
    { icon:HomeIcon, category:"Home",color:"rgb(249, 238, 242)"},
    { icon:GroupIcon, category:"Hr",color:"rgb(238, 248, 249)"},
    { icon:HomeRepairServiceIcon, category:"Sales",color:"rgb(238, 249, 242)"},
    { icon:CalculateIcon, category:"Accounting",color:"rgb(249, 244, 238)"},
    { icon:HomeRepairServiceIcon, category:"Customer S..",color:"rgb(238, 238, 249)"},

    { icon:CalendarTodayIcon, category:"Event Man..",color:"rgb(249, 238, 242)"},
    { icon:LanguageIcon, category:"IT",color:"rgb(238, 248, 249)"},
    { icon:SyncAltIcon, category:"Sql",color:"rgb(238, 238, 249)"},
    { icon:SyncAltIcon, category:"Oracle",color:"rgb(238, 249, 242)"},
    { icon:ColorLensIcon, category:"Graphic Design",color:"rgb(249, 244, 238)"},
    { icon:HomeRepairServiceIcon, category:"Digital Marketing",color:"rgb(238, 238, 249)"},

]


export default function PopularCategories() {
    
  return (
   <Box sx={{
    marginTop:"2rem",
    display:"flex",
    flexDirection:"column",
    rowGap:".8rem"
   }}>
    <Typography variant='h6'>Popular categories</Typography>
    <Box sx={{
        display:"flex",
        gap:"1.5rem",
        width:"100%",
       
        alignItems:"center",
        flexWrap:"wrap",
        
        // justifyContent:"center"
    }}>
        {
            categories.map((card,index)=>(
                <Box key={index} sx={{
                    backgroundColor:"white",
                    display:"flex",
                  py:".5rem",
                    
                    borderRadius:"10px",
                    outline:"none",
                    columnGap:"1rem",
                    border:"1px solid rgb(223, 221, 221)",
                    width:"10rem",
                    alignItems:"center",
                    pl:"1rem"
                    // justifyContent:"C"
                    ,  transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    },
                    


                }}>
                    <card.icon sx={{
                        backgroundColor:card.color,
                        borderRadius:"50%",
                        p:".5rem"
                    }}/>
                    <Typography sx={{fontWeight:"350",fontSize:"13px"}}>{card.category}</Typography>
                </Box>
            ))
        }
    </Box>
    
   </Box>
  )
}
