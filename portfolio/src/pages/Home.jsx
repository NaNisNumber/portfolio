import React, { Fragment } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import About from "../components/about-section/About";
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
    </Fragment>
  );
};

export default Home;
