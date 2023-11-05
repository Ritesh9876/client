import React, { useEffect, useState } from 'react'
import './profileOverview.css'
import axios from 'axios';

function ProfileOverview() {

  const [userData, setUserData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/user/203')
            .then(response => {
                setUserData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
      axios.get('http://localhost:8081/experience/user/203')
          .then(response => {
            setExperienceData(response.data);
              console.log(response.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8081/education/user/203')
        .then(response => {
          setEducationData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, []);

useEffect(() => {
  axios.get('http://localhost:8081/skill/user/203')
      .then(response => {
        setSkillsData(response.data);
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
}, []);


  return (
    
    <div className="profileOverview-container border-ef br-10px pl-30 pt-30 pr-30 pb-30 mt-30 mb-30">

      <div className="d-flex">
        <div className="profileOverview-profile-img-card bg-76">
              <img src="" alt=""/>
        </div>

        <div className="ml-20 mt-20">
          <p className="font_16_600">{userData.name}</p>
          <p className="font_12_400">{userData.designation}</p>
        </div>

      </div>
      

      <div className="mt-50">
           <p className="font_16_600">Bio</p>

           <p className="font_12_400 mt-10">
           {userData.bio}
           </p>
        </div>
      
      
        <div className="mt-50">
          <p className="font_16_600">Experience</p>

          <div className="title">
                {experienceData.map((data, key)=>{
                        console.log(key);
                    return(
                      <div className="mt-30">

                      <div className="d-flex ">
          
                        <div className="profileOverview-company-logo-cont">
                            <img src="" alt="" />
                        </div>
          
                        <div className="ml-20">   
                            <p className="font_14_600">{data.designation}</p>
          
                            <p className="font_12_400">{data.company}</p>
          
                            <p className="font_12_400">{data.fromDate} - {data.toDate}</p>
                        </div>
          
          
                      </div>
          
                      <div className="mt-20">
                        {data.description}
                      </div>
          
                    </div>
                    );
                })} 

          </div>
        </div>



        <div className="mt-50">
            <p className="font_16_600">Eduction</p>

            <div className="title">
                {educationData.map((data, key)=>{
                        console.log(key);
                    return(
            <div className="mt-30">
              <p className="font_14_400">{data.universityName}</p>

              <p className="font_12_400">{data.degree}</p>

              <p className="font_12_400">{data.fromDate} - {data.toDate}</p>
            </div>
              );
            })} 

          </div>
        </div>



        <div className="mt-50">
            <p className="font_16_600">Skills</p>
            
            <div className="d-flex flex-wrap mt-30">

            
                {skillsData.map((data, key)=>{
                        console.log(key);
                    return(

                <p className="font_14_400 profileOverview-skill-chip">{data.skillName}</p>
                );
              })} 
  
           
                
            </div>
            
        </div>

    </div>
  )
}

export default ProfileOverview