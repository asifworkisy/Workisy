import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export function DashboardLayout({ header, children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Render the header if provided */}
      <Box sx={{ zIndex: 1000 }}>{header}</Box>

      {/* Content section */}
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "80px", // Ensure content is not hidden by the fixed header
          padding: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

DashboardLayout.propTypes = {
  header: PropTypes.node,  // Header element (like the HeaderToolbar)
  children: PropTypes.node,  // Content of the page
};
