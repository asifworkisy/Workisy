import { Box, Link } from '@mui/material'
import React, { useRef } from 'react'
import { Card, CardContent, Typography,IconButton} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { topCompaines } from './data';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Cards({companyIds}) {
  const scrollCard=useRef(null);
  const companiesData=topCompaines.filter(company=>companyIds.includes(company.id));

  
  return (
    <>
    <Box ref={scrollCard}
     sx={{
      display: "flex",
      columnGap: "1.5rem",
      width: "100%",
      overflowX: "auto",
      // whiteSpace: "nowrap",
      scrollbarWidth: "thin",
      scrollbarColor: "blue transparent",
      '&::-webkit-scrollbar': {
        height: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'blue',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
    }}
    >
       {companiesData.map((card, index) =>(
            
                <Card key={index} sx={{borderRadius:"10px",width:"250px",
                
                   transition: "box-shadow 0.3s ease-in-out", 
                   flexShrink:0,
                  
                   "&:hover": {
                     boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Larger shadow on hover
                  
                   }
                   
                }}>
                  <CardContent sx={{

                       
                        display:"flex",
                        alignItems:"center",
                        // justifyContent:"center",
                        flexDirection:"column",
                        rowGap:"1rem",
                        px:"2rem",
                        
                       
                        
                  

                  }}>
                    <Box component="img" src={card.img} alt="." sx={{
                      height:"50px",
                      width:"100px",
                      
                    }}/>
                    <Box sx={
                      {
                        padding:"1rem",
                        display:"flex",
                        alignItems:"center",
                        
                        flexDirection:"column",
                        justifyContent:"space-evenly",
                        backgroundColor:card.color,
                        rowGap:"1rem"
                        
                      }
                    }>
                        <Typography variant="h6" sx={{fontSize:"1rem",fontFamily:"inter"}}>{card.companyName}</Typography>
                       <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        columnGap:".5rem",
                        
                       }}>
                          <StarIcon sx={{fontSize:"1rem",color:"orange"}}/>
                          <Typography variant="h6"  sx={{fontSize:".8rem",borderRight:"1px solid gray",paddingRight:".6rem"}}>{card.rating}</Typography>
                          <Typography variant="h6"  sx={{fontSize:".8rem"}}>{card.reviews}reviews</Typography>
                  

                       </Box>

                    </Box>
                       <Typography variant="h6" sx={{fontSize:".8rem",color:"black",fontWeight:"550"}}>{card.title}</Typography>
                       <Link sx={{
                        textDecoration:"none",
                         color:"rgb(0, 123, 255)",
                         border:"1px solid rgb(0, 123, 255) ",
                         padding:".5rem",
                         borderRadius:"20px",
                        //  width:"9rem",
                         textAlign:"center",
                         fontWeight:"550",
                          fontFamily:"inter",
                         fontSize:".7rem",
                         transition:"all .7s",
                         cursor:"pointer",
                         '&:hover':
                         {
                            backgroundColor:"rgb(0, 123, 255)",
                            color:"white",
                        }

                        }}>View All </Link>

                    
                    
                  </CardContent>
                </Card>
          
       ))
          }

    </Box>
    <Box sx={{
        position:"absolute",
        right:"15%",
        marginTop:"2rem",
        display:"flex",
        columnGap:"1rem"
        
      }}>
        <IconButton sx={{color:"blue",backgroundColor:"white","&:hover":{backgroundColor:"rgb(175, 186, 250)",color:"white"}}} onClick={()=>scrollCard.current.scrollBy({left:"-320",behavior:"smooth"})}>
          <KeyboardArrowLeftIcon/>
        </IconButton>
        <IconButton  sx={{color:"blue",backgroundColor:"white","&:hover":{backgroundColor:"rgb(175, 186, 250)",color:"white"}}} onClick={()=>scrollCard.current.scrollBy({left:"320",behavior:"smooth"})}>
          <KeyboardArrowRightIcon/>
        </IconButton>
      </Box>
          
    </>
  )
}
