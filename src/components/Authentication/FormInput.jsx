import React from "react";

export default function FormInput(props) {
  const { Label, placeholder, type, name } = props;
  return (
    <div
      className="formInput"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <label htmlFor="">{Label}</label>
      <input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
}
