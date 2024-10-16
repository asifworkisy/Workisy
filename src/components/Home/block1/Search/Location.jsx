import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import PlaceIcon from '@mui/icons-material/Place';
import { Box } from '@mui/material';

const indianCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"];

export default function Location() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
   
    if (newInputValue.endsWith(',')) {
      const trimmedValue = newInputValue.slice(0, -1).trim();
      if (trimmedValue && !selectedOptions.includes(trimmedValue)) {
        setSelectedOptions((prev) => [...prev, trimmedValue]);
      }
      setInputValue(''); 
    } else {
      setInputValue(newInputValue);
    }
  };

  return (
    <Box sx={{
      display:{xs:"none",sm:"flex"},
      alignItems:"center"
    }}>
      <PlaceIcon sx={{color:"gray"}}/>
      <Autocomplete
        freeSolo
        multiple
        id="multi-select-autocomplete"
        options={indianCities}
        value={selectedOptions}
        onChange={(event, newValue) => {
          setSelectedOptions(newValue);
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
           
            placeholder="Enter Location"
            value={`${selectedOptions.join(', ')}${inputValue ? `, ${inputValue}` : ''}`}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent', 
                },
                fontSize:{sm:"1.5vw",md:"1.1vw"}
              },
            }}
          />
        )}
        renderTags={(i) => {
        
          return i+","
        }}  
        sx={{ width:{sm:"16vw",md:"12vw"}}}
      />

    </Box>
  );
}
