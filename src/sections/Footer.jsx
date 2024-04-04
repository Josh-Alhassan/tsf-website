import React from "react";
import FooterContact from "../components/FooterContact";

import "./Footer.css";
import FooterAboutUs from "../components/FooterAboutUs";
import FooterTrade from "../components/FooterTrade";
import FooterSubscribe from "../components/FooterSubscribe";

function Footer() {
  return (
    <div className="footer__section section__padding">
      <div className="footer__section-components">
        <FooterContact />
        <FooterAboutUs />
        <FooterTrade />
        <FooterSubscribe />
      </div>
      <div className="footer__section-trademark">
        <h3 className="footer__section-trademark--title">
          2023 © Traders Support Funds. Designed for Traders by Traders
        </h3>
        <p className="footer__section-trademark--paragraph">
          Traders Support Funds does not directly solicit customers from Canada.
          People who register for our programs do so at their own volition.
          Traders Support Funds does not take into consideration your personal
          financial situation. If you require financial advice, it is
          recommended that you speak to a financial adviser or licensed
          professional. Traders Support Funds does not act as or conduct
          services as a broker. Traders Support Funds does not act as or conduct
          services as a custodian. Purchases of programs should not be
          considered deposits. All program fees are used for operation costs
          including, but not limited to, staff, technology and other business
          related expenses. Information on this site is not directed at
          residents in any country or jurisdiction where such distribution or
          use would be contrary to local law or regulation.
        </p>
      </div>
    </div>
  );
}

export default Footer;
