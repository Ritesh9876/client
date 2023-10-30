import React from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import googleClient from "../GoogleAuth/googleClient.json";
import Login from "./Login";
import "../GoogleAuth/style.css";

export default function GoogleAuth() {
  const googleClientId = googleClient.web.client_id;
  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}
