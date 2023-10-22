import React, { useState } from 'react'
import './profileEdit.css'
import { v4 as uuidv4 } from 'uuid';
import TextInput from '../../../CommonComponents/TextInput'
import SelectInputType from '../../../CommonComponents/SelectInput'
import ButtonComp from '../../../../Utils/Components/ButtonComp';
function ProfileEdit() {
  const [experiences, setExperiences] = useState([])

  const addNewExperience = () => {
    let currentExperience = [...experiences]
    currentExperience.push({
      role: "",
      company: "",
      description: ""
    })
    setExperiences(currentExperience)
  }

  const removeExperience = (index) => {
    console.log("working ", index)
    let currentExperience = [...experiences]
    currentExperience.splice(index, 1)
    setExperiences(currentExperience)
  }
  return (
    <div className="profileEdit-container border-ef br-10px pl-30 pt-30 pr-30 pb-30 mt-30 mb-30">

      <div >
        <div className="d-flex w-100">
          <div className="profileEdit-left-inner-container pr-20">
            <p className="font_16_600">About</p>
            <p className="font_14_400 mt-10">Tell us about yourself so that students and startups know who you are </p>
          </div>

          <div className="profileEdit-right-inner-container">

            <div>
              <p className="font_14_600">Name</p>
              <div className="mt-10">
                <TextInput />
              </div>
            </div>

            <div className="mt-30">
              <p className="font_14_600">Select your role</p>

              <div className="mt-10">
                <SelectInputType />
              </div>
            </div>

            <div className="mt-30">
              <p className="font_14_600">Bio</p>

              <div className="mt-10">
                <textarea rows="4" cols="40"></textarea>
              </div>
            </div>
          </div>

        </div>


        <hr className="mt-30" />

        <div className="d-flex w-100 mt-20">
          <div className="profileEdit-left-inner-container">
            <p className="font_14_600">Social Profiles</p>
          </div>


          <div className="profileEdit-right-inner-container">

            <div>
              <p className="font_14_600">Website </p>

              <div className="mt-10">
                <TextInput />
              </div>
            </div>

            <div className="mt-20">
              <p className="font_14_600">LinkedIn </p>

              <div className="mt-10">
                <TextInput />
              </div>
            </div>

            <div className="mt-20">
              <p className="font_14_600">Twitter</p>

              <div className="mt-10">
                <TextInput />
              </div>
            </div>

            <div className="mt-20">
              <p className="font_14_600">Github</p>

              <div className="mt-10">
                <TextInput />
              </div>
            </div>

          </div>

        </div>


        <hr className="mt-30" />


        <div className="d-flex w-100 mt-20">
          <div className="profileEdit-left-inner-container">
            <p className="font_14_600">Experience</p>
          </div>

          <div className="profileEdit-right-inner-container">

            <div>
              {experiences.map((currentExperience, index) => {
                return (
                  <div
                    key={uuidv4()}
                    className="mt-30">

                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font_14_600">Role</p>

                        <div onClick={() => {
                          removeExperience(index)
                        }}>
                          <ButtonComp
                            status={3} >
                            Remove
                          </ButtonComp>
                        </div>
                      </div>

                      <div className="mt-10">
                        <TextInput />
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="font_14_600">Company Name</p>

                      <div className="mt-10">
                        <TextInput />
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="font_14_600">Description</p>

                      <div className="mt-10">
                        <textarea rows="4" cols="40"></textarea>
                      </div>
                    </div>


                  </div>
                )
              })}
            </div>

            <p className="link-color pointer-arrow mt-20" onClick={addNewExperience}>add new Experience</p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProfileEdit