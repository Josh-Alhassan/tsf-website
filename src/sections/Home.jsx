import React from "react";
import NavItems from "../components/NavItems";
import Header from "../components/Header";
import TradersChooseUs from "./TradersChooseUs";
import WhatIsTSF from "./WhatIsTSF";
import TeamOfTraders from "./TeamOfTraders";
import ModelPricing from "./ModelPricing";
import HowItWorks from "./HowItWorks";

function Home() {
  return (
    <div>
      <NavItems />
      <Header />
      <TradersChooseUs />
      <WhatIsTSF />
      <TeamOfTraders />
      <ModelPricing />
      <HowItWorks />
    </div>
  );
}

export default Home;
