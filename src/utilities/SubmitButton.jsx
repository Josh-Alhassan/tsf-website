import React from "react";

import "./SubmitButton.css";

function SubmitButton({ text, svg }) {
  return (
    <button className="primary__submit-btn" type="submit">
      {text}
      {svg}
    </button>
  );
}

export default SubmitButton;
