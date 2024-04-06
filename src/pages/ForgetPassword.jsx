import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavItems from "../components/NavItems";

import "./ForgetPassword.css";
import FlowOfPage from "../components/FlowOfPage";
import Footer from "../sections/Footer";
import InputField from "../utilities/InputField";
import SubmitButton from "../utilities/SubmitButton";
import RecoveryEmailPrompt from "../components/RecoveryEmailPrompt";
import { Link } from "react-router-dom";

function ForgetPassword() {
  // const [showPrompt, setShowPrompt] = useState(false);

  const navigate = useNavigate();
  const handleSendEmail = (e) => {
    // Code to send recovery email
    // Navigate to the recovery page
    navigate("/recover-email");
  };

  // const handleClosePrompt = () => {
  //   setShowPrompt(false);
  // };
  return (
    <div>
      <NavItems />
      <div className="forget-password__section section__padding">
        {/* Form Container */}
        <form action="" className="form__container">
          <div className="forgot__password--container">
            {/* Password Typography */}
            <div className="forgot-password__typography">
              <h2 className="forgot-password__typography--heading">
                Forget Password
              </h2>
              <p className="forgot-password__typography--paragraph">
                Provide your registered email address.
              </p>
            </div>
            <InputField type="email" placeholder="test@test.com" />
          </div>
          <SubmitButton
            onClickFunc={handleSendEmail}
            text="Recover Email"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M14.6667 8.5C14.6667 4.82 11.6801 1.83333 8.00008 1.83333C4.32008 1.83333 1.33341 4.82 1.33341 8.5C1.33341 12.18 4.32008 15.1667 8.00008 15.1667C11.6801 15.1667 14.6667 12.18 14.6667 8.5ZM7.98008 10.8533C7.88008 10.7533 7.83341 10.6267 7.83341 10.5C7.83341 10.3733 7.88008 10.2467 7.98008 10.1467L9.12675 9L5.66675 9C5.39341 9 5.16675 8.77333 5.16675 8.5C5.16675 8.22667 5.39341 8 5.66675 8L9.12675 8L7.98008 6.85333C7.78675 6.66 7.78675 6.34 7.98008 6.14667C8.17341 5.95333 8.49341 5.95333 8.68675 6.14667L10.6867 8.14667C10.8801 8.34 10.8801 8.66 10.6867 8.85333L8.68675 10.8533C8.49341 11.0467 8.17341 11.0467 7.98008 10.8533Z"
                  fill="white"
                />
              </svg>
            }
          />

          {/* {showPrompt && (
            <Link to="/recoveremail">
              <RecoveryEmailPrompt onClose={handleClosePrompt} />
            </Link>
          )} */}
        </form>
      </div>
      {/* <RecoveryEmailPrompt /> */}

      <FlowOfPage />
      <Footer />
    </div>
  );
}

export default ForgetPassword;
