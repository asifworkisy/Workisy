

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { GoX } from "react-icons/go";
import "./loginpage.css"
import { Button, Typography } from '@mui/material';
import MailLogin from './mailLogin';
import MobileLogin from './mobilelogin';
import { FcGoogle } from "react-icons/fc";

import Tooltip from '@mui/material/Tooltip';
import { popUp } from '../Header';

export default function Loginpage() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [showPage,setShowPage]=React.useState(true);

  const DrawerList = (
    <Box sx={{ width: 550, fontFamily:"inter" }}  role="presentation"  >
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-end", borderRadius:"20px",padding:"1rem"}}>
                <GoX className='gox'  onClick={toggleDrawer(false)}/>
        </Box>
        <Box sx={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>

        <Box sx={{width:"75%"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",marginBottom:'1rem'}}>

                <Typography variant='h5' sx={{fontSize:'1.3rem',fontWeight:'550'}}>Login</Typography>
                <Typography variant='h5' sx={{fontSize:'1rem',color:"rgb(0, 123, 255)"}}>Register for free</Typography>
            </Box>
            {
                showPage ? <MailLogin setShowPage={setShowPage}/> : <MobileLogin setShowPage={setShowPage}/>
            }
            <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                columnGap:".7rem",
                marginTop:"1rem"
            }}>
                <Box
                sx={{
                    width :"150px",
                    height:".8px",
                    backgroundColor:"gray"
                    }}>

                </Box>
                <Typography variant='p' sx={{
                    fontSize:".8rem",
                    color:"gray"
                }}>Or</Typography>
                <Box
                sx={{
                    width :"150px",
                    height:".8px",
                    backgroundColor:"gray"
                    }}>

                </Box>
            </Box>
            <Box sx={{
                color:"#007BFF",
                fontWeight:"600",
                height:"25px",
                width:"100%",
                padding:"8px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                border:"1px solid #007BFF",
                borderRadius:"10px",
                marginTop:"1rem",
                columnGap:"1rem"
            }}>
                <FcGoogle style={{fontSize:"1.5rem"}}/>
                <Typography variant='p'>Sign with in Google</Typography>
            </Box>

        </Box>
        </Box>

    </Box>
  );

  const [open1, setOpen1] = React.useState(false);

  return (
    <div>
         <Tooltip
         open={open1}
         onClose={()=>setOpen1(false)}
          onOpen={()=>setTimeout(()=>setOpen1(true),200)}
          title="Job seeker login"
          componentsProps={popUp}
          >

     <Button onClick={toggleDrawer(true)} sx={{
       fontFamily: "Inter",
       fontWeight: "bold",
       border: "1px solid rgb(0, 123, 255)",
       color: "rgb(0, 123, 255)",
       borderRadius: "20px",
       width: "80px",
       padding: "7px",
       textTransform:"capitalize",
       '&:hover': {
           backgroundColor: "rgb(243, 251, 255)",
       }

     }}> Login</Button>
    </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'  PaperProps={{
          sx: { borderRadius: "20px 0 0 20px" }
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}




// ------------------------medal styling it look like pop up---------------------------------------------------------

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { GoX } from "react-icons/go";
// import "./loginpage.css";
// import { Button, Typography } from '@mui/material';
// import MailLogin from './mailLogin';
// import MobileLogin from './mobilelogin';
// import { FcGoogle } from "react-icons/fc";
// import Tooltip from '@mui/material/Tooltip';
// import { popUp } from '../Header';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 550,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   borderRadius: '20px',
//   padding: '1rem',
//   fontFamily: "inter",
// };

// const modalBackgroundStyle = {
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center'
// };

// export default function Loginpage() {
//   const [open, setOpen] = React.useState(false);
//   const [showPage, setShowPage] = React.useState(true);
//   const [open1, setOpen1] = React.useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const DrawerList = (
//     <Box sx={style}>
//       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//         <GoX className='gox' onClick={handleClose} />
//       </Box>
//       <Box sx={{ width: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
//         <Box sx={{ width: "75%" }}>
//           <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: '1rem' }}>
//             <Typography variant='h5' sx={{ fontSize: '1.3rem', fontWeight: '550' }}>Login</Typography>
//             <Typography variant='h5' sx={{ fontSize: '1rem', color: "rgb(0, 123, 255)" }}>Register for free</Typography>
//           </Box>
//           {showPage ? <MailLogin setShowPage={setShowPage} /> : <MobileLogin setShowPage={setShowPage} />}
//           <Box sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             columnGap: ".7rem",
//             marginTop: "1rem"
//           }}>
//             <Box sx={{
//               width: "150px",
//               height: ".8px",
//               backgroundColor: "gray"
//             }} />
//             <Typography variant='p' sx={{
//               fontSize: ".8rem",
//               color: "gray"
//             }}>Or</Typography>
//             <Box sx={{
//               width: "150px",
//               height: ".8px",
//               backgroundColor: "gray"
//             }} />
//           </Box>
//           <Box sx={{
//             color: "#007BFF",
//             fontWeight: "600",
//             height: "25px",
//             width: "100%",
//             padding: "8px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             border: "1px solid #007BFF",
//             borderRadius: "10px",
//             marginTop: "1rem",
//             columnGap: "1rem"
//           }}>
//             <FcGoogle style={{ fontSize: "1.5rem" }} />
//             <Typography variant='p'>Sign in with Google</Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );

//   return (
//     <div>
//       <Tooltip
//         open={open1}
//         onClose={() => setOpen1(false)}
//         onOpen={() => setTimeout(() => setOpen1(true), 200)}
//         title="Job seeker login"
//         componentsProps={popUp}
//       >
//         <Button onClick={handleOpen} sx={{
//           fontFamily: "Inter",
//           fontWeight: "bold",
//           border: "1px solid rgb(0, 123, 255)",
//           color: "rgb(0, 123, 255)",
//           borderRadius: "20px",
//           width: "80px",
//           padding: "7px",
//           textTransform: "capitalize",
//           '&:hover': {
//             backgroundColor: "rgb(243, 251, 255)",
//           }
//         }}>
//           Login
//         </Button>
//       </Tooltip>
//       <Modal open={open} onClose={handleClose} sx={modalBackgroundStyle}>
//         {DrawerList}
//       </Modal>
//     </div>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { GoX } from "react-icons/go";
// import { Button, Typography } from "@mui/material";
// import Tooltip from "@mui/material/Tooltip";
// import "./loginpage.css";

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 550,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: "20px",
//   padding: "1rem",
// };

// const modalBackgroundStyle = {
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

// export default function Loginpage() {
//   const [open, setOpen] = React.useState(false);
//   const [showPage, setShowPage] = React.useState("input");
//   const [inputValue, setInputValue] = React.useState("");
//   const [otpValue, setOtpValue] = React.useState("");
//   const [errorMessage, setErrorMessage] = React.useState("");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     resetFields();
//   };

//   const resetFields = () => {
//     setInputValue("");
//     setOtpValue("");
//     setShowPage("input");
//     setErrorMessage("");
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     setErrorMessage("");
//   };

//   const handleOtpChange = (e) => {
//     setOtpValue(e.target.value);
//     setErrorMessage("");
//   };

//   const handleSendOtp = () => {
//     if (inputValue.trim()) {
//       console.log(`Sending OTP to: ${inputValue}`);
//       setShowPage("otp");
//       setErrorMessage("");
//     } else {
//       setErrorMessage("Please enter a valid email or phone number.");
//     }
//   };

//   const handleVerifyOtp = () => {
//     if (otpValue.trim()) {
//       console.log(`Verifying OTP: ${otpValue}`);
//       handleClose();
//     } else {
//       setErrorMessage("Please enter a valid OTP.");
//     }
//   };

//   return (
//     <div>
//       <Tooltip title="Job seeker login">
//         <Button
//           onClick={handleOpen}
//           sx={{
//             fontFamily: "Inter",
//             fontWeight: "bold",
//             border: "1px solid rgb(0, 123, 255)",
//             color: "rgb(0, 123, 255)",
//             borderRadius: "20px",
//             width: "80px",
//             padding: "7px",
//             textTransform: "capitalize",
//             "&:hover": {
//               backgroundColor: "rgb(243, 251, 255)",
//             },
//           }}
//         >
//           Login
//         </Button>
//       </Tooltip>
//       <Modal open={open} onClose={handleClose} sx={modalBackgroundStyle}>
//         <Box sx={modalStyle}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <GoX className="gox" onClick={handleClose} />
//           </Box>
//           <Box sx={{ width: "100%", textAlign: "center" }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontSize: "1.3rem",
//                 fontWeight: "1000",
//                 color: "#007BFF",
//                 marginBottom: "1rem",
//                 marginTop: "-2rem",
//               }}
//             >
//               {showPage === "input" ? "Login" : "Verify OTP"}
//             </Typography>
//             {showPage === "input" ? (
//               <Box>
//                 <Typography
//                   variant="body1"
//                   sx={{ fontWeight: "700", marginBottom: "0.7rem" }}
//                 >
//                   Enter your email or phone number:
//                 </Typography>
//                 <input
//                   className="login-box-details"
//                   type="text"
//                   value={inputValue}
//                   onChange={handleInputChange}
//                   style={{
//                     width: "80%",
//                     padding: "10px",
//                     marginBottom: "0.5rem",
//                     borderRadius: "5px",
//                     border: "1px solid gray",
//                   }}
//                 />
//                 {errorMessage && (
//                   <Typography
//                     sx={{
//                       color: "red",
//                       fontSize: "0.875rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     {errorMessage}
//                   </Typography>
//                 )}
//                 <Button
//                   className="login-box-otp-btn"
//                   variant="contained"
//                   onClick={handleSendOtp}
//                 >
//                   Send OTP
//                 </Button>
//               </Box>
//             ) : (
//               <Box>
//                 <Typography variant="body1" sx={{ fontWeight: "700", marginBottom: "0.7rem"  }}>
//                   Enter OTP:
//                 </Typography>
//                 <input
//                   className="login-box-input"
//                   type="text"
//                   value={otpValue}
//                   onChange={handleOtpChange}
//                   style={{
//                     width: "80%",
//                     padding: "10px",
//                     marginBottom: "1rem",
//                     borderRadius: "5px",
//                     border: "1px solid gray",
//                   }}
//                 />
//                 {errorMessage && (
//                   <Typography
//                     sx={{
//                       color: "red",
//                       fontSize: "0.875rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     {errorMessage}
//                   </Typography>
//                 )}
//                 <Button variant="contained" onClick={handleVerifyOtp}>
//                   Verify OTP
//                 </Button>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
