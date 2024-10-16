import { Box, Button, Link, Typography } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BoltIcon from '@mui/icons-material/Bolt';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
export default function Latestjobs() {
    const categoriesInfo = [
        { category: "Big brands", info: [1, 2, 3, 4, 5, 6, 7, 8] },
        { category: "Work from home", info: ["one", "two"] },
        { category: "Part-time", info: [1, 2, 3, 4] },
        { category: "MBA", info: [1, 2, 3, 4] },
        { category: "Engineering", info: [1, 2, 3, 4] },
        { category: "Media", info: [1, 2, 3, 4] },
        { category: "Design", info: [1, 2, 3, 4] },
        { category: "Data science", info: [1, 2, 3, 4] },
    ];

    const [id, setId] = useState(0);
    const [active, setActive] = useState(0);
    const [scrollBarWidth, setScrollBarWidth] = useState(0);  // State to track scrollbar width

    const cardsContainer = useRef(null);

    const Card = ({ card }) => {
        return (
            <Box sx={{
                border: "1px solid rgb(207, 206, 206)", backgroundColor: "white",
                borderRadius: "15px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "1.5rem",
                width: "330px",
                flexShrink: 0,
                transform:"scale(.95)",
                "&:hover":{
                    transform:"scale(.96)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }
            }}>
                <Box sx={{display:"flex",flexDirection:"column",rowGap:".5rem"}}>
                    <Typography variant='h6' sx={{color:"#096eb6",fontSize:".9rem"}}>Appit Software Solutions</Typography>
                  <Box sx={{
                    display:"flex",
                    columnGap:".5rem"
                   
                  }}>
                      <Typography variant='h6>' sx={{
                        fontSize:"1.2rem",
                        fontWeight:"bold",
                        fontFamily:"inter"
                    }}>Tablea Developer </Typography>
                    <BoltIcon sx={{color:"white",backgroundColor:"blue",borderRadius:"50%"}}/>
                    </Box>
                    <Box sx={{display:"flex",columnGap:".2rem",color:"rgb(84, 82, 82)"}}>
                        <LocationOnIcon sx={{fontSize:"1.1rem"}}/>
                        <Typography variant='h6' sx={{fontWeight:"300",fontFamily:"inter",fontSize:".85rem",marginTop:"-1px"}}>Pune</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:".2rem",color:"rgb(84, 82, 82)"}}>
                        <CalendarTodayIcon sx={{fontSize:"1.1rem"}}/>
                        <Typography variant='h6' sx={{fontWeight:"300",fontFamily:"inter",fontSize:".85rem",marginTop:"-1px"}}>1day ago</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:".1rem",color:"rgb(84, 82, 82)"}}>
                    <HomeRepairServiceIcon sx={{fontSize:"1.1rem"}}/>
                    <Typography variant='h6' sx={{fontWeight:"300",fontFamily:"inter",fontSize:".85rem",marginTop:"-1px"}}>10+ Years</Typography>
                      
                    </Box>
                    
                </Box>
                <Box sx={{display:"flex",color:"black",columnGap:"1rem"}}>
                    <Typography sx={{fontSize:".9rem"}}>Skills:</Typography>
                    <Box sx={{display:"flex",columnGap:".6rem"}}>
                       
                        <Typography sx={{fontSize:".7rem",
                            padding:".2rem",
                            borderRadius:"10px",
                            border:"1px solid rgb(204, 203, 203)",
                            paddingLeft:".5rem",
                            paddingRight:".5rem",
                            fontFamily:"inter",
                            transition:"all .7s",
                            "&:hover":{
                                backgroundColor:"#096eb6",
                                color:"white",
                                border:"none"
                            }
                        }}>Mysql</Typography>
                        <Typography sx={{fontSize:".8rem",
                            padding:".2rem",
                            borderRadius:"10px",
                            border:"1px solid rgb(204, 203, 203)",
                            paddingLeft:".5rem",
                            paddingRight:".5rem",
                            transition:"all .7s",
                            fontFamily:"santoshi",

                            "&:hover":{
                                backgroundColor:"#096eb6",
                                color:"white",
                                border:"none"
                            }
                        }}>Javascript</Typography>
                    </Box>

                </Box>
                <Box sx={{display:"flex",justifyContent:"space-between",fontFamily:"santoshi"}}>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant='h6' sx={{fontSize:".9rem"}}>15Lacs-26Lacs</Typography>
                    <Typography sx={{color:"rgb(91, 90, 90)",fontSize:".8rem"}}>/year</Typography>
                    

                    </Box>
                  <Link sx={{
                    textDecoration:"none",
                    backgroundColor:" #f4f6f6",
                    color:"black",
                    borderRadius:"20px",
                    padding:".5rem",
                    fontSize:".9rem"
                    ,paddingLeft:"1rem",
                    paddingRight:"1rem",
                    transition:"all .5s",
                    "&:hover":{
                        backgroundColor:"rgb(16, 91, 16)",
                        color:"white"
                    }
                    


                  }}>Temparay/Contractual</Link>
                </Box>
            </Box>
        );
    };

  
    const handleScroll = () => {
        const container = cardsContainer.current;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const newScrollBarWidth = (scrollLeft / scrollWidth) * 100;

        console.log(container,"Scroll left",scrollLeft,"scroll width",scrollWidth)
        setScrollBarWidth(newScrollBarWidth);
    };

    useEffect(() => {
        const container = cardsContainer.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "1rem", marginTop: "1.5rem" }}>
            <Typography variant='h4' sx={{ fontFamily: "inter", fontWeight: "600" }}>Latest jobs on Workisy</Typography>
            <Box sx={{ display: "flex", columnGap: "1rem",justifyContent:"center"
               
              
             }}>
                <Typography variant='h6' sx={{ fontFamily: "inter", color: "rgb(52, 51, 51)",fontSize:{sm:"1.9vw",md:"1.3vw"} }}>Popular categories :</Typography>
                <Box sx={{ display: 'flex', columnGap: "1rem",
                     
                     overflowX: 'auto',
                     scrollBehavior: 'smooth',
                     width:{xs:"20%",sm:"50%",md:"70%",lg:"auto"},
                 }}>
                    {categoriesInfo.map((data, idx) => (
                        <Button
                            key={idx}
                            variant='outlined'
                            onClick={() => {
                                setId(idx);
                                setActive(idx);
                            }}
                            sx={{
                                backgroundColor: active === idx ? "#096eb6" : "white",
                                color: active === idx ? "white" : "rgb(52, 51, 51)",
                                textTransform: "capitalize",
                                border: "1px solid rgb(193, 193, 193)",
                                borderRadius: "20px",
                                outline: "none",
                                
                                flexShrink:0,
                                height:{sm:"4vw",md:"2.5vw"},
                            }}
                        >{data.category}</Button>
                    ))}
                </Box>
            </Box>
            <Box ref={cardsContainer} sx={{
                display: "flex",
                width: "84%",
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                marginTop: "2rem",
                position: "relative",
                columnGap: ".5rem",
                scrollbarWidth: "none",
               
            }}>
                {categoriesInfo[id].info.map((card, index) => <Card key={index} card={card} />)}
            </Box>

            {/* Scroll Bar */}
            <Box sx={{
                width: "200px",
                backgroundColor: "white",
                height: "10px",
                borderRadius: "20px",
                overflow: "hidden",
                paddingLeft:"0px",
                paddingRight:"30px",
                
            }}>
                <Box sx={{
                    marginLeft:`${scrollBarWidth}%`,
                    width:"30px",
                    backgroundColor: "blue",
                    height: "10px",
                    borderRadius: "20px",
                    transition: "all  ease-out"
                }} />
            </Box>

        </Box>
    );
}
