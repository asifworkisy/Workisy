import { Box,Typography } from '@mui/material';
import React from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeWorkIcon from '@mui/icons-material/HomeWork';


const data = [
    {
        name:"Remote",
       icon:ImportantDevicesIcon,
       colors:{
        background:"rgb(209, 209, 250)",
        circle:"rgb(231, 231, 248)",
        text:"purple",
        icon:"purple"
       }
    },
    {
        name:"Freelance",
        icon:AccountCircleIcon,
        colors:{
            background:"rgb(245, 242, 235)",
            circle:"rgb(244, 234, 217)",
            text:"rgb(249, 107, 56)",
            icon:"rgb(249, 107, 56)",
           }
        
        
    },
    
    {
        name:"Full time",
        icon:WorkOutlineIcon,
        colors:{
            background:"rgb(249, 236, 238)",
            circle:"rgb(253, 225, 230)",
            text:"orangered",
            icon:"red",
           }
        
    },
    {
        name:"Part time",
        icon:AccessTimeIcon,
        colors:{
            background:"rgb(234, 249, 234)",
            circle:"rgb(216, 249, 216)",
            text:"rgb(25, 101, 25)",
            icon:"green",
           }
    },
    // {
    //     name:"Contract",
    //     icon:ImportantDevicesIcon,
    //     colors:{
    //         background:"rgb(242, 251, 253)",
    //         circle:"rgb(212, 243, 249)",
    //         text:"rgb(119, 119, 246)",
    //         icon:"rgb(119, 119, 246)",
    //        }

    // },
    {
        name:"Work from home",
        icon:HomeWorkIcon,
        colors:{
            background:"rgb(232, 245, 239)",
            circle:"rgb(212, 246, 230)",
            text:"rgb(5, 89, 102)",
            icon:"rgb(5, 89, 102)",
           }
    }

]

const BackgroundStyle=({backgroundColor,circle})=>{
    return(
        <Box sx={{
            height:"100px",
            width:"200px",
            backgroundColor:backgroundColor,
            padding:"1rem",
            zIndex:-1
           
        }}>
            <Box sx={{height:"50px",width:"50px",backgroundColor:circle,borderRadius:"50%",transform:"translateX(-2rem)"}}></Box>
            <Box sx={{height:"50px",width:"50px",backgroundColor:circle,borderRadius:"50%",transform:"scale(3) translateX(100%)"}}></Box>
            <Box sx={{height:"50px",width:"50px",backgroundColor:circle,borderRadius:"50%"}}></Box>
    

        </Box>
    )
}
  

export default function Category() {

   

    return (
        <Box sx={{ width: "100%", maxHeight: "400px", display: "flex",flexDirection:"column",
        marginTop:{sm:"9vh",md:"5vh"},
        justifyContent:"center",alignItems:"center"}}>
          <Typography variant='h4' sx={{fontWeight:"600",letterSpacing:"1px"}}>Find the perfect job for YOU</Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    marginTop: "2rem",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {data.map((card, id) => (
                    <Box sx={{
                        height: "120x",
                            width: "227px",
                            borderRadius:"10px",
                            overflow:"hidden",
                            // transform:"scale(1.1)"
                    }}>
                            <Box
                                key={id}
                                sx={{
                                    height: "100px",
                                    width: "195px",
                                    padding: "1rem",
                                    
                                  
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                   
                                    rowGap: ".5rem",
                                    borderRadius:"10px",
                                   
                                    transition: "box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                                    },
                                    position:"absolute",
                                    zIndex:"2"
                                }}
                            >
                                <card.icon sx={{fontSize:"3rem",color:card.colors.icon}}/>
                              
                                <Typography variant="h6" sx={{ fontFamily: "Inter", fontSize: "1rem" ,color:card.colors.text}}>
                                    {card.name}
                                </Typography>
                            </Box>
                            <BackgroundStyle backgroundColor={card.colors.background} circle={card.colors.circle}/>
                    </Box>
                    
                ))}
            </Box>
        </Box>
    );
}
