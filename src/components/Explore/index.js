import React from 'react'
import './explore.css'
import { Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
function Explore() {
  return (
    <div className="explore-container">

      {
        [...Array(5)].map((currMsg,msgIndex) => {
          return (
            <div 
            key={"notify" + msgIndex}
            className="d-flex justify-content-between align-items-center explore-notification-container mt-20">
              <div>
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/1200x/4d/4c/0f/4d4c0fa0b2d8dac712fecbcefa58ba59.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                <div className="ml-10">
                <p className="font_16_600 ">Team Vista</p>
                <p className="font_12_400 mt-4px ">Building high scalable Software</p>

                </div>

              </div>
              <div className="mt-10">
              <p className="font_14_400 mt-4px ml-10">Need of a React Developer</p>

              </div>
              </div>

              <CloseIcon />
            </div>
          )
        })
      }
    </div>
  )
}

export default Explore