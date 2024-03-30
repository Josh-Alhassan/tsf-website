import React from "react";

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

      <nav className="nav-menus">
        <ul>
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
      </nav>

      <PrimaryButton text={btnLabel} svg={rightArrow} />
    </div>
  );
}

export default NavItems;
