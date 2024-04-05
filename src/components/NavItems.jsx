import React from "react";
// import { Link } from "react-router-dom";

import "./NavItems.css";

// Import Files
import PrimaryButton from "../utilities/PrimaryButton";

// Import SVGS/Images
import Logo from "../assets/logo.png";
import rightArrow from "../utilities/rightArrow.svg";

function NavItems() {
  const btnLabel = "Client Area";

  return (
    <div className="nav-items">
      <img className="tsf-logo" src={Logo} alt="TSF Brand" />

      <ul className="nav-menu-container">
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            Home
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            Procedures
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            Model
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            Blog
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            Funded Trader
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            About Us
          </a>
        </li>
        <li className="nav-menu">
          <a href="#" className="nav-menu__link">
            FAQ
          </a>
        </li>
      </ul>

      <PrimaryButton
        text={btnLabel}
        svg={
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3334 16C29.3334 8.64002 23.36 2.66669 16 2.66669C8.64004 2.66669 2.66671 8.64002 2.66671 16C2.66671 23.36 8.64004 29.3334 16 29.3334C23.36 29.3334 29.3334 23.36 29.3334 16ZM15.96 20.7067C15.76 20.5067 15.6667 20.2534 15.6667 20C15.6667 19.7467 15.76 19.4934 15.96 19.2934L18.2534 17L11.3334 17C10.7867 17 10.3334 16.5467 10.3334 16C10.3334 15.4534 10.7867 15 11.3334 15L18.2534 15L15.96 12.7067C15.5734 12.32 15.5734 11.68 15.96 11.2934C16.3467 10.9067 16.9867 10.9067 17.3734 11.2934L21.3734 15.2934C21.76 15.68 21.76 16.32 21.3734 16.7067L17.3734 20.7067C16.9867 21.0934 16.3467 21.0934 15.96 20.7067Z"
              fill="white"
            />
          </svg>
        }
      />
    </div>
  );
}

export default NavItems;
