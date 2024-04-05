import React from "react";

import "./SignInAccount.css";
import InputField from "../utilities/InputField";
import SecondaryButton from "./SecondaryButton";
import SubmitButton from "../utilities/SubmitButton";

function SignInAccount() {
  return (
    <div className="sign-in__account-container">
      <form className="sign-in__account">
        {/* Typography */}
        <div className="sign-in__account--typography">
          <h3 className="sign-in__account--title">Sign In to Start Trading</h3>
          <p className="sign-in__account--paragraph">
            Log in to your account to continue.
          </p>
        </div>

        {/* SIgn-in Input */}
        <div className="sign-in__account--form">
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="password" />
          <a href="#" className="sigin-in__account--forgot-password">
            Forget Password
          </a>
        </div>

        {/* Button */}
        <SubmitButton
          text="Log in"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.6667 8C14.6667 4.32 11.6801 1.33333 8.00008 1.33333C4.32008 1.33333 1.33341 4.31999 1.33341 7.99999C1.33341 11.68 4.32008 14.6667 8.00008 14.6667C11.6801 14.6667 14.6667 11.68 14.6667 8ZM7.98008 10.3533C7.88008 10.2533 7.83341 10.1267 7.83341 9.99999C7.83341 9.87333 7.88008 9.74666 7.98008 9.64666L9.12675 8.49999L5.66675 8.49999C5.39341 8.49999 5.16675 8.27333 5.16675 7.99999C5.16675 7.72666 5.39341 7.49999 5.66675 7.49999L9.12675 7.49999L7.98008 6.35333C7.78675 6.15999 7.78675 5.83999 7.98008 5.64666C8.17341 5.45333 8.49341 5.45333 8.68675 5.64666L10.6867 7.64666C10.8801 7.84 10.8801 8.15999 10.6867 8.35333L8.68675 10.3533C8.49341 10.5467 8.17341 10.5467 7.98008 10.3533Z"
                fill="white"
              />
            </svg>
          }
        />
      </form>

      <div className="create__account-wrap">
        <SecondaryButton
          text="Create an account"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M15.1667 8.00001C15.1667 4.32001 12.1801 1.33334 8.50008 1.33334C4.82008 1.33334 1.83341 4.32001 1.83341 8.00001C1.83341 11.68 4.82008 14.6667 8.50008 14.6667C12.1801 14.6667 15.1667 11.68 15.1667 8.00001ZM8.48008 10.3533C8.38008 10.2533 8.33341 10.1267 8.33341 10C8.33341 9.87334 8.38008 9.74668 8.48008 9.64668L9.62675 8.50001L6.16675 8.50001C5.89341 8.50001 5.66675 8.27334 5.66675 8.00001C5.66675 7.72668 5.89341 7.50001 6.16675 7.50001L9.62675 7.50001L8.48008 6.35334C8.28675 6.16001 8.28675 5.84001 8.48008 5.64668C8.67341 5.45334 8.99341 5.45334 9.18675 5.64668L11.1867 7.64668C11.3801 7.84001 11.3801 8.16001 11.1867 8.35334L9.18675 10.3533C8.99341 10.5467 8.67341 10.5467 8.48008 10.3533Z"
                fill="white"
              />
            </svg>
          }
        />
        <p className="create__account--trademark">
          © 2023 All Rights Reserved. Traders Support Funds All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default SignInAccount;
