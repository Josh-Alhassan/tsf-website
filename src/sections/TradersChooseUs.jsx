import React from "react";

// import SVGS
import accountManager from "../utilities/account-manager.svg";
import ourCapital from "../utilities/our-capital.svg";
import customerSupport from "../utilities/customer-support.svg";
import tradeStyle from "../utilities/trade-style.svg";
import tradingPlatform from "../utilities/trade-platform.svg";
import oneTimeFee from "../utilities/one-time-fee.svg";

// Import StyleSheet
import "./TradersChooseUs.css";

function TradersChooseUs() {
  return (
    <div className="section__padding traders-choose-us">
      <div className="traders__header">
        <h2 className="trader__heading">Why Traders All Over Choose Us</h2>

        <p className="traders__paragraph">
          Our Firm provides Best services in Funding space. With competition so
          high, this is the only place where you can trade without being worried
        </p>
      </div>

      {/* Why Traders Grid */}
      <div className="traders__grid">
        <div className="trader__grid-item grid-item--border">
          <img src={accountManager} alt="Account Manager Icon" />
          <h2 className="trader-item__title">Account Manager</h2>
          <p className="trader-item__description">
            We provide a suitable and easy to access dashboard and Metrix which
            helps you track your records and trading behaviors. This helps you
            adjust to become more profitable.
          </p>
        </div>
        <div className="trader__grid-item grid-item--border">
          <img src={ourCapital} alt="Our Capital your profit Icon" />
          <h2 className="trader-item__title">Our Capital, Your Profit</h2>
          <p className="trader-item__description">
            Just put your skills to test and be rewarded in cash when your
            strategy proves successful. Risk none of your capital no more.
          </p>
        </div>
        <div className="trader__grid-item">
          <img src={customerSupport} alt="Our Capital your profit Icon" />
          <h2 className="trader-item__title">Customer Support</h2>
          <p className="trader-item__description">
            Our traders have free access to communicate with us, is as easy as
            joining any of our social platform or using the one tap support
            options.
          </p>
        </div>
        <div className="trader__grid-item grid-item--border">
          <img src={tradeStyle} alt="Our Capital your profit Icon" />
          <h2 className="trader-item__title">Free Trade Style</h2>
          <p className="trader-item__description">
            No trading styles is limited. we designed a system SO-ESSY, all for
            your comfort and styles.
          </p>
        </div>
        <div className="trader__grid-item grid-item--border">
          <img src={ourCapital} alt="Our Capital your profit Icon" />
          <h2 className="trader-item__title">No.1 Trading Platform</h2>
          <p className="trader-item__description">
            Our platform is built on MetaTrader 4/5 which gives you opportunity
            to use any EA's and indicators that works for you.
          </p>
        </div>
        <div className="trader__grid-item">
          <img src={customerSupport} alt="Our Capital your profit Icon" />
          <h2 className="trader-item__title">One-time Fee</h2>
          <p className="trader-item__description">
            o extra charge or monthly fees after you successfully reached to a
            funded trader level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TradersChooseUs;
