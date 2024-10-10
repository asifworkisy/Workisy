import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const images = require.context("../../../../assets/Topcompanies", false, /\.(gif|webp)$/);
const companyLogos = images.keys().map(images);

const TopCompanies = () => {
  const [activePage, setActivePage] = useState(0);
  const intervalRef = useRef();

  const cards = companyLogos; 
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Memoize the startAutoSlide function
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current); 
    intervalRef.current = setInterval(() => {
      setActivePage((prevPage) => (prevPage + 1) % totalPages);
    }, 4000);
  }, [totalPages]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); 
  }, [totalPages, startAutoSlide]); // Add startAutoSlide as a dependency

  const handleNavigation = (direction) => {
    clearInterval(intervalRef.current); 

    setActivePage((prevPage) =>
      direction === "forward" ? (prevPage + 1) % totalPages : (prevPage - 1 + totalPages) % totalPages
    );

    startAutoSlide(); 
  };

  const renderPage = (pageIndex) => {
    const start = pageIndex * cardsPerPage;
    const pageCards = cards.slice(start, start + cardsPerPage);

    return pageCards.map((img, id) => (
      <Box component="img"
        src={img}
        key={id}
        alt={`Card ${id}`}
        style={{ height: "50px", width: "150px", borderRadius: "10px" }}
      />
    ));
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography  sx={{ fontFamily: "inter", fontWeight: '550' }}>
          Top Featured Companies
        </Typography>

        {/* Left arrow button */}
        <Box sx={{ position: 'absolute', bottom: '-5%', left: '1rem', transform: 'translateY(-50%)', zIndex: 1 }}>
          <IconButton onClick={() => handleNavigation("backward")} sx={{ backgroundColor: "white", borderRadius: "50%",color:"#096eb6" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Right arrow button */}
        <Box sx={{ position: 'absolute', bottom: '-5%', right: '.31rem', transform: 'translateY(-50%)', zIndex: 1 }}>
          <IconButton onClick={() => handleNavigation("forward")} sx={{ backgroundColor: "white", borderRadius: "50%",color:"#096eb6" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative'}}>
        <Box
          sx={{
            display: 'flex',
            width: `${100 * totalPages}%`,
            transition: 'transform 1s ease-in-out',
            transform: `translateX(-${activePage * (100 / totalPages)}%)`
          }}
        >
          {[...Array(totalPages)].map((_, pageIndex) => (
            <Box
              key={pageIndex}
              sx={{ display: 'flex', flexWrap: "wrap", gap: "3rem", justifyContent: "center", width: `${100 / totalPages}%` ,backgroundColor:"white",py:"1rem",borderRadius:"20px"}}
            >
              {renderPage(pageIndex)}
            </Box>
          ))}
        </Box>
      </Box>

    
    </Box>
  );
};

export default TopCompanies;
