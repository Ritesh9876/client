import React from "react";
import { googleLogout } from "@react-oauth/google";
export default function Logout() {
  return <button onClick={googleLogout()}>LogOut</button>;
}
