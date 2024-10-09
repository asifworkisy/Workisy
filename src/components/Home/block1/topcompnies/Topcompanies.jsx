import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ibm from "../../../../assets/ibm.webp";

const TopCompanies = () => {
  const [activePage, setActivePage] = useState(0);
  const intervalRef = useRef();

  const cards = Array.from({ length: 20 }); 
  const cardsPerPage = 8;
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

    return pageCards.map((_, id) => (
      <img
        src={ibm}
        key={id}
        alt={`Card ${id}`}
        style={{ height: "100px", width: "250px", borderRadius: "10px" }}
      />
    ));
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem", position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant='h4' sx={{ fontFamily: "inter", fontWeight: '550' }}>
          Top Featured Companies
        </Typography>

        {/* Left arrow button */}
        <Box sx={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', zIndex: 1 }}>
          <IconButton onClick={() => handleNavigation("backward")} sx={{ backgroundColor: "white", borderRadius: "50%" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Right arrow button */}
        <Box sx={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', zIndex: 1 }}>
          <IconButton onClick={() => handleNavigation("forward")} sx={{ backgroundColor: "white", borderRadius: "50%" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', marginTop:"2rem" }}>
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
              sx={{ display: 'flex', flexWrap: "wrap", gap: "1.3rem", justifyContent: "center", width: `${100 / totalPages}%` }}
            >
              {renderPage(pageIndex)}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {[...Array(totalPages)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              margin: '0 5px',
              backgroundColor: activePage === index ? 'blue' : 'gray',
              cursor: 'pointer'
            }}
            onClick={() => setActivePage(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopCompanies;
