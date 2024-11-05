import { Box, Button, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Enquiry from './Enquiry';
import {motion} from "framer-motion"
import Cart from './Cart';
import MovingIcon from '@mui/icons-material/Moving';

export default function Header({setPage}) {

    const [open,setOPen]=useState(false)

    const [openCart,SetOpenCart]=useState(false);

    const Options=()=>{
        const btn={
            color:"black",
            textTransform:"capitalize"
        }
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                
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
    borderBottom:"1px solid rgb(221, 221, 221)"
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

               <Typography>Buy online </Typography>
               <KeyboardArrowDownIcon/>
            </Box>

            </Tooltip>
            

        </Box>
        <Box sx={{
            display:"flex",
            columnGap:"3vw",
            alignItems:"center",
            justifyContent:"center"
        }}>

            <Box  sx={{cursor:"pointer",mb:"10px"}} onMouseEnter={()=>setOPen(true) } onMouseLeave={()=>setOPen(false) }>
                <Typography sx={{fontSize:"10px",fontFamily:"inter",fontWeight:"450",letterSpacing:".8px",color:"gray"}}>India Sales Toll Free (9:30 AM to 6:30PM)</Typography>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    columnGap:"5px"
                }}>
                    <LocalPhoneIcon sx={{fontSize:"17px"}}/>
                    <Typography sx={{fontSize:"13px",fontFamily:"inter",letterSpacing:"1px"}}>15333-443-233</Typography>
                    <KeyboardArrowDownIcon/>

                </Box>
                {
                open &&(
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }} // Adjust duration for smoother effect
                >
                    <Enquiry />
                </motion.div>
                )
            }

            </Box>

            <Box>
                
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        columnGap:"10px",
                        cursor:"pointer",    
                    }}
                    onClick={()=>SetOpenCart(!openCart)}>
                        <ShoppingCartIcon sx={{fontSize:"18px",color:"gray"}}/>
                        <Typography sx={{fontFamily:"inter"}}>Cart</Typography>
                        <KeyboardArrowDownIcon sx={{
                            color:"gray",
                            transform:openCart ? "rotate(180deg)" : "rotate(0deg)"
                            }}/>
                    </Box>
                            {
                                openCart && <Cart/>
                            }
            </Box>

            <Box sx={{display:"flex",columnGap:".5vw",alignItems:"center",color:"blue"}}>
                <Typography variant='h5' sx={{fontSize:"14px",fontFamily:"inter"}}>JobSeeker</Typography>
                <MovingIcon sx={{fontSize:"16px"}}/>
            </Box>


           
        </Box>

   </Box>
  )
}
