import React, { Fragment } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import About from "../components/about-section/AboutSection";
import Portfolio from "../components/portfolio-section/PortfolioSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <Portfolio />
    </Fragment>
  );
};

export default Home;
