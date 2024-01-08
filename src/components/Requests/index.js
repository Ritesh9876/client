import React, { useEffect, useState } from 'react'
import './requests.css'
import axios from 'axios';
import { Avatar } from '@mui/material'
import ButtonComp from '../../Utils/Components/ButtonComp'

function Requests() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9092/team-user/team/1')
        .then(response => {
            setUsersData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  }, []);


  return (
    <div className="requests-container">
            {usersData.map((data, key)=>{
                        console.log(key);
                    return(
            <div 
            className="d-flex justify-content-between align-items-center notifications-notification-container mt-20">
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Remy Sharp"
                  src={data.user.profileImageUrl}
                  sx={{ width: 50, height: 50 }}
                />
                <div className="ml-10">
                <p className="font_16_600">{data.user.name}</p>
                <p className="font_12_600">Requested for {data.team.name}</p>

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
          );
        })}
    </div>
  )
}

export default Requests