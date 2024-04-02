import React from "react";

import linearLine from "../utilities/Line-4.svg";

import "./ModelPricing.css";

function ModelPricing() {
  return (
    <div className="section__padding model-pricing__section">
      <div className="model-pricing__typography">
        <h2 className="model-pricing__typography--heading">
          Our Models & Pricing
        </h2>
        <p className="model-pricing__typography--paragraph">
          Traders Support Funds offers multiple models to its traders , so they
          can enjoy the benefits of trading in every way possible. You can
          choose model/package according to your trading expertise.
        </p>
      </div>

      {/* Linear Line */}
      <img src={linearLine} alt="Linear Line" className="model-pricing__line" />

      {/* Model Pricing Menu */}

      <ul className="model-pricing__menus">
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>
        </li>
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX One-Phase Evaluation
          </a>
        </li>
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>{" "}
        </li>
        <li className="model-pricing__menu">
          {" "}
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>{" "}
        </li>
      </ul>

      {/* Linear Line */}
      <img src={linearLine} alt="Linear Line" className="model-pricing__line" />

      {/* MOdel Pricing Tiers */}
      <div className="model-pricing__tiers">MODEL PRICING TIERS</div>
    </div>
  );
}

export default ModelPricing;
