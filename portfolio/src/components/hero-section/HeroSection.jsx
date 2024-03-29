import React, { useEffect, useState, useRef } from "react";
import "./HeroSection.scss";
import { motion } from "framer-motion";

const HeroSection = ({ setDisplayImg }) => {
  /* first animation starts, after it is finished a second animation will start in reverse with 
  the same number of steps, after the 'reverse' animation finishes the text content will change and the
  first number of steps will also change, and the first animation will start again and so on 
  1. When the text content will change?
  When the 'reverse' animation finishes.
  */

  const [headingCurrentContent, setHeadingCurrentContent] = useState("Hello");
  const typewriterBeforeRef = useRef(null);
  const typewriterAfterRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const typewriterContainerRef = useRef(null);
  const heroHeadingContent = [
    "Hello",
    "My name is Sergiu",
    "I am a front-end web developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    function checkHeroImgLoaded() {
      const bodyEl = document.getElementById("body");
      const heroImg = new Image();
      bodyEl.style.overflow = "hidden";

      heroImg.onload = function () {
        setTimeout(() => {
          bodyEl.style.overflow = "auto";
          setDisplayImg(true);
        }, 1000);
      };

      heroImg.src = "/images/heroImg.jpg";
    }
    checkHeroImgLoaded();
  }, []);

  useEffect(() => {
    typewriterContainerRef.current.style.width = `${headingCurrentContent.length}ch`;

    const numberOfAnimationSteps = headingCurrentContent.length;

    document.documentElement.style.setProperty(
      "--typewriterSteps",
      `steps(${numberOfAnimationSteps})`
    );

    heroHeadingRef.current.style.opacity = `1`;

    typewriterBeforeRef.current.classList.add(
      "portfolio__hero-typewriter-before--initial-animation"
    );
    typewriterAfterRef.current.classList.add(
      "portfolio__hero-typewriter-after--initial-animation"
    );

    setTimeout(() => {
      typewriterBeforeRef.current.classList.remove(
        "portfolio__hero-typewriter-before--initial-animation"
      );
      typewriterBeforeRef.current.classList.add(
        "portfolio__hero-typewriter-before--reverse-animation"
      );
      typewriterAfterRef.current.classList.remove(
        "portfolio__hero-typewriter-after--initial-animation"
      );

      typewriterAfterRef.current.classList.add(
        "portfolio__hero-typewriter-after--reverse-animation"
      );
      if (index === heroHeadingContent.length - 1) {
        typewriterBeforeRef.current.classList.remove(
          "portfolio__hero-typewriter-before--reverse-animation"
        );
        typewriterAfterRef.current.classList.remove(
          "portfolio__hero-typewriter-after--reverse-animation"
        );
      }
      if (!heroHeadingContent[index + 1]) return;
    }, 3500);

    setTimeout(() => {
      if (!heroHeadingContent[index + 1]) return;
      typewriterBeforeRef.current.classList.remove(
        "portfolio__hero-typewriter-before--reverse-animation"
      );

      typewriterAfterRef.current.classList.remove(
        "portfolio__hero-typewriter-after--reverse-animation"
      );
      setIndex((prevIndex) => prevIndex + 1);

      heroHeadingRef.current.style.opacity = "0";
      setHeadingCurrentContent(heroHeadingContent[index + 1]);
    }, 6000);
  }, [headingCurrentContent]);

  return (
    <section
      style={{
        background: `linear-gradient(rgba(4, 11, 63), rgba(4, 11, 63, 0.3)), url(/images/heroImg.jpg)`,
        backgroundSize: "cover",
      }}
      id="hero"
      className="portfolio__hero-section"
    >
      <div className="portfolio__hero-header-container">
        <header className="portfolio__hero-header">
          <div
            ref={typewriterContainerRef}
            className="portfolio__hero-header-inner-container"
          >
            <div
              ref={typewriterBeforeRef}
              className="portfolio__hero-typewriter-before"
            ></div>
            <h1 ref={heroHeadingRef} className="portfolio__hero-heading">
              {headingCurrentContent}
            </h1>
            <div
              ref={typewriterAfterRef}
              className="portfolio__hero-typewriter-after"
            ></div>
          </div>
          {index === heroHeadingContent.length - 1 && (
            <motion.h2
              transition={{ type: "spring", stiffness: 60, delay: 4 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              className="portfolio__hero-heading--secondary"
            >
              Welcome to my portfolio website!
            </motion.h2>
          )}
        </header>
      </div>
    </section>
  );
};

export default HeroSection;
