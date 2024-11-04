import { Box, Typography ,Divider, Button, IconButton, NativeSelect} from '@mui/material'
import React, { useRef, useState } from 'react'
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import img1 from "../../assets/buy-online/new-post1.jpg"
import img2 from "../../assets/buy-online/new-post2.jpg"
import img3 from "../../assets/buy-online/new-post3.jpg"

import "./online1.css"

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

const Post=()=>{

    const data=[
       {
        img:img1,
        title:"Get more responses through chat with jobseekers",
        desc:"Quickly connect with jobseekers through chat and get more responses."
       },
       {
        img:img2,
        title:"Get more responses through chat with jobseekers",
        desc:"Quickly connect with jobseekers through chat and get more responses."
       }
       ,{
        img:img3,
        title:"Get more responses through chat with jobseekers",
        desc:"Quickly connect with jobseekers through chat and get more responses."
       }
        
    ]
    return(
    <Box sx={{display:"flex",flexDirection:"column",rowGap:".5vw"}}>
        <Typography sx={{fontSize:"16px",fontWeight:"bold",color:"#096eb6"}}>Naukari blog post</Typography>
        <Typography variant='h5'>What's New</Typography>
        <Box sx={{display:"flex",columnGap:"4vw"}}>
            {
                data.map((data,id)=>(
                    <Box key={id} sx={{height:"300px",width:"250px",borderRadius:"10px" ,overflow:"hidden",display:"flex",flexDirection:"column",rowGap:".5vw"}}>

                        <Box component="img" src={data.img} sx={{height:"150px",width:"100%",transition:"all .5s","&:hover":{transform:"scale(1.1)"}}}/>
                        <Typography sx={{fontWeight:"550"}}>{data.title}</Typography>
                        <Typography sx={{fontSize:"13px",fontWeight:"500",letterSpacing:"1px"}}>{data.desc}</Typography>

                    </Box>

                ))
            }
        </Box>


    </Box>
)
}

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
                    <Box sx={{height:"300px",width:"250px",flexShrink:0,borderRadius:"10px",border:"1px solid rgb(200, 199, 199)",
                        display:"flex",
                        flexDirection:"column",
                        rowGap:".6vw",
                        alignItems:"center",
                        justifyContent:"center",
                        p:"10px"
                    }}>
                            <AccountCircleIcon sx={{fontSize:"5vw",color:"gray"}}/>

                            <Box sx={{textAlign:"center"}}>
                                <Typography sx={{fontSize:"13px",fontWeight:"bold",color:" #096eb6"}}> Ruby Jhan </Typography>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}> Assistant Director & Direct Sourcing Leade.. </Typography>
                            </Box>
                            <Divider/>
                            <Typography sx={{
                                height:"100px",
                                fontSize:"13px",
                                overflowX:"scroll"
                            }}>Naukri.com has been always the first choice for any critical search. Our highest offer contribution across database search engines continues to be from Resdex. Appreciate the continuous evolving features of Resdex search to make it even </Typography>

                    </Box>
                ))
            }
        </Box>
    )
}


const FormAp=()=>{

    const [page,setPage]=useState(0);

    const FormInfo=()=>(
        <form className='footer-form'>
        <input placeholder='Name' className='custom-input'/>
        <input placeholder='Contact number' className='custom-input'/>
        <Box sx={{display:"flex",columnGap:"1vw"}}>

            <label>
                <input type="radio" name="options" value="option1" />
                Company
            </label>
            <label>
                <input type="radio" name="options" value="option2" />
                Consultant
            </label>
        </Box>
        <input placeholder='Company/consultant name' className='custom-input'/>

        <NativeSelect>
                    <option selected disabled >No of employees</option>
                    <option value={10}>1 - 10</option>
                    <option value={20}>20 - 30</option>
                    <option value={30}>30 - 40</option>
            </NativeSelect>
        
            <input placeholder='Designation' className='custom-input'/>
            <input placeholder='Email' className='custom-input'/>
            <input placeholder='City' className='custom-input'/>
            <Button sx={{color:"white",backgroundColor:"blue",fontWeight:"550"}}>Get callback</Button>
        </form>
    )
    return(
        <Box sx={{width:"350px",height:"auto",backgroundColor:"white",color:"black",p:"1vw"}}>
            <Typography sx={{fontSize:"15px",fontWeight:"bold"}}>Sales enquiry</Typography>

                <p>Iam looking for</p>
                <div style={{display:"flex",columnGap:"1vw",fontSize:"14px"}}>

                    <div>
                    <input type='radio' id="req" name='page' onClick={()=>setPage(0)}/>
                    <label for='req'>Recruitment solutions</label>

                    </div>
                    <div>
                    <input type='radio' id="r" name='page'onClick={()=>setPage(1)}/>
                    <label for='r'>Job opportunities</label>

                    </div>
                </div>
                {
                    page === 0 ? <FormInfo/>:<Button>Search jobs on Workisy</Button>
                }
                


        </Box>
    )
}


