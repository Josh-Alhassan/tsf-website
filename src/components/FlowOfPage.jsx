import React from "react";
import "./FlowOfPage.css";

import lightGlow from "../assets/Light-Glow.png";
import image2 from "../assets/img-6.png";
import image3 from "../assets/img-2.png";

function FlowOfPage() {
  return (
    <div className="sign-in__out-of-page-flow">
      <img src={lightGlow} alt="Light glow" className="sign-in__img" />
      <img src={image2} alt="Trade matrix" className="sign-in__img--2" />
      <img src={image3} alt="" className="sign-in__img--3" />
    </div>
  );
}

export default FlowOfPage;
