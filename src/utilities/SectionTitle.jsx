import React from "react";

import "../pages/AboutPage.css";

function SectionTitle({ title, description }) {
  return (
    <div className="about-tsf-header">
      <h1 className="about-tsf__heading">{title}</h1>
      <p className="about-tsf__sub-heading">{description}</p>
    </div>
  );
}

export default SectionTitle;
