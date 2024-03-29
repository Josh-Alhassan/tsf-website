import React from "react";

import "./Header.css";

// Image Imports
import asset1 from "../assets/img-1.png";
import starRating from "../utilities/Star-2.svg";
import starGroupRate from "../utilities/Group -8.svg";
import elipse9 from "../utilities/ellipse-9.svg";
import elipse10 from "../utilities/elipse-10.svg";

function Header() {
  return (
    <div className="section__padding header">
      <div className="header__container">
        <div className="header__typographies">
          <h1 className="header__heading">Trade with trust and Security</h1>
          <p className="header__paragraph">
            Most effective way to be a profitable forex trader, Trade up to
            $200k funded account to earn as much as 90% profit split with 125%
            refundable fee only at Trader Support Funds
          </p>
        </div>
        <div className="header__image">
          <img src={asset1} alt="Trade Signal" />
        </div>
      </div>

      <div className="header__trader-support-funds">
        {/* First Container */}
        <div className="tsf-heading__primary">Trader Support Funds</div>

        {/* Second Container */}
        <div className="tsf-heading__secondary">
          <h2 className="tsf-heading__secondary--heading">
            Trader Support Funds is the fastest evolving proprietary trading
            firm.
          </h2>
          <p className="tsf-heading__secondary--paragraph">
            Established in 2020 - United Arab Emirate
          </p>
        </div>

        {/* Third container - Trust Pilot Rating */}
        <div className="tsf-trust__pilot-rating">
          <div className="trust-pilot__rating">
            <img src={starRating} alt="Star Rating Icon" />
            <p className="rate__title">Trustpilot</p>
          </div>
          {/* SVG ICONS */}
          <img src={starGroupRate} alt="5 Star Rating" />
          {/* Test Score */}
          <p className="trust-pilot__score">TrustScore 4.7 | 400 Reviews</p>
        </div>
      </div>

      {/* Out of Page Flow Elements */}
      <div className="elipse-shape-container">
        {/* <img className="elipse-9" src={elipse9} alt="Ninth Elipse shape" /> */}
        <img src={elipse10} alt="10th Elipse Shape" />
      </div>
    </div>
  );
}

export default Header;
