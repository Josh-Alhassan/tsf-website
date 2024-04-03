import React from "react";

import "./PrimaryButton.css";

function PrimaryButton({ text, svg, url }) {
  return (
    <>
      <a href={url} className="tsf-typography__cta">
        {text}
        {svg}
      </a>
    </>
  );
}

export default PrimaryButton;
