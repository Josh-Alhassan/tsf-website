import React from "react";
import NavItems from "../components/NavItems";
import Header from "../components/Header";
import TradersChooseUs from "./TradersChooseUs";
import WhatIsTSF from "./WhatIsTSF";
import TeamOfTraders from "./TeamOfTraders";
import ModelPricing from "./ModelPricing";
import HowItWorks from "./HowItWorks";
import Faq from "./Faq";
import GlobalCommunities from "./GlobalCommunities";
import BlogToSmartTrading from "./BlogToSmartTrading";
import Footer from "./Footer";
import ForgetPassword from "../pages/ForgetPassword";

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
      <Faq />
      <GlobalCommunities />
      <BlogToSmartTrading />
      <Footer />
    </div>
  );
}

export default Home;
