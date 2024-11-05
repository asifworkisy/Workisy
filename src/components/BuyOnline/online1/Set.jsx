import { Box, Typography } from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';
import { IoIosInformationCircleOutline } from "react-icons/io";
import CheckIcon from '@mui/icons-material/Check';
export const Set=()=>{
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