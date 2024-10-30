import { Box, Typography ,Divider} from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { IoIosInformationCircleOutline } from "react-icons/io";


const Set=()=>{
    const data=
    [
        { value: 1, name: "100 CV views per requirement" },
        { value: 1, name: "Up to 500 search results" },
        { value: 1, name: "Candidates active in last 6 months" },
        { value: 1, name: "10+ advanced filters" },
        { value: 1, name: "Single user access" },
        { value: 0, name: "Email multiple candidates together" },
        { value: 0, name: "Boolean keyword search" },
        { value: 0, name: "Download CVs in bulk" }
    ]
    
    return(
        <Box sx={{mt:"2rem",display:"flex",flexDirection:"column",rowGap:"8px"}}>
            {
                data.map((data,id)=>(
                    <Box sx={{display:"flex",alignItems:"center"}} key={id}>
                          {
                            data.value===1?<CheckIcon sx={{color:"green",border:"1px solid green",borderRadius:"50%",transform:"scale(.7)"}}/>:<CloseIcon sx={{color:"gray",border:"1px solid gray",borderRadius:"50%",transform:"scale(.7)"}}/>
                        }  
                        <Typography sx={{fontSize:"15px"}}>{data.name}</Typography>
                        <IoIosInformationCircleOutline/>
                    </Box>
                ))
            }
        </Box>

    )

}

const Card=()=>{
    return(
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        
        flexDirection:"column",
        alignItems:"center",
       width:"350px"
    
    }}>
        <Box sx={{display:"flex",}}>
             <CurrencyRupeeIcon/>
             <Typography variant='h4'>4000</Typography>
             <Box sx={{
                display:"flex",
                alignItems:"center",
                mt:"5px"
             }}>
                <CurrencyRupeeIcon sx={{fontSize:"10px"}}/>
                <Typography variant='h4' sx={{fontSize:"10px",textDecoration: "line-through"}}>5000</Typography>

             </Box>

        </Box>
        <Typography variant='h5' sx={{width:"120px",fontSize:"17px"}}>1 requirement 100 CV views</Typography>
        <Set/>
    </Box>

)

}
 



export default function Online1() {
  return (
  <Box sx={{
   display:"flex",
   flexDirection:"column",
   mt:"3rem",
   justifyContent:"center",
   alignItems:"center",
   rowGap:"3rem"
    

  }}>


    <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Typography variant='h5' sx={{fontSize:"1.2vw",fontWeight:"550",  textTransform: "uppercase",color:"blue"}}>Resume Database Access</Typography>
        <Typography variant='h4' sx={{width:"500px",color:"rgb(54, 53, 53)"}}>Resdex - India's largest resume database for all your hiring needs </Typography> 
    </Box>

    <Box >
       
        <Box sx={{
            border:"1px solid gray",
            padding:"1vw",
            borderRadius:"10px"
            
        }}>
            <Box>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"7px"}}>

                <Typography variant='h5' sx={{fontSize:"1.2vw",fontWeight:"550",  textTransform: "uppercase",color:"blue",display:"inline"}}>Resdex lite</Typography>
                <Typography sx={{backgroundColor:"purple",color:"white",borderRadius:"5px",px:"2px",display:"inline"}}>New</Typography>
                    
                </Box>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                <Typography  sx={{fontSize:"14px"}}>Best fit for smaller hiring needs.</Typography>
                <Typography sx={{fontWeight:"550",color:"blue"}}>How it works</Typography>

                </Box>
                

            </Box>

            <Box sx={{display:"flex",mt:"2rem"}}>
                    <Card/>
                    <Divider orientation="vertical" flexItem />
                    <Card/>

            </Box>
        </Box>

      
        

    </Box>


   
  </Box>
  )
}
