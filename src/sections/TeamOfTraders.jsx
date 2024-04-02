import React from "react";

import PrimaryButton from "../utilities/PrimaryButton";
import rightArr from "../utilities/rightArrow.svg";

import "./TeamOfTraders.css";

function TeamOfTraders() {
  return (
    <div className="team-of-traders__section section__padding">
      {/* Outer container */}
      <div className="team-of-traders__skewed">
        {/* middle container */}
        <div className="team-of-traders__typography">
          <h2 className="team-of-traders__typography--heading">
            Join Our Experienced Team Of Traders
          </h2>
          <p className="team-of-traders__typography--paragraph">
            If you’re ready, accept our challenge or Evaluation type of funded
            to stand a chance of upto 90% profit share to you
          </p>

          <PrimaryButton text="Get Started" svg={rightArr} url="#" />
        </div>
      </div>
    </div>
  );
}

export default TeamOfTraders;
