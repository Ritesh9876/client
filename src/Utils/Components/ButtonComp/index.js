import React from "react";
import Button from "@mui/material/Button";
import "./buttonComp.css";
// import { styled } from "@mui/material/styles";

export default function ButtonComp(props) {
  return (
    <Button
      className={`button_global ${
        !props.status
          ? "primary color-white"
          : props.status === 1
          ? "primary color-white"
          : props.status === 2
          ? "secondary"
          : props.status === 3
          ? "tertiary"
          : props.status === 4
          ? "quaternary"
          : ""
      } ${props.color === "r" ? "color-red" : ""} ${
        props.size === "lg" ? "lg" : props.size === "xl" ? "xl" : ""
      } ${props.width === "lg" ? "width_lg" : ""} ${props.className}`}
      
    //   sx={{
    //     position: "relative",
    //     overflow: "hidden",
    //     transform: "translate3d(0, 0, 0)",
    //     "&::after": {
    //       content: '""',
    //       position: "absolute",
    //       borderRadius: "50%",
    //       backgroundColor: "rgba(255, 255, 255, 0.4)",
    //       transform: "scale(0)",
    //       pointerEvents: "none",
    //       animation: "rippleEffect 0.1s linear",
    //     },
    //     "&:active::after": {
    //       transform: "scale(4)",
    //       opacity: 0,
    //     },
    //     "@keyframes rippleEffect": {
    //       to: {
    //         transform: "scale(4)",
    //         opacity: 0,
    //       },
    //     },
    //   }}
    //  size={props.size}
    >
      {props.children}
    </Button>
  );
}