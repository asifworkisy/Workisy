import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { Box, Typography } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Sample options for experiences
const names = ["Fresher", "2023", "2022", "Below 2021"];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{
      display:"flex",
      alignItems:"center",
      columnGap:".5rem"
    }}>
      <LocalMallIcon sx={{color:"gray"}}/>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography color="text.secondary" sx={{fontSize:"1.1vw"}}>Enter experience</Typography>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '& .MuiSelect-select': {
              padding: '10px 14px', // Adjust padding as needed
              border: 'none', // Remove default border
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
           
            width:"15vw",
           
          }}
        >
          <MenuItem disabled value="">
            <Typography color="text.secondary" sx={{fontSize:"1.1vw"}}>Enter experience</Typography> {/* Placeholder as MenuItem */}
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>

    </Box>
     
  );
}
