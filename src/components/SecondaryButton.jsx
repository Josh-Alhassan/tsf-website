import React from "react";

import "./SecondaryButton.css";

function SecondaryButton({ text, svg, url, onClickFunc }) {
  return (
    <a className="secondary-button" href={url} onClick={onClickFunc}>
      {text} {svg}
    </a>
  );
}

export default SecondaryButton;
