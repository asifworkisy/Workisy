import { Box, Button, Tooltip, Typography } from '@mui/material'
import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header({setPage}) {

    const Options=()=>{
        const btn={
            color:"black",
            textTransform:"capitalize"
        }
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column"
            }}>
                <Button sx={btn} onClick={()=>setPage(1)}>Resume Database Access(RESDEX)</Button>
                <Button sx={btn} onClick={()=>setPage(2)}>Job posting</Button>
        
            </Box>
        )
        }
  return (
   <Box sx={{
    height:"100px",
   
    display:"flex",
    alignItems:"center",
    borderBottom:"1px solid gray"
   }}>
        <Box sx={{
            width:"50%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            columnGap:"3rem"
        }}>
            <Link to="/">
            <Box
             component="img"
             sx={{
                height: { xs: "3rem", sm: "3rem" },
                width: { xs: "8rem", sm: "9rem" },
              }}
             src={logo}
             alt='.'
             >

            </Box>
            </Link>
            <Tooltip title={<Options/>}
                componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "white",
                       
                        borderRadius: "10px",
                        border: ".1px solid rgb(241,241,241)",
                        outline: "none",
                        maxWidth: "none",
                       
                      },
                    },
                  }}
                 
                  
            >
            <Box sx={{
                 display:"flex",
                 alignItems:"center",
                 rowGap:"1.5rem",
                 cursor:"pointer"
            }}>

               <Typography>buy online </Typography>
               <KeyboardArrowDownIcon/>
            </Box>

            </Tooltip>
            

        </Box>
        <Box>

        </Box>

   </Box>
  )
}
