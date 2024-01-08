import React from 'react'
import './searchBoxInput.css'
import {styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

  
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
      borderRadius: 10,
      position: 'relative',
      color:"#8094ae",
      backgroundColor: "#1d1e20",
      fontSize: 16,
      width: '100%',
      padding: '8px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      
    },
  }));
function SearchBoxInput() {
  return (
    <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />

  )
}

export default SearchBoxInput