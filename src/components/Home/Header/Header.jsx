import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loginpage from "./login/loginpage";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import Content from "./employeer/Content";

import { IoIosArrowDown } from "react-icons/io";
import Job from "./Job/Job";
import Companies from "./companies/Company";
import Service from "./services/Service";
import title from "../../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const btnStyle = {
  color: "rgb(72,71,71)",
  border: "none",
  backgroundColor: "white",
  fontSize: ".9rem",
  fontWeight: "550",
  height: "50px",

  position: "relative",
  fontFamily: "inter",
  textTransform: "capitalize",
  letterSpacing: "1px",
  "&:hover::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "4px",
    backgroundColor: "orangered",
    borderRadius: "10px",
    transform: " translateY(1rem)",
  },
};
let register = {
  border: "none",
  position: "relative",
  color: "white",
  fontFamily: "Inter",
  backgroundColor: "rgb(255, 71, 71)",
  borderRadius: "20px",
  fontWeight: 550,
  padding: "7px",
  width: { xs: "150px", sm: "100px" },

  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgb(246, 127, 127)",
  },
};
const employerStyle = {
  fontFamily: "Inter",
  fontSize: ".9rem",
  fontWeight: 600,
  height: "40px",
  width: "auto",
  color: "rgb(72, 71, 71)",
  paddingLeft: "1rem",
  position: "relative",
  transition: "all 0.5s",
  textTransform: "capitalize",

  "&:hover::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: 0,
    width: "70%",
    height: "4px",
    borderRadius: "10px",
    backgroundColor: "orangered",
    transform: "translateX(-40%) translateY(-10%)",
    transition: "width 0.5s",
  },
  "&:hover": {
    backgroundColor: "white",
  },
};

export const popUp = {
  tooltip: {
    sx: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  },
};

export default function Header() {
  const navigate = useNavigate();
  let [open, setOpen] = useState(false);
  let [open1, setOpen1] = useState(false);

  let [openJob, setOpenJob] = useState(false);

  let [openComData, setOpenComData] = useState(false);

  let [openSerData, setOpenSerData] = useState(false);

  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  return (
    <Box
      sx={{
        height: "90px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "inter",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: { sm: "30%", md: "50%" },
          marginLeft: "10%",
          columnGap: "5rem",
        }}
      >
        <Box
          component="img"
          src={title}
          sx={{
            height: { xs: "3rem", sm: "3rem" },
            width: { xs: "8rem", sm: "9rem" },
          }}
        />

        <Box
          sx={{
            width: "400px",
            justifyContent: "space-evenly",
            alignItems: "center",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Tooltip
            open={openJob}
            onClose={() => setOpenJob(false)}
            onOpen={() => setOpenJob(true)}
            title={<Job />}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.7)",
                  borderRadius: "20px",
                  border: ".1px solid rgb(241,241,241)",
                  outline: "none",
                  maxWidth: "none",
                  padding: "1rem",
                },
              },
            }}
          >
            <Button sx={btnStyle}>Job</Button>
          </Tooltip>
          <Tooltip
            open={openComData}
            onClose={() => setOpenComData(false)}
            onOpen={() => setOpenComData(true)}
            title={<Companies />}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.7)",
                  borderRadius: "20px",
                  border: ".1px solid rgb(241,241,241)",
                  outline: "none",
                  maxWidth: "none",
                  padding: "1rem",
                },
              },
            }}
          >
            <Button sx={btnStyle}>Companies</Button>
          </Tooltip>
          <Tooltip
            open={openSerData}
            onClose={() => setOpenSerData(false)}
            onOpen={() => setOpenSerData(true)}
            title={<Service />}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.7)",
                  borderRadius: "10px",
                  border: ".1px solid rgb(241,241,241)",
                  outline: "none",
                  maxWidth: "none",
                  padding: "1rem",
                  height: "auto",
                },
              },
            }}
          >
            <Button sx={btnStyle}>Services</Button>
          </Tooltip>
        </Box>
      </Box>

      <Box
        sx={{
          width: { sm: "70%", md: "40%" },

          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        <Loginpage />
        <Tooltip
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {
            setTimeout(() => setOpen(true), 200);
          }}
          title="Job seeker Register"
          componentsProps={popUp}
        >
          <Button sx={register} onClick={() => navigate("/register")}>
            Register
          </Button>
        </Tooltip>
        <Tooltip
          open={open1}
          onClose={() => setOpen1(false)}
          onOpen={() => setOpen1(true)}
          title={<Content />}
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.7)",
                borderRadius: "10px",
                border: ".1px solid rgb(241,241,241)",
                outline: "none",
              },
            },
          }}
        >
          <Box></Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={employerStyle}
              onClick={() => navigate("/employee-login")}
            >
              For employers
            </Button>
            <IoIosArrowDown />
          </Box>
        </Tooltip>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            sm: "none",
            width: "70%",
            justifyContent: "flex-end",
          },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
