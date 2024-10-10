import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const jobSuggestions = [
  'Java Developer',
  'Java Architect',
  'Java Full Stack Developer',
  'Spring Developer',
  'Java Back End Developer',
  'Core Java Developer',
  'Java Lead',
  'AEM Developer',
  'Application Developer',
];

export default function SearchInputg() {
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
        display:"flex",
        alignItems:"center"
    }}>
        <SearchIcon sx={{ fontSize:"2rem"
        }}/>
        <Autocomplete
      freeSolo
      multiple
      id="multi-select-autocomplete"
      options={jobSuggestions}
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
         
          placeholder="Enter skills / designations / companies"
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
            },
           
          
            
          }}
        />
      )}
      renderTags={(i) => {
      
        return i+","
      }}  
      sx={{ width: 350}}
    />
    </Box>
   
  );
}
