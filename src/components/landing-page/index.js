import React from "react";
import Hero from "./Hero-section/Hero";
import InformationSection from "./information-section";
import FeaturedSystem from "./featured-system";
import OutreachEngine from "./outreach-engine-section";
import PersonalizeSales from "./personalize-sales";
import ProspectsReach from "./prospects-reach";
import Onboard from "./onboarding";
import CustomerReview from "./review-section";
import Schedule from "./schedule";
import FaQ from "./faq";
import MultipleChannel from "./multiple-channel";
import WhatIsOurProcess from "./what-is-our";
import CustomerStories from "./customer-stories";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <InformationSection />
      <WhatIsOurProcess />
      {/*<FeaturedSystem/>*/}
      <OutreachEngine />
      <MultipleChannel />
      <PersonalizeSales />
      <ProspectsReach />
      {/*<Onboard/>*/}
      <CustomerStories />
      {/* <CustomerReview /> */}
      <Schedule />
      <FaQ />
    </>
  );
};

export default LandingPage;
