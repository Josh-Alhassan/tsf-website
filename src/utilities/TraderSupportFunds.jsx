import React from "react";

import "../components/Header.css";

import starRating from "../utilities/Star-2.svg";
import starGroupRate from "../utilities/Group -8.svg";

function TraderSupportFunds() {
  return (
    <div className="header__trader-support-funds">
      {/* First Container */}
      <div className="tsf-heading__primary">
        Trader <br /> Support <br /> Funds
      </div>

      {/* Second Container */}
      <div className="tsf-heading__secondary">
        <h2 className="tsf-heading__secondary--heading">
          Trader Support Funds is the fastest evolving proprietary trading firm.
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
  );
}

export default TraderSupportFunds;
