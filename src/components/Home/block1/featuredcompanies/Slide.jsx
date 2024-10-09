import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import './ftrComp.css';  // For custom transitions
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StarIcon from '@mui/icons-material/Star';
import {Link} from "@mui/material";
import { topCompaines } from "./data";

const Slide = ({companies}) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("next");


  const cardData=topCompaines.filter((company)=>companies.includes(company.id))
 
  

  const itemsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection("next");
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection("prev");
      setPage((prevPage) => prevPage - 1);
    }
  };

 
  const currentPageData = cardData.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <SwitchTransition >
        <CSSTransition
          key={page}
          timeout={500}
          classNames={direction === "next" ? "slide-next" : "slide-prev"}
        
        >
          <Grid container spacing={12} justifyContent="center">
            {currentPageData.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} >
                <Card sx={{borderRadius:"10px",width:"230px",
                
                   transition: "box-shadow 0.3s ease-in-out", 
                   transform:"scale(.9)",
                   "&:hover": {
                     boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Larger shadow on hover
                     transform:"scale(.95)",
                   },
                }}>
                  <CardContent sx={{

                       
                        display:"flex",
                        alignItems:"center",
                        // justifyContent:"center",
                        flexDirection:"column",
                        rowGap:"1rem",
                        padding:"2rem",
                        
                       
                        
                  

                  }}>
                    <Box component="img" src={card.img} alt="." sx={{
                      height:"50px",
                      width:"100px",
                      marginRight:"2rem"
                    }}/>
                    <Box sx={
                      {
                        padding:"1rem",
                        display:"flex",
                        alignItems:"center",
                        flexDirection:"column",
                        justifyContent:"center",
                        backgroundColor:"rgba(237, 29, 37, 0.03)",
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
              </Grid>
            ))}
          </Grid>
        </CSSTransition>
      </SwitchTransition>

    
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px"}}>
        <Button variant="contained" disabled={page === 0} onClick={handlePrev} sx={{
            backgroundColor:"white",color:"black",
            borderRadius:"10px",
            transform:"scale(.7)"
           
           
        }}
        >
          <FaAngleLeft style={{fontSize:"1.5rem"}}/>
        </Button>
        <Button
          variant="contained"
          disabled={page === totalPages - 1}
          onClick={handleNext}
          sx={{
            backgroundColor:"white",color:"black",
            borderRadius:"10px",
            transform:"scale(.7)"
           
           
        }}
        >
          <FaAngleRight style={{fontSize:"1.5rem"}}/>
        </Button>
      </div>
    </div>
  );
};

export default Slide;
