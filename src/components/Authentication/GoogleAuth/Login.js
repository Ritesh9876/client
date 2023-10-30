import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../GoogleAuth/style.css";
import { useAuthentication } from "../../../context/AuthenticationContext";
export default function Login() {
  const { authenticationState, authenticationDispatch } = useAuthentication();
  const onSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    authenticationDispatch({
      type: "google_data",
      payload: {
        name: decoded.name,
        email: decoded.email,
      },
    });
    // console.log(decoded);
    // console.log(authenticationState);
  };
  const onError = () => {
    console.log("Login Failed");
  };
  return (
    <div className="google-login-btn">
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}
