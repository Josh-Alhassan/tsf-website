import React from "react";
import NavItems from "../components/NavItems";
import Header from "../components/Header";
import TradersChooseUs from "./TradersChooseUs";
import WhatIsTSF from "./WhatIsTSF";

function Home() {
  return (
    <div>
      <NavItems />
      <Header />
      <TradersChooseUs />
      <WhatIsTSF />
    </div>
  );
}

export default Home;
