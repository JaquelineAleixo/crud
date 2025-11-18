import React, { useState } from "react";
import "./PasswordField.css";
import { SlEye } from "react-icons/sl";
import { PiEyeClosedLight } from "react-icons/pi";

function PasswordField({ name, value, onChange, placeholder = "Senha" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-input-wrapper">
      <input
        type={visible ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="password-input"
      />

      <button
        type="button"
        className="password-toggle"
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? <PiEyeClosedLight /> : <SlEye />}
      </button>
    </div>
  );
}

export default PasswordField;