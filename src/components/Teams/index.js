import React from 'react'
import './teams.css'
import { Avatar } from '@mui/material'
import ButtonComp from '../../Utils/Components/ButtonComp'

function Teams() {
    return (
        <div className="teams-main-container">

            {
                [...Array(6)].map((currentTeam,teamIndex) =>{
                    return (
                        <div 
                        key={"team-startup"+teamIndex}
                        className="team-container  mt-50">
                <div className="team-header-container">
                    <div >

                        <div className="d-flex mt-30">
                            <Avatar
                                alt="Remy Sharp"
                                src="https://images.mid-day.com/images/images/2018/feb/Taapsee-Pannu-Red-l.jpg"
                                sx={{ width: 70, height: 70 }}
                            />

                            <div >
                                <div className="ml-10">
                                    <p className="font_16_600">Team X</p>

                                    <p className="font_14_400 mt-10">We are awesome team which work at california</p>

                                </div>

                            </div>

                        </div>
                        <div className="mt-20 pl-10 pr-10">
                            <p className="font_16_600">Description</p>

                            <p className="font_14_400 mt-10">
                                Space Exploration Technologies Corp., commonly referred to as SpaceX, is an American spacecraft manufacturer, launch service provider, defense contractor and satellite communications company headquartered in Hawthorne, California
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
                    <p className="font_20_600">Team Members</p>
                    <div className="teams-team-members-container">
                        {
                            [...Array(6)].map((currMember, memberIndex) => {
                                return (
                                    <div
                                        key={"Members " + memberIndex}
                                        className="teams-team-member-container d-flex align-items-center justify-content-between bg-28 mt-20">
                                        <div className="d-flex align-items-center">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://qph.cf2.quoracdn.net/main-qimg-fcb478cfe3bd2e68cf33c691ad75b3dd-lq"
                                                sx={{ width: 40, height: 40 }}
                                            />

                                            <p className="font_16_600 ml-10">Jack Sparrow</p>
                                        </div>
                                        <p className="font_14_400  teams-skills-chip  ml-30">Admin</p>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                

                <div className="team-skills-container mt-50">
                        <div className="d-flex flex-wrap mt-30">

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Mongodb</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Ruby</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">React</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Node</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Python</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Javascript</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Scala</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Mongodb</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Ruby</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">React</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Node</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Python</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Javascript</p>

                            <p className="font_14_400 teams-skills-chip ml-10 mt-10">Scala</p>
                        </div>

                    </div>

                </div>
            </div>
                    )
                })
            }
        </div>
    )
}

export default Teams