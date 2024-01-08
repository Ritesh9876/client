import React from "react";
import Button from "@mui/material/Button";
import "./buttonComp.css";
// import { styled } from "@mui/material/styles";

export default function ButtonComp(props) {
  return (
    <Button
    {...props}
    color = {props.color===1 ? "success": props.color===2 ? "secondary":props.color===3 ? "error":""}
    variant={props.variant===1 ? "outlined" : "contained"}
    size = {props.size===1 ? "small" : props.size===2 ? "medium" : props.size ===3 ? "large":"medium"}
    >
      {props.children}
    </Button>
  );
}