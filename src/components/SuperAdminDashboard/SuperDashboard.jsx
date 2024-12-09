import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internal";
import { RememberMe, WorkOutline } from "@mui/icons-material";
import { BsProjectorFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { CgTimelapse, CgWebsite } from "react-icons/cg";
import { PiDatabaseDuotone } from "react-icons/pi";

// Import missing icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./SuperDashboard.css";
import { DashboardLayout } from "@toolpad/core";

// Define the NAVIGATION array
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "divider",
  },

  {
    segment: "work",
    title: "Work",
    icon: <WorkOutline />,
    children: [
      {
        segment: "projects",
        title: "Projects",
        icon: <BsProjectorFill />,
      },
      {
        segment: "task",
        title: "Task",
        icon: <FaTasks />,
      },
    ],
  },

  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "recruit",
    title: "Recruit",
    icon: <RememberMe />,
    children: [
      {
        segment: "jobs",
        title: "Jobs",
        icon: <MdWorkOutline />,
      },
      {
        segment: "aplication",
        title: "Aplication",
        icon: <DescriptionIcon />,
      },
      {
        segment: "interview",
        title: "Interview Schedule",
        icon: <CgTimelapse />,
      },
      {
        segment: "candidate-database",
        title: "Candidate database",
        icon: <PiDatabaseDuotone />,
      },
      {
        segment: "career-site",
        title: "Career Site",
        icon: <CgWebsite />,
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    segment: "setting",
    title: "Setting",
    icon: <RiSettings2Fill />,
  },
];

// Create a theme using Material-UI
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Page content component
function PageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

// Header toolbar component with additional icons
function HeaderToolbar() {
    return (
      <Box className="header-toolbar">
        <Box className="right-section">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <ExitToAppIcon className="icon" />
        </Box>
      </Box>
    );
  }
  

// Main SuperDashboard component
export default function SuperDashboard(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            src="http://localhost:3000/static/media/logo.a78debda23a035fe444b.png"
            alt="Your Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        ),
        title: "",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <Box sx={{ width: "100%", zIndex: 100}}>
        <HeaderToolbar />
      </Box>


      <Box >
        <DashboardLayout>
          <PageContent pathname={router.pathname} />
        </DashboardLayout>
      </Box>
    </AppProvider>
  );
}
