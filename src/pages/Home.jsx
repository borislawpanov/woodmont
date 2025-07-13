import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../sections/home/Hero";
import LgPadding from "../components/common/LgPadding";
import MdPadding from "../components/common/MdPadding";
import WhiteSection from "../components/common/WhiteSection";
import FeaturesSection from "../sections/common/FeaturesSection";
import HomeImageSection from "../components/common/HomeImageSection";
import illustation from "../assets/images/home-illustration.png";
import AccountTypes from "../sections/home/AccountTypesSection";
import Faq from "../sections/common/Faq";
import SmPadding from "../components/common/SmPadding";
import CallToActionSection from "../components/CTA";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <FeaturesSection />
      <MdPadding />
      <HomeImageSection />
      <CallToActionSection />
      <MdPadding />
      <AccountTypes />
      <MdPadding />
      <Faq />
    </DefaultLayout>
  );
};

export default Home;
