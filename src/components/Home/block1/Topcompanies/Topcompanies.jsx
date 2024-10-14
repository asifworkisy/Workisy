import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = require.context("../../../../assets/Topcompanies", false, /\.(gif|webp)$/);
const companyLogos = images.keys().map(images);

export default function Topcompanies() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
           
               
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                     scrollRef.current.scrollLeft = 0;
                }

               
                scrollRef.current.scrollBy({
                    left: 180,
                    behavior: 'smooth',
                });
            
        }, 3000);

        return () => clearInterval(scrollInterval); 
    }, []);

    return (
        <Box >
            <Typography variant='h6' sx={{textAlign:"center",fontSize:"1rem",letterSpacing:"1px"}}>Featured Companies</Typography>
        <Box
            ref={scrollRef}
            sx={{
              
                display: "flex",
                columnGap: "8rem",
                height: "70px",
                alignItems: 'center',
                backgroundColor: "white",
                overflowX: "hidden",
            
                borderRadius:"20px"
            }}
        >
          
            {[...companyLogos, ...companyLogos].map((img, index) => (
                <Box
                    component="img"
                    src={img}
                    key={index}
                    alt={`Card ${index}`}
                    sx={{
                        height: "40px",
                        width: "150px",
                        borderRadius: "10px",
                    }}
                />
            ))}


            <IconButton 
            onClick={()=>scrollRef.current.scrollBy({left:"180",behavior:"smooth"})}
            sx={{
                position:"absolute",
                right:"8.6%",
                backgroundColor:"white",
                border:"1px solid rgb(227, 226, 226)"
            }}>
                <ArrowForwardIosIcon/>
            </IconButton>
            <IconButton
             onClick={()=>scrollRef.current.scrollBy({left:"-180",behavior:"smooth"})}
             sx={{
                position:"absolute",
                left:"8.6%",
                backgroundColor:"white",
                border:"1px solid rgb(227, 226, 226)"

            }}>
                <ArrowBackIosIcon/>
            </IconButton>
        </Box>
        </Box>
    );
}
