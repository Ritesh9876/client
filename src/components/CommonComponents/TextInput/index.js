import React from 'react'
import './textInput.css'
import {TextField} from '@mui/material';
function TextInput(props) {
  return (
    <div className="textInput-container">
    <TextField 
   // variant="standard" 
   fullWidth
    />
    </div>
  )
}

export default TextInput