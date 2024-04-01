import React from "react";

// import images
import manipulated from "../assets/Manipulated32.png";
import image2 from "../assets/img-2.png";
import image5 from "../utilities/light-spar.svg";
import image6 from "../assets/img-6.png";

// Import Style
import "./WhatIsTSF.css";

const WhatIsTSF = () => {
  return (
    <>
      <div className="what-is-tsf__container section__padding">
        {/* Typography Wrap */}
        <div className="what-is-tsf__typography">
          <h2 className="tsf-typography__heading">What is TSF?</h2>
          <p className="tsf-typography__paragraph">
            Tsf is a platform designed for traders to take their trading career
            to next level so to trade their passion for profit. Imagine putting
            your passion to work and getting rewarded in cash when your strategy
            and styles of trading proves to be successful. We’ve made that
            so-essy! Trade your passion by displaying them by taking any of our
            models of funding and get paid for your time and effort. Most
            traders need real money and bigger capital to take their trading
            career to the next level, which is why we fund you with cash. Here
            we’ll never rush you to meet a target. WHAT ELSE BETTER THAN THAT?
          </p>

          <a href="#" className="tsf-typography__cta">
            So-Essy{" "}
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
          </a>
        </div>

        <img
          src={manipulated}
          alt="Manipulate TSF"
          className="what-is-tsf__img"
        />
      </div>

      {/* Out of flow of page elements */}
      <div className="tsf-img tsf-out-of-flow">
        <img src={image2} alt="" className="tsf-img-2" />
        <img src={image6} alt="" className="tsf-img-6" />
        <img src={image5} alt="" className="tsf-img-5" />
      </div>
    </>
  );
};

export default WhatIsTSF;
