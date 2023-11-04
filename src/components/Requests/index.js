import React from 'react'
import './requests.css'
import { Avatar } from '@mui/material'
import ButtonComp from '../../Utils/Components/ButtonComp'

function Requests() {
  return (
    <div className="requests-container">
            {
        [...Array(5)].map((currMsg,msgIndex) => {
          return (
            <div 
            key={"requests" + msgIndex}
            className="d-flex justify-content-between align-items-center notifications-notification-container mt-20">
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://qph.cf2.quoracdn.net/main-qimg-fcb478cfe3bd2e68cf33c691ad75b3dd-lq"
                  sx={{ width: 50, height: 50 }}
                />
                <div className="ml-10">
                <p className="font_16_600">Tony Stark</p>
                <p className="font_12_600">Requested for Stark Tower</p>

                </div>
              </div>

            <div className="d-flex align-items-center">
                <ButtonComp color={1} variant={1}>
                    Accept
                </ButtonComp>

                <div className="ml-10">
                <ButtonComp color={3} variant={1}>
                    Reject
                </ButtonComp>
                </div>
            </div>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default Requests