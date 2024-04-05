import React from "react";
import NavItems from "../components/NavItems";

import "./Registration.css";
import InputField from "../utilities/InputField";
import SubmitButton from "../utilities/SubmitButton";
import Footer from "../sections/Footer";
import FlowOfPage from "../components/FlowOfPage";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <>
      <NavItems />
      <div className="registration__container section__padding">
        <div className="registration__typography">
          <h2 className="registration__typography--heading">Registration</h2>
          <p className="registration__typography--paragraph">
            Already Have an account{" "}
            <Link className="registration__link" to="/signin">
              Sign In
            </Link>
          </p>
        </div>

        {/* Form */}
        <form action="" className="registration__form">
          <div className="registration__input--grid">
            <InputField type="text" placeholder="firstname" />
            <InputField type="text" placeholder="lastname" />
            <InputField type="text" placeholder="username" />
            <InputField type="text" placeholder="Email Address" />
            <InputField type="text" placeholder="Country" />
            <InputField type="text" placeholder="Phone" />
            <InputField type="password" placeholder="Password" />
            <InputField type="password" placeholder="Confirm Password" />
          </div>
          <div className="registration__policies">
            <div className="registration__terms-condition">
              {/* SVG START*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <circle
                  cx="10.5"
                  cy="10"
                  r="8"
                  fill="url(#paint0_linear_109_71)"
                  stroke="#090821"
                  stroke-width="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_109_71"
                    x1="10.2943"
                    y1="-0.535715"
                    x2="20.6937"
                    y2="37.3905"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.279473" stop-color="#0076FC" />
                    <stop offset="1" stop-color="#102595" />
                  </linearGradient>
                </defs>
              </svg>
              {/* SVG END */}
              <p className="registration__agreement-text">
                I agree to the terms and{" "}
                <span className="agreement-text--alt">
                  {" "}
                  conditions & privacy policies{" "}
                </span>
              </p>
            </div>
            <SubmitButton
              text="Let’s get started"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M15.1665 8.00001C15.1665 4.32001 12.1798 1.33334 8.49984 1.33334C4.81984 1.33334 1.83317 4.32001 1.83317 8.00001C1.83317 11.68 4.81984 14.6667 8.49984 14.6667C12.1798 14.6667 15.1665 11.68 15.1665 8.00001ZM8.47984 10.3533C8.37984 10.2533 8.33317 10.1267 8.33317 10C8.33317 9.87334 8.37984 9.74668 8.47984 9.64668L9.6265 8.50001L6.1665 8.50001C5.89317 8.50001 5.6665 8.27334 5.6665 8.00001C5.6665 7.72668 5.89317 7.50001 6.1665 7.50001L9.6265 7.50001L8.47984 6.35334C8.2865 6.16001 8.2865 5.84001 8.47984 5.64668C8.67317 5.45334 8.99317 5.45334 9.1865 5.64668L11.1865 7.64668C11.3798 7.84001 11.3798 8.16001 11.1865 8.35334L9.1865 10.3533C8.99317 10.5467 8.67317 10.5467 8.47984 10.3533Z"
                    fill="white"
                  />
                </svg>
              }
            />
            <p className="registration__copyright">
              © 2023 All Rights Reserved. Traders Support Funds All rights
              reserved.
            </p>
          </div>
        </form>
      </div>
      <FlowOfPage />
      <Footer />
    </>
  );
}

export default Registration;
