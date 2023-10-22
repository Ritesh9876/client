import React, { useState } from 'react'
import './profileEdit.css'
import TextInput from '../../../CommonComponents/TextInput'
import SelectInputType from '../../../CommonComponents/SelectInput'
function ProfileEdit() {
  const [experiences,setExperiences]=useState([])
  
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

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProfileEdit