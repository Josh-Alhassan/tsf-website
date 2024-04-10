import React from "react";

import "./FooterAboutUs.css";

function FooterAboutUs() {
  return (
    <div className="footer__about-us">
      <h3 className="footer__about-us-title">About Us</h3>

      <div className="footer__about-us-lists">
        <li className="footer__about-us--list">Terms & Condition</li>
        <li className="footer__about-us--list">Privacy Policy</li>
        <li className="footer__about-us--list">Models</li>
        <li className="footer__about-us--list">Our Customer</li>
        <li className="footer__about-us--list">Blogs</li>
      </div>
    </div>
  );
}

export default FooterAboutUs;
