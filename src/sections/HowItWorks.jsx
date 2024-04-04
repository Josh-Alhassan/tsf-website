import React from "react";

import horizontalLine from "../utilities/Line-4.svg";
import step1 from "../assets/step-1.png";
import step2 from "../assets/step-2.png";
import step3 from "../assets/step-3.png";

import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works section__padding">
      <h2 className="how-it-works__heading">How This Works</h2>

      <img
        src={horizontalLine}
        alt="Colored Horizontal Line"
        className="how-it-works__img"
      />

      {/* How it works steps */}
      <div className="how-it-works__steps">
        {/* Step 1 */}
        <div className="how-it-works__step">
          {/* Skewed Container */}
          <div className="skewed-wrapper">
            <div className="skewed-wrapper__text">
              <img
                src={step1}
                alt="Step One"
                className="skewed-wrapper__text-step"
              />
            </div>
          </div>

          <div className="how-it-work__step--typography">
            <h3 className="step__typography--heading">Choose</h3>
            <p className="step__typography--paragraph">
              Choose Your Funding Model.
            </p>
          </div>
        </div>
        {/* TEST */}
        <img
          src={horizontalLine}
          alt="Colored Horizontal Line"
          className="how-it-works__img--alt"
        />

        {/* Step 2 */}
        <div className="how-it-works__step">
          {/* Skewed Container */}
          <div className="skewed-wrapper">
            <div className="skewed-wrapper__text">
              <img
                src={step2}
                alt="Step Two"
                className="skewed-wrapper__text-step"
              />
            </div>
          </div>

          <div className="how-it-work__step--typography">
            <h3 className="step__typography--heading">Trade</h3>
            <p className="step__typography--paragraph">
              Be consistent & prove yourself.
            </p>
          </div>
        </div>

        <img
          src={horizontalLine}
          alt="Colored Horizontal Line"
          className="how-it-works__img--alt"
        />

        {/* Step 3 */}
        <div className="how-it-works__step">
          {/* Skewed Container */}
          <div className="skewed-wrapper">
            <div className="skewed-wrapper__text">
              <img
                src={step3}
                alt="Step Three"
                className="skewed-wrapper__text-step"
              />
            </div>
          </div>

          <div className="how-it-work__step--typography">
            <h3 className="step__typography--heading">Get funded</h3>
            <p className="step__typography--paragraph">
              Earn as a certified funded trader.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <img
        src={horizontalLine}
        alt="Colored Horizontal Line"
        className="how-it-works__img"
      />
    </div>
  );
}

export default HowItWorks;
