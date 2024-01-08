import React, { useEffect, useState } from 'react'
import './teams.css'
import axios from 'axios';
import { Avatar } from '@mui/material'
import ButtonComp from '../../Utils/Components/ButtonComp'

function Teams() {

    const [teamData, setTeamData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
  
      useEffect(() => {
          axios.get('http://localhost:9092/team/1')
              .then(response => {
                  setTeamData(response.data);
                  console.log(response.data);
              })
              .catch(error => {
                  console.error(error);
              });
      }, []);

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

    useEffect(() => {
        axios.get('http://localhost:9092/techstack/team/1')
            .then(response => {
                setSkillsData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
      

    return (
        <div className="teams-main-container">

                        <div 
                        className="team-container">
                <div className="team-header-container">
                    <div >

                        <div className="d-flex mt-30">
                            <Avatar
                                alt={teamData.name}
                                src={teamData.profileImageUrl}
                                sx={{ width: 70, height: 70 }}
                            />

                            <div >
                                <div className="ml-10">
                                    <p className="font_16_600">{teamData.name}</p>

                                    <p className="font_14_400 mt-10">{teamData.bio}</p>

                                </div>

                            </div>

                        </div>
                        <div className="mt-20 pl-10 pr-10">
                            <p className="font_16_600">Description</p>

                            <p className="font_14_400 mt-10">
                            {teamData.description}
                            </p>
                        </div>


                    </div>


                </div>

                <div className="mt-20 pl-10">
                    <ButtonComp color={1} variant={1} >
                        Join Team 
                    </ButtonComp>
                </div>


                <div className="d-flex justiy-content-between ">
                <div
                    className="teams-team-member-container mt-30"
                >
                    <p className="font_20_600 ml-30">Team Members</p>
                    <div className="teams-team-members-container">

                    {usersData.map((data, key)=>{
                        console.log(key);
                    return(
                                    <div
                                        className="teams-team-member-container d-flex align-items-center justify-content-between bg-28 mt-20">
                                        <div className="d-flex align-items-center">
                                            <Avatar
                                                alt={data.user.name}
                                                src={data.user.profileImageUrl}
                                                sx={{ width: 40, height: 40 }}
                                            />

                                            <p className="font_16_600 ml-10">{data.user.name}</p>
                                        </div>
                                        <p className="font_14_400  teams-skills-chip  ml-30">{data.role}</p>
                                    </div>
                            );
                        })}
                        
                    </div>
                </div>
                
                
                <div className="team-skills-container mt-50">
                <p className="font_20_600 ml-30 mb-10">Skills</p>
                {skillsData.map((data, key)=>{
                        console.log(key);
                    return(
                
                        <div className="d-flex flex-wrap">
                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">{data.technology}</p>
                        </div>
                );
            })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Teams