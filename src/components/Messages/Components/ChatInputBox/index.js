import React from 'react'
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
function ChatInputBox() {
  return (
    <BootstrapInput defaultValue="Type...." id="bootstrap-input" />

  )
}

export default ChatInputBox