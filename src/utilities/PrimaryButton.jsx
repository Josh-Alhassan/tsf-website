import React from "react";

import "./PrimaryButton.css";

function PrimaryButton({ text, svg }) {
  return (
    <div className="primary-button">
      <a className="primary-button__link" href="#">
        {text}
      </a>

      <img className="primary-arr-btn" src={svg} alt="svg arrow icon" />
    </div>
  );
}

export default PrimaryButton;
