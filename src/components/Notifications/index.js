import React,{useEffect, useState} from 'react'
import './notifications.css'
import { Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function Notifications() {
  const [notifications,setNotifications] = useState([])

  const getUserNotification = async () => {
    try {
      axios.get('http://localhost:8081/notification/user/203')
        .then(response => {
          setNotifications(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
    getUserNotification()
  },[])
  return (
    <div className="notifications-container">

      {
        notifications.map((currMsg,msgIndex) => {
          return (
            <div 
            key={"notify" + msgIndex}
            className="d-flex justify-content-between align-items-center notifications-notification-container mt-20">
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.mid-day.com/images/images/2018/feb/Taapsee-Pannu-Red-l.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                <p className="font_16_600 ml-10">{currMsg.message}</p>
              </div>

              <CloseIcon />
            </div>
          )
        })
      }
      {/* {
        [...Array(5)].map((currMsg,msgIndex) => {
          return (
            <div 
            key={"notify" + msgIndex}
            className="d-flex justify-content-between align-items-center notifications-notification-container mt-20">
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.mid-day.com/images/images/2018/feb/Taapsee-Pannu-Red-l.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                <p className="font_16_600 ml-10">You got accepted in team large!</p>
              </div>

              <CloseIcon />
            </div>
          )
        })
      } */}
    </div>
  )
}

export default Notifications