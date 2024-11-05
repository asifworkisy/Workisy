import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


import { IoIosInformationCircleOutline } from 'react-icons/io';
export const Features=()=>{
    const data = [
        { name: "CV views as per plan", value: 1 },
        { name: "Unlimited search results", value: 1 },
        { name: "All available candidates", value: 1 },
        { name: "20+ advanced filters", value: 1 },
        { name: "Multiple user access", value: 1 },
        { name: "Email multiple candidates together", value: 1 },
        { name: "Boolean keyword search", value: 1 },
        { name: "Download CVs in bulk", value: 1 }
      ];
      
    
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