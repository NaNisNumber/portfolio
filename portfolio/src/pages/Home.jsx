import React, { Fragment, useEffect } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import About from "../components/about-section/AboutSection";
import Portfolio from "../components/portfolio-section/PortfolioSection";

const Home = ({ currentScrollLocation, setCurrentScrollLocation }) => {
  useEffect(() => {
    if (!currentScrollLocation) return;
    const section = document.getElementById(`${currentScrollLocation}`);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
    });

    setCurrentScrollLocation(null);
  }, [currentScrollLocation]);

  return (
    <Fragment>
      <HeroSection />
      <About />
      <Portfolio />
    </Fragment>
  );
};

export default Home;
