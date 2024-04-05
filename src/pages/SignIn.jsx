import React from "react";
import "./SignIn.css";
import NavItems from "../components/NavItems";
import SignInAccount from "../components/SignInAccount";
import Footer from "../sections/Footer";

import lightGlow from "../assets/Light-Glow.png";
import image2 from "../assets/img-6.png";
import image3 from "../assets/img-2.png";

function SignIn() {
  return (
    <>
      <NavItems />
      <div className="section__padding sign-in__section">
        <div className="sign-in__typography">
          <h1 className="sign-in__title">Trade with trust and Security</h1>

          <p className="sign-in__paragraph">
            Most effective way to be a profitable forex trader, Trade up to
            $200k funded account to earn as much as 90% profit split with 125%
            refundable fee only at Trader Support Funds
          </p>
        </div>

        {/* SignIn Account */}
        <SignInAccount />

        {/* Out of Page Flow */}
        <div className="sign-in__out-of-page-flow">
          <img src={lightGlow} alt="Light glow" className="sign-in__img" />
          <img src={image2} alt="Trade matrix" className="sign-in__img--2" />
          <img src={image3} alt="" className="sign-in__img--3" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SignIn;
