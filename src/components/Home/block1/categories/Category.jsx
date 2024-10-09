import { Box,Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PiBuildingOfficeLight } from "react-icons/pi";

import { SiSimpleanalytics } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { FiCheckCircle, FiCode } from "react-icons/fi";

import HomeIcon from '@mui/icons-material/Home';
const data = [
    {
        name:"remote",
        icon:FiCode
    },
    {
        name:"freelance",
        icon:SiSimpleanalytics,
    },
    {
        name:"Full time",
        icon:FaProjectDiagram
    },
    {
        name:"Part time",
        icon:FiCheckCircle
    },
    {
        name:"Contract",
        icon:PiBuildingOfficeLight

    },
    {
        name:"Work from home",
        icon:HomeIcon
    }

]
  

export default function Category() {

   
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Box sx={{ width: "70%", maxHeight: "400px", display: "flex",marginTop:"2rem",justifyContent:"center"}}>
          
            <Box
                sx={{
                    width: "80%",
                    height: "auto",
                    display: "flex",
                    marginTop: "2rem",
                    gap: "2rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {data.map((job, id) => (
                    <Box
                        key={id}
                        sx={{
                            height: "auto",
                            width: "200px",
                            padding: "1rem",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            border: "1px solid rgb(213, 213, 213)",
                            rowGap: ".5rem",
                            animation: `${isVisible ? "slideIn 1s ease forwards" : ""}`,
                            animationDelay: `${id * 0.2}s`,
                            transition: "box-shadow 0.3s ease-in-out",
                            "&:hover": {
                                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                    >
                        <job.icon
                            style={{
                                fontSize: "1.2rem",
                                backgroundColor: "#f6f4f4",
                                borderRadius: "50%",
                                padding: ".5rem"
                            }}
                        />
                        <Typography variant="h6" sx={{ fontFamily: "Inter", fontSize: "1rem" }}>
                            {job.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}