import React, { useReducer } from "react";
import './Login.css'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import FormInput from "../FormInput";
import { useAuthentication } from "../../../context/AuthenticationContext"
export default function Login() {
  const { authenticationState, authenticationDispatch } = useAuthentication();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const entry of formData.entries()) {
      authenticationDispatch({
        type: "login",
        payload: { label: entry[0], value: entry[1] },
      });
    }
    console.log("login data ", authenticationState);
  };

  return (
    <div className="Login_Container">
      <div className="Login_Wrapper">
        <form action="#" onSubmit={(e) => onSubmit(e)}>
          <div className="Login-main-content">
            <h1>Login Form</h1>
            <FormInput
              Label="User Name"
              placeholder=""
              type="text"
              name="username"
            />
            <FormInput
              Label="Password"
              placeholder=""
              type="password"
              name="password"
            />
            <p>
              Don't have any account ? <a href="/signup">Sign Up</a>
            </p>
          </div>

          <div className="footer">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="google-auth">
          <p>Or</p>
          <div>
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
}
