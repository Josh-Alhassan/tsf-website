import React from "react";

import "./SecondaryButton.css";

function SecondaryButton({ text, svg, url }) {
  return (
    <a className="secondary-button" href={url}>
      {text} {svg}
    </a>
  );
}

export default SecondaryButton;
