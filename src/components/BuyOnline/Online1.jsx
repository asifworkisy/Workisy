import { Box, Typography ,Divider, Button, IconButton} from '@mui/material'
import React, { useRef } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { IoIosInformationCircleOutline } from "react-icons/io";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import banner from "../../assets/buy-online/banner.png"
import DvrIcon from '@mui/icons-material/Dvr';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

  const Features=()=>{
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

const CardBottom=()=>(
    <Box sx={{display:"flex",flexDirection:"column",rowGap:"1rem",alignItems:"center",width:"50%"}}>
        <Typography sx={{color:"gray",fontSize:"13px"}}>valid for  15 days</Typography>
        <Button sx={{color:"white",backgroundColor: "#096eb6",width:"90%"}}>Buy now</Button>
        <Button sx={{color: "#096eb6",border:"1px solid #096eb6",backgroundColor:"white",width:"90%"}}>Add to cart</Button>
        
    </Box>
)
 

const Template=()=>{
    const data=[
        {
            icon:LibraryBooksIcon,
            title:"10.36 crore resumes",
            info:"Access India’s largest resume database for your hiring needs"
        },
        {
            icon:ContactMailIcon,
            title:"Contact instantly",
            info:"Connect instantly with candidates via phone, email, and instant messaging"
        },
        {
            icon:DvrIcon,
            title:"Amplify productvity",
            info:"Work smarter with advanced filters, boolean search, mass emailing and more"
        }
    ]
return(
    <Box sx={{display:"flex",columnGap:"1rem",mt:"2rem"}}>
        {
            data.map((data,id)=>(
                <Box key={id} sx={{display:"flex",flexDirection:"column",rowGap:"1rem",alignItems:"center",justifyContent:"center",border:"1px solid rgb(200, 199, 199)",p:"1rem",width:"300px",borderRadius:"10px"}}>
                    <data.icon sx={{fontSize:"50px",color:"#096eb6"}}/>
                    <Typography variant='h5'>{data.title}</Typography>
                    <Typography sx={{fontSize:"12px"}}>{data.info}</Typography>

                </Box>
            ))
        }

    </Box>

)
}



const StoryCards=({scrollBar})=>{
    return(
        <Box sx={{display:"flex",columnGap:"2rem",overflowX:"scroll",scrollbarWidth:"none"}} ref={scrollBar}>
            {
                Array.from({length:"10"},(i,id)=>i).map((i,index)=>(
                    <Box sx={{height:"300px",width:"250px",flexShrink:0,borderRadius:"10px",border:"1px solid rgb(200, 199, 199)"}}>
                        {index}
                    </Box>
                ))
            }
        </Box>
    )
}


export default function Online1() {
    const scrollBar=useRef(null);
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
    <Box  sx={{display:"flex",columnGap:"2rem"}}>

                <Box sx={{
                    border:"1px solid rgb(200, 199, 199)",
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
                    <Divider sx={{mt:"15px"}} />

                    <Box sx={{mt:"2rem",display:"flex"}}>
                        <CardBottom/>
                        <Divider orientation="vertical" flexItem />
                        <CardBottom/>
                    </Box>
                </Box>

                <Box sx={{
                    height:"auto",
                    width:"400px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    border:"1px solid rgb(200, 199, 199)",
                    padding:"1vw",
                    borderRadius:"10px",
                    rowGap:"2rem"
                }}>

                    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                        <Typography variant='h5' sx={{fontSize:"1.2vw",fontWeight:"550", color:"blue"}}>RESDEX</Typography>
                        <Typography variant='h5' sx={{fontSize:"14px"}}>Best fit for bigger hiring needs</Typography>
                    </Box>

                    <Box>
                        <Typography variant='h4' sx={{color:"rgb(70, 69, 69)"}}>Custom pricing</Typography>
                        <Typography variant='h5' sx={{fontSize:"14px",textAlign:"center"}}>Based on your plan</Typography>
                    </Box>
                    <Features/>
                  
                    <Box sx={{width:"100%",textAlign:"center",mt:"2rem"}}>
                        <Typography sx={{color:'gray',fontSize:"13px"}}>As per plan</Typography>
                        <Button sx={{color:"white",backgroundColor: "#096eb6",width:"90%"}}>Contact sales</Button>
                    </Box>

                </Box>
    </Box>

    <Box sx={{textAlign:"center"}}>

        <Typography variant='h5' sx={{fontSize:"16px",color:"blue",fontWeight:"550"}}>RESDEX WORKISY</Typography>
        <Typography variant='h4' >Why businesses trust Workisy Resdex</Typography>
       <Template/>
    </Box>
    <Box sx={{width:"60%",height:"250px",backgroundColor:"rgb(229, 241, 246)",borderRadius:"10px",borderBottomRightRadius:"20%",p:"3rem",display:"flex"}}>
        <Box sx={{display:"flex",flexDirection:"column",rowGap:"1.5rem",width:"50%"}}>
            <Typography variant='h4'>Search Candidates from India's Largest Talent Pool</Typography>
            <Typography>Source candidates from Resdex - India's largest Talent Pool and find the perfect talent for your organisation.</Typography>
           <Box sx={{
            color:"#096eb6",
            display:"flex",
            alignItems:"center",
            columnGap:".5rem"
           }}>
            <Typography>View  All Resdex Plans </Typography>
            <KeyboardDoubleArrowRightIcon/>
            
            </Box> 
        </Box>
        <Box sx={{width:"50%",height:"270px"}} component="img" src={banner}/>

    </Box>

    <Box sx={{width:"60%",display:"flex",columnGap:"1rem"}}>
        <Box sx={{display:"flex",flexDirection:"column",rowGap:".5rem",width:"50%"}}>
            <Typography sx={{color:"#096eb6",textTransform:"uppercase",fontWeight:"550"}}>Success Stories</Typography>
            <Typography variant='h5'>Recruiters Recommend Naukri Job Posting Portal</Typography>    
            <Typography sx={{fontSize:"13px"}}>Naukri is used as the main tool for talent acquistion by lacs of recruiters 
                across all kinds and sizes of industry. They appreciate Naukri’s services and highly recommend it as the one-stop solution to all the hiring needs of a company.</Typography>
        </Box>
        <Box sx={{height:"300px",width:"60%",p:"2rem"}}>

            <IconButton
             onClick={()=>scrollBar.current.scrollBy({left:-540,behaviour:"smooth"})}
             sx={{
                display:"absolute",
                top:"50%",
                right:"4%",
                border:"1px solid #096eb6",
                backgroundColor:"white"
                
            }}>
                <KeyboardArrowLeftIcon sx={{color:"#096eb6"}}/>
            </IconButton>
            <IconButton
            onClick={()=>scrollBar.current.scrollBy({left:540,behaviour:"smooth"})}
             sx={{
                display:"absolute",
                top:"50%",
                transform:"rotate(180deg)",
                right:"-90%",
                 border:"1px solid #096eb6",
                backgroundColor:"white"
            }}>
                <KeyboardArrowLeftIcon sx={{color:"#096eb6"}}/>
            </IconButton>

            <StoryCards scrollBar={scrollBar}/>


        </Box>
    </Box>
    


    



   
  </Box>
  )
}
