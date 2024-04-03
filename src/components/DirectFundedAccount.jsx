import React from "react";

import leftArrow from "../utilities/arrLeft.svg";
import rightArrow from "../utilities/arrRight.svg";

import "./DirectFundedAccount.css";
import PrimaryButton from "../utilities/PrimaryButton";
import SecondaryButton from "./SecondaryButton";

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

      {/* Out of flow of page */}
      <div className="direct-founded-account__mobile-btns">
        <img
          src={leftArrow}
          alt="Left Arrow"
          className="direct-founded-account__wrapper--btn"
        />
        <img
          src={rightArrow}
          alt=""
          className="direct-founded-account__wrapper--btn"
        />
      </div>

      {/* Rounded Circle */}
      <div className="direct-founded-account__buttons">
        <SecondaryButton
          text="FX Direct Funded Account"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                d="M9.30881 0.76145C9.07326 0.520414 8.79191 0.328886 8.48128 0.198123C8.17066 0.0673606 7.83703 0 7.5 0C7.16297 0 6.82934 0.0673606 6.51872 0.198123C6.20809 0.328886 5.92674 0.520414 5.69119 0.76145L5.14689 1.31972L4.36806 1.3101C4.03093 1.30611 3.69641 1.36956 3.38417 1.49673C3.07192 1.6239 2.78826 1.81221 2.54985 2.0506C2.31145 2.28899 2.12313 2.57263 1.99595 2.88486C1.86877 3.19709 1.80531 3.53159 1.8093 3.86869L1.81805 4.64747L1.2615 5.19174C1.02045 5.42728 0.828907 5.70861 0.698136 6.01922C0.567365 6.32982 0.5 6.66343 0.5 7.00044C0.5 7.33745 0.567365 7.67105 0.698136 7.98166C0.828907 8.29226 1.02045 8.5736 1.2615 8.80913L1.81893 9.3534L1.8093 10.1322C1.80531 10.4693 1.86877 10.8038 1.99595 11.116C2.12313 11.4282 2.31145 11.7119 2.54985 11.9503C2.78826 12.1887 3.07192 12.377 3.38417 12.5041C3.69641 12.6313 4.03093 12.6948 4.36806 12.6908L5.14689 12.682L5.69119 13.2386C5.92674 13.4796 6.20809 13.6711 6.51872 13.8019C6.82934 13.9326 7.16297 14 7.5 14C7.83703 14 8.17066 13.9326 8.48128 13.8019C8.79191 13.6711 9.07326 13.4796 9.30881 13.2386L9.85311 12.6812L10.6319 12.6908C10.9691 12.6948 11.3036 12.6313 11.6158 12.5041C11.9281 12.377 12.2117 12.1887 12.4501 11.9503C12.6885 11.7119 12.8769 11.4282 13.0041 11.116C13.1312 10.8038 13.1947 10.4693 13.1907 10.1322L13.1819 9.3534L13.7385 8.80913C13.9796 8.5736 14.1711 8.29226 14.3019 7.98166C14.4326 7.67105 14.5 7.33745 14.5 7.00044C14.5 6.66343 14.4326 6.32982 14.3019 6.01922C14.1711 5.70861 13.9796 5.42728 13.7385 5.19174L13.1811 4.64747L13.1907 3.86869C13.1947 3.53159 13.1312 3.19709 13.0041 2.88486C12.8769 2.57263 12.6885 2.28899 12.4501 2.0506C12.2117 1.81221 11.9281 1.6239 11.6158 1.49673C11.3036 1.36956 10.9691 1.30611 10.6319 1.3101L9.85311 1.31885L9.30881 0.76145ZM9.55996 5.99765L6.93469 8.62275C6.89405 8.66349 6.84577 8.69582 6.79261 8.71788C6.73945 8.73993 6.68246 8.75129 6.62491 8.75129C6.56736 8.75129 6.51037 8.73993 6.45722 8.71788C6.40406 8.69582 6.35577 8.66349 6.31513 8.62275L5.0025 7.3102C4.96182 7.26952 4.92955 7.22123 4.90753 7.16808C4.88551 7.11493 4.87418 7.05797 4.87418 7.00044C4.87418 6.94291 4.88551 6.88594 4.90753 6.8328C4.92955 6.77965 4.96182 6.73135 5.0025 6.69068C5.04318 6.65 5.09148 6.61773 5.14463 6.59571C5.19778 6.5737 5.25475 6.56237 5.31228 6.56237C5.36981 6.56237 5.42678 6.5737 5.47993 6.59571C5.53308 6.61773 5.58138 6.65 5.62206 6.69068L6.62491 7.69434L8.94039 5.37813C9.02255 5.29597 9.13399 5.24982 9.25018 5.24982C9.36637 5.24982 9.4778 5.29597 9.55996 5.37813C9.64212 5.46028 9.68827 5.5717 9.68827 5.68789C9.68827 5.80407 9.64212 5.9155 9.55996 5.99765Z"
                fill="white"
              />
            </svg>
          }
        />

        {/* <SecondaryButton text="FX Direct Funded Account" /> */}
        <SecondaryButton text="FX Two-Phase Evaluation" />
        <SecondaryButton text="FOREX COMPETITION" />
        <SecondaryButton text="Deriv Sythentics Competition " />
        <SecondaryButton text="Kwakol Synthetic Competition" />
        <SecondaryButton text="FX EAs Competition" />
        <SecondaryButton text="Synthetics EAs Competition" />
        <SecondaryButton text="FX One-Phase Evaluation" />
        <SecondaryButton text="Deriv Synthetics Two Phase Evaluation" />
        <SecondaryButton text="Kwakol Synthetics Two Phase Evaluation" />
        <SecondaryButton text="EA-FX Two Phase Evaluation" />
        <SecondaryButton text="Lots Generation Competition" />

        {/* <SecondaryButton text="Just Test" svg={} /> */}
      </div>
    </div>
  );
}

export default DirectFundedAccount;
