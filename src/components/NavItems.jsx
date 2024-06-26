import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavItems.css";

// Import Files
import PrimaryButton from "../utilities/PrimaryButton";

// Import SVGS/Images
import Logo from "../assets/logo.png";
import rightArrow from "../utilities/rightArrow.svg";

function NavItems() {
  const location = useLocation();

  // Check if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";
  const btnLabel = "Client Area";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-items">
      <img className="tsf-logo" src={Logo} alt="TSF Brand" />
      {/* onClick={() => setMenuOpen(!menuOpen)} */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="nav-menu">
          <Link to="/" className="nav-menu__link">
            Home
          </Link>
        </li>
        <li className="nav-menu">
          <a href="/#procedure" className="nav-menu__link">
            Procedures
          </a>
        </li>
        <li className="nav-menu">
          <a href="/#model" className="nav-menu__link">
            Model
          </a>
        </li>
        <li className="nav-menu">
          <Link to="/blog-page" className="nav-menu__link">
            Blog
          </Link>
        </li>
        <li className="nav-menu">
          <Link to="/funded-trader" className="nav-menu__link">
            Funded Trader
          </Link>
        </li>
        <li className="nav-menu">
          <Link to="/aboutus" className="nav-menu__link">
            About Us
          </Link>
        </li>
        <li className="nav-menu">
          <a href="/#faq" className="nav-menu__link">
            FAQ
          </a>
        </li>

        <div
          className="cta_mobile"
          style={{ visibility: isHomePage ? "visible" : "hidden" }}
        >
          <Link to="/signin">
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
          </Link>
        </div>
      </ul>

      <div
        className="cta-desktop"
        style={{ visibility: isHomePage ? "visible" : "hidden" }}
      >
        <Link to="/signin">
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
        </Link>
      </div>
    </nav>
  );
}

export default NavItems;
