import React from "react";

import "./Header.css";

// Image Imports
import asset1 from "../assets/img-1.png";
import starRating from "../utilities/Star-2.svg";
import starGroupRate from "../utilities/Group -8.svg";
import lightGlow from "../assets/Light-Glow.png";
import lightGlowMobile from "../assets/Light-Glow-mobile.png";
import TraderSupportFunds from "../utilities/TraderSupportFunds";

function Header() {
  return (
    <div className="section__padding header">
      <div className="header__container">
        <div className="header__typographies">
          <h1 className="header__heading">
            Trade with trust <br />
            and Security
          </h1>
          <p className="header__paragraph">
            Most effective way to be a profitable forex trader, Trade up to
            $200k funded account to earn as much as 90% profit split with 125%
            refundable fee only at Trader Support Funds
          </p>
        </div>
        <img className="header__image" src={asset1} alt="Trade Signal" />
      </div>

      <TraderSupportFunds />

      {/* Out of Page Flow Elements */}
      <img className="light-glow" src={lightGlow} alt="Light Glow" />
      <img src={lightGlowMobile} alt="" className="light-glow-mobile" />
    </div>
  );
}

export default Header;
