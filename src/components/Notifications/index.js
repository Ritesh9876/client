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
          console.log(response.data)
          setNotifications(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUserNotification = async (id,index) => {
    try {
      
      axios.delete(`http://localhost:8081/notification/delete/${id}`)
        .then(response => {
          console.log("this is delete response ",response)
          let currentNotification = [...notifications]
          currentNotification.splice(index,1)
          setNotifications(currentNotification)
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

              <div 
              onClick={() =>{
                deleteUserNotification(currMsg.id,msgIndex)
              }}
              >
              <CloseIcon />
              </div>
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