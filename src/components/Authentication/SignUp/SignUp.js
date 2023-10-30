import React, { useEffect, useRef, useState } from "react";
import "../SignUp/style.css";
import Student from "./Student";
import StartUp from "./StartUp";
import BackLogo from "../../../asset/back-button.png";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const studentRef = useRef(null);
  const startupRef = useRef(null);
  const [isStudent, setIsStudent] = useState(true);

  const handleisStudent = (e, currentForm) => {
    if (currentForm === "startup") {
      setIsStudent(false);
      studentRef.current.style.background = "";
      studentRef.current.style.color = "Black";
      startupRef.current.style.background = "#66b2ff";
      startupRef.current.style.color = "white";
    } else {
      studentRef.current.style.background = "#66b2ff";
      studentRef.current.style.color = "white";
      startupRef.current.style.background = "";
      startupRef.current.style.color = "Black";
      setIsStudent(true);
    }
  };
  const handleBack = (e) => {
    setIsStudent(true);
    navigate("/");
  };
  useEffect(() => {
    studentRef.current.style.background = "#66b2ff";
    studentRef.current.style.color = "white";
  }, []);
  return (
    <div className="signup_container">
      <div className="signup_wrapper">
        <div className="signup_header">
          <button
            className="back_btn"
            onClick={(e) => {
              handleBack(e);
            }}
          >
            {`<`}
          </button>
          <h2>Sign Up</h2>
        </div>

        <div className="sign_up_choice">
          <button
            ref={studentRef}
            className="signup-btn "
            onClick={(e) => {
              handleisStudent(e, "student");
            }}
          >
            Student
          </button>
          <button
            ref={startupRef}
            className="signup-btn "
            onClick={(e) => {
              handleisStudent(e, "startup");
            }}
          >
            Start Up
          </button>
        </div>
        {isStudent === true ? (
          <Student isStudent={isStudent} />
        ) : (
          <StartUp isStudent={isStudent} />
        )}
      </div>
    </div>
  );
}
