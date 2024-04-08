import React from "react";

import "./FundedTraders.css";
import NavItems from "../components/NavItems";
import SectionTitle from "../utilities/SectionTitle";

import traderOne from "../assets/trader-1.png";
import traderTwo from "../assets/trader-2.png";
import traderThree from "../assets/trader-3.png";
import Footer from "../sections/Footer";
import PrimaryButton from "../utilities/PrimaryButton";
import TraderSkewed from "../utilities/TraderSkewed";

function FundedTraders() {
  const tradersImages = [
    { image: traderOne },
    { image: traderTwo },
    { image: traderThree },
    { image: traderOne },
    { image: traderOne },
    { image: traderOne },
    { image: traderOne },
    { image: traderOne },
    { image: traderOne },
  ];
  return (
    <>
      <NavItems />

      <div className="funded-trader__section section__padding">
        <SectionTitle
          title="Funded Trader"
          description="Lorem ipsum dolor sit amet consectetur. Sit sit sed urna interdum consectetur a."
        />

        <div className="funded-traders__grid">
          {tradersImages.map((trader) => (
            <img
              src={trader.image}
              alt="Trader Certificate"
              className="funded-trader__img"
            />
          ))}
        </div>

        <div className="load-more-info">
          <PrimaryButton
            text="Load More"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.667 8.00004C14.667 4.32004 11.6803 1.33337 8.00033 1.33337C4.32032 1.33337 1.33366 4.32004 1.33366 8.00004C1.33366 11.68 4.32032 14.6667 8.00032 14.6667C11.6803 14.6667 14.667 11.68 14.667 8.00004ZM7.98033 10.3534C7.88032 10.2534 7.83366 10.1267 7.83366 10C7.83366 9.87337 7.88032 9.74671 7.98033 9.64671L9.12699 8.50004L5.66699 8.50004C5.39366 8.50004 5.16699 8.27337 5.16699 8.00004C5.16699 7.72671 5.39366 7.50004 5.66699 7.50004L9.12699 7.50004L7.98033 6.35337C7.78699 6.16004 7.78699 5.84004 7.98033 5.64671C8.17366 5.45337 8.49366 5.45337 8.68699 5.64671L10.687 7.64671C10.8803 7.84004 10.8803 8.16004 10.687 8.35337L8.68699 10.3534C8.49366 10.5467 8.17366 10.5467 7.98033 10.3534Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>

        <TraderSkewed />
      </div>

      <Footer />
    </>
  );
}

export default FundedTraders;
