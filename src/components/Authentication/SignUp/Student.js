import React, { useEffect } from "react";
import "../SignUp/style.css";
import FormInput from "../FormInput";
import { useAuthentication } from "../../../context/AuthenticationContext";
export default function Student({ isStudent }) {
  const { authenticationState, authenticationDispatch } = useAuthentication();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const entry of formData.entries()) {
      console.log(entry);
      authenticationDispatch({
        type: "signup_student",
        payload: { label: entry[0], value: entry[1] },
      });
    }
    console.log(authenticationState);
  };
  return (
    <div className="student_container">
      <div className="student_wrapper">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div>
            <ul className="student_main_content">
              <li>
                <FormInput
                  Label="First Name"
                  placeholder=""
                  type="text"
                  name="firstName"
                />
              </li>
              <li>
                <FormInput
                  Label="Last Name"
                  placeholder=""
                  type="text"
                  name="lastName"
                />
              </li>
              <li>
                <FormInput
                  Label="College"
                  placeholder=""
                  type="text"
                  name="college"
                />
              </li>
              <li>
                <FormInput
                  Label="Degree"
                  placeholder=""
                  type="text"
                  name="degree"
                />
              </li>
              <li>
                <FormInput
                  Label="Mobile No"
                  placeholder=""
                  type="text"
                  name="mobileNo"
                />
              </li>
              <li>
                <FormInput
                  Label="Email"
                  placeholder=""
                  type="text"
                  name="email"
                />
              </li>
              <li>
                <FormInput
                  Label="Github Profile"
                  placeholder=""
                  type="text"
                  name="githubProfile"
                />
              </li>
              <li>
                <FormInput
                  Label="Linkedin Profile"
                  placeholder=""
                  type="text"
                  name="linkedinProfile"
                />
              </li>
            </ul>
          </div>
          <div className="student_footer">
            <button className=" signup-btn ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
