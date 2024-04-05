import React from "react";
import "./InputField.css";

function InputField({ label, type }) {
  return (
    <div>
      <label htmlFor="inputField" className="input__field">
        {label}
      </label>
      <input type="text" placeholder="First Name" name="inputField" />
    </div>
  );
}

export default InputField;
