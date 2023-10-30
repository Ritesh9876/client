import React from "react";
import FormInput from "../FormInput";
import { useAuthentication } from "../../../context/AuthenticationContext";
export default function StartUp() {
  const { authenticationState, authenticationDispatch } = useAuthentication();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const entry of formData.entries()) {
      console.log(entry);
      authenticationDispatch({
        type: "signup_startup",
        payload: { label: entry[0], value: entry[1] },
      });
    }
    console.log(authenticationState);
  };
  return (
    <div className="startup_container">
      <div className="startup_wrapper">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div>
            <ul className="startup_main_content">
              <li>
                <FormInput
                  Label="Company Name"
                  placeholder=""
                  type="text"
                  name="companyName"
                />
              </li>
              <li>
                <FormInput
                  Label="Location"
                  placeholder=""
                  type="text"
                  name="location"
                />
              </li>
              <li>
                <FormInput
                  Label="No of Employee"
                  placeholder=""
                  type="number"
                  name="numberOfEmployee"
                />
              </li>
              <li>
                <FormInput
                  Label="Company Type"
                  placeholder=""
                  type="text"
                  name="companyType"
                />
              </li>
              <li>
                <FormInput
                  Label="LinkedIn Profile"
                  placeholder=""
                  type="text"
                  name="linkedinProfile"
                />
              </li>
              <li>
                <FormInput
                  Label="Founder Name"
                  placeholder=""
                  type="text"
                  name="founderName"
                />
              </li>
            </ul>
          </div>
          <div className="startup_footer">
            <button className="student_btn signup-btn ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
