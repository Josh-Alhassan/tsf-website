import React from "react";
import "./AboutPage.css";
import NavItems from "../components/NavItems";
import Footer from "../sections/Footer";
import FlowOfPage from "../components/FlowOfPage";
import TraderSupportFunds from "../utilities/TraderSupportFunds";
import TraderSkewed from "../utilities/TraderSkewed";

function AboutPage() {
  return (
    <>
      <NavItems />

      <div className="section__padding about-tsf__section">
        <div className="about-tsf-centered">
          <div className="about-tsf-header">
            <h1 className="about-tsf__heading">About TSF</h1>
            <p className="about-tsf__sub-heading">
              Dive into the world of intelligent trading with our guided posts
              and articles
            </p>
          </div>

          <p className="about-tsf__paragraph">
            TSF is a platform designed for traders to take their trading career
            to next level so to trade their passion for profit. Imagine putting
            your passion to work and getting rewarded in cash when your strategy
            and styles of trading proves to be successful. We’ve made that
            so-essy! Trade your passion by displaying them by taking any of our
            models of funding and get paid for your time and effort. Most
            traders need real money and bigger capital to take their trading
            career to the next level, which is why we fund you with cash. Here
            we’ll never rush you to meet a target. WHAT ELSE BETTER THAN THAT?
          </p>

          <div className="about-tsf__import">
            <TraderSupportFunds />
          </div>

          <TraderSkewed />
        </div>
      </div>
      {/* <FlowOfPage /> */}
      <Footer />
    </>
  );
}

export default AboutPage;
