import React from "react";

import "./SecondaryButton.css";

function SecondaryButton({ text, svg }) {
  return (
    <div className="secondary-button">
      {text} {svg}
    </div>
  );
}

export default SecondaryButton;
