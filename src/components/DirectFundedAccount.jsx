import React from "react";

import leftArrow from "../utilities/arrLeft.svg";
import rightArrow from "../utilities/arrRight.svg";

import "./DirectFundedAccount.css";

function DirectFundedAccount() {
  return (
    <div className="direct-founded-account__container">
      <div className="direct-founded-account__wrapper">
        {/* Left Arrow */}
        <img
          src={leftArrow}
          alt="Left Arrow"
          className="direct-founded-account__wrapper--arr"
        />

        {/* Typography Container */}
        <div className="direct-founded-account__wrapper--typography">
          <h2 className="direct-founded-account__heading">
            Fx Direct Funded Account
          </h2>
          <p className="direct-founded-account__paragraph">
            The Fx Direct Funded Account Package Enables the trader to skip all
            Evaluation Phases and start to trade a live account directly with
            the TSF Responsible trading Policy Applicable to the trading
            condition, The Direct funded Account has an unlimited active
            duration if the trader did not violate any of the given rules and
            condition guiding the account, the trader is entitled to 55% profit
            split on a weekly basis with a minimum 2.5% withdrawable target,
            Daily Drawdown is 4% and total drawdown is 7%
          </p>
        </div>

        <img
          src={rightArrow}
          alt=""
          className="direct-founded-account__wrapper--arr"
        />
      </div>
    </div>
  );
}

export default DirectFundedAccount;
