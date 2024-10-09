import { Box, Typography, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Link } from '@mui/material'



export default function Jobvacancy() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const roles=[
    "Accountant(1119)",
    "BPO / Telecaller(703)",
    "Customer / Tech Support(780)",
    "Engineer(Core,Non-IT)(7014)",
    "Sales / Marketing Executive(2520)",
    "It Software-Engineer(11170)",

]
const cities=[
    "Bangalore(1663)",
    "Hyderabad(978)",
    "Chennai(1307)"

]
const courses=[
  "B.com(2933)",
  "BBA/BBM(2311)",
  "BE/Btech(23333)"
]
 const tabContents = [
    { value: '1', content: roles },
    { value: '2', content:cities },
    { value: '3', content: courses},
    { value: '4', content: roles },
  ];

  return (
    <Box sx={{ width: "80%"}}>
      <Typography variant='h4' sx={{fontFamily:"inter",fontWeight:"600" }}>
        Find Job Vacancies By
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1' ,marginTop:"1rem"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="job vacancy tabs"
          indicatorColor="primary"
          textColor="inherit"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'rgb(0, 123, 255)',
            },
            '& .MuiTab-root': {
              color: 'black',
              '&.Mui-selected': {
                color: 'rgb(0, 123, 255)',
              },
            },
          }}
        >
          <Tab label="Job by Roles" value="1"  sx={{fontFamily:"inter",fontWeight:"600",textTransform: 'capitalize'}}/>
          <Tab label="Job by City" value="2"  sx={{fontFamily:"inter",fontWeight:"600",textTransform: 'capitalize'}} />
          <Tab label="Job by Courses" value="3" sx={{fontFamily:"inter",fontWeight:"600",textTransform: 'capitalize'}} />
          <Tab label="Job by Category" value="4" sx={{fontFamily:"inter",fontWeight:"600",textTransform: 'capitalize'}} />
        </Tabs>
        <Box sx={{ padding: 2 }}>
        {tabContents.map((tab,key) => (
            value === tab.value && 
           <Box key={key} sx={{
             padding:"2rem",
            borderRadius:"20px",
            backgroundColor:"white",
            
        
           }}>
                <Box sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"1rem",
                   
                }}>
                    {
                        tab.content.map((i,id)=>{

                            return <Link key={id} sx={{
                                textDecoration:"none",
                                color:"black",
                                border:"1px solid gray",
                                fontFamily:"inter",
                                borderRadius:"20px",
                                padding:".6rem",
                                transition:"all .5s",
                                cursor:"pointer",
                                "&:hover":{
                                  backgroundColor:"rgb(24, 121, 24)",
                                  color:"white"
                                }
                            }} >{i}</Link>
                        })
                    }
                </Box>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    marginTop:"2.5rem",
                  
                   justifyContent:"center"
                }}>
                    <Link sx={{
                        textDecoration:"none",
                         color:"rgb(0, 123, 255)",
                         border:"1px solid rgb(0, 123, 255) ",
                         padding:".5rem",
                         borderRadius:"20px",
                         width:"9rem",
                         textAlign:"center",
                         fontWeight:"550",
                         fontFamily:"inter",
                         transition:"all .7s",
                         cursor:"pointer",
                         '&:hover':
                         {
                            backgroundColor:"rgb(0, 123, 255)",
                            color:"white",
                        }

                        }}>View All Roles</Link>
                </Box>
            </Box>
            
         ) )}
        </Box>
      </Box>
    </Box>
  );
}
