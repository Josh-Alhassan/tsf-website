import React from "react";

import "./PrimaryButton.css";

function PrimaryButton({ text, svg, url }) {
  return (
    <>
      <a className="primary-button__link" href={url}>
        {text}
        <img className="primary-arr-btn" src={svg} alt="svg arrow icon" />
      </a>
    </>
  );
}

export default PrimaryButton;
