import React from "react";

import "./SubmitButton.css";

function SubmitButton({ text, svg, onClickFunc }) {
  return (
    <button className="primary__submit-btn" type="submit" onClick={onClickFunc}>
      {text}
      {svg}
    </button>
  );
}

export default SubmitButton;