const Footer=()=>{
    const data1=[
        {
            title:"Recruiter Services",
            desc:[
                "Job Postings and Responses",
                "Resdex",
                "RMS",
                "Referral",
                "Transition Services"
            ]
        },
        {
            title:"Information",
            desc:[
                        "Job Postings and Responses",
                        "Resdex",
                        "RMS",
                        "Referral",
                        "Transition Services"
                    ]
                
            
        },
        {
            title:"Legal",
            desc:["Grievances", "Summons and Notice", "Trust and Safety", "Whitehat"]
                
        }
    ]
    const contactInfo = [
        {
            country:"India",
            tollFree: "1800 - 102 - 2558 (9:30 AM to 6:30PM)",
            email: "sales@naukri.com"
        },
        {
            country:"USA",
            tollFree: "+1 866 557 3340",
            email: "usa@naukri.com"
        },
       {
            country:" Europe_UK",
            tollFree: "+44 808 120 2323",
            email: "europe@naukri.com"
        },
       {
            country:" Middle_East_Africa_SouthEast_Asia",
            mobile: "+91 - 98183 17555",
            email: "middleeast@naukri.com"
        }
    ];
    

    return(
        <Box sx={{
            backgroundColor:"#01204f",
            color:"white",
            width:"100%",
            p:"1vw",
            display:"flex",
            justifyContent:"space-evenly"
        }}>
            <Box sx={{display:"flex",flexDirection:"column",rowGap:"1vw"}}>
                {
                    data1.map((data,id)=>(
                        
                            <Box key={id} sx={{display:"flex",flexDirection:"column",rowGap:"1vw"}}>
                                <Typography sx={{fontSize:"14px",color:"rgb(214, 214, 214)"}}>{data.title}</Typography>
                                <Box sx={{display:"flex",flexDirection:"column",rowGap:".2vw",letterSpacing:"1px"}}>

                                {
                                    data.desc.map((info,key)=>(
                                        <Typography key={key} sx={{fontSize:"15px"}} variant='h5'>{info}</Typography>
                                    ))
                                }
                                </Box>

                            </Box>
                        
                    ))
                }
            </Box>

            <Box sx={{display:"flex",flexDirection:"column",rowGap:"1vw"}}>
                <Typography sx={{fontSize:"14px",color:"rgb(214, 214, 214)"}}>Sales enquires</Typography>
               <Box sx={{display:"flex",flexDirection:"column",rowGap:"2vw"}}>
                    {
                        contactInfo.map((data,key)=>(
                            <Box>
                                <Typography>{data.country} :</Typography>
                                <Typography sx={{fontSize:"13px"}}>{data.email?data.email:data.mobile}</Typography>
                                <Typography sx={{fontSize:"13px"}}>{data.tollFree}</Typography>
                                </Box>
                        ))
                    }
               </Box>

            </Box>

            <FormAp/>
        </Box>
    )
}




const FrequentlyAskedQuestion=()=>(

    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",rowGap:"1vw"}}>
            <Typography variant='h5' sx={{fontSize:"30px"}}>Frequently Asked Questions</Typography>
            <Box sx={{display:"flex",columnGap:"2vw"}}>
            {
                Array.from({length:3},(i,j)=>j).map((data,id)=>(
                    <Box key={id} sx={{height:"200px",width:"300px",border:"1px solid rgb(200, 199, 199)",borderRadius:"10px",
                        display:"flex",
                        flexDirection:"column",
                        rowGap:"2vw",
                        alignContent:"center",
                        justifyContent:"space-evenly",
                        p:"1vw",
                        "&:hover":{
                            boxShadow:"4px 4px 5px 2px rgba(0, 0, 0, 0.3)",
                            transform:"scale(1.01)"
                        }
                    }}>

                        <Typography sx={{fontWeight:"500",fontSize:"1.2vw"}} variant="h5">Difference between Resdex and job posting?</Typography>
                        <Typography>Resdex is a candidate database that lets you instantly search for suitable candidates, while a job posting lets you create a job that candidates can apply to.</Typography>
                        </Box>
                ))
            }
            </Box>

    </Box>
    
)


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
        <Typography variant='h4' sx={{width:"550px",color:"rgb(54, 53, 53)"}}>Resdex - India's largest resume database for all your hiring needs </Typography> 
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
    <Box sx={{width:"60%",height:"250px",backgroundColor:"rgb(239, 238, 248)",borderRadius:"10px",borderBottomRightRadius:"20%",p:"3rem",display:"flex"}}>
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
                right:"6%",
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
                right:"-95%",
                 border:"1px solid #096eb6",
                backgroundColor:"white"
            }}>
                <KeyboardArrowLeftIcon sx={{color:"#096eb6"}}/>
            </IconButton>

            <StoryCards scrollBar={scrollBar}/>


        </Box>
    </Box>

    <Post/>

    <FrequentlyAskedQuestion/>

    <Footer/>

    


    



   
  </Box>
  )
}
