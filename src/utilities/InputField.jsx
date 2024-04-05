import React from "react";
import "./InputField.css";

function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label htmlFor="inputField" className="input__field">
        {label}
      </label>
      <input type={type} placeholder={placeholder} name="inputField" />
    </div>
  );
}

export default InputField;
