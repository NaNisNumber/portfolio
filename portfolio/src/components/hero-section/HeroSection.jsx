import React, { useRef } from "react";
import rect1 from "/images/rect1.png";
import ec1 from "/images/ec1.png";
import ec2 from "/images/ec2.png";
import ec3 from "/images/ec3.png";
import ec4 from "/images/ec4.png";

import "./HeroSection.scss";


const HeroSection = () => {

  const typewriterBeforeRef = useRef(null);
  const typewriterAfterRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const typewriterContainerRef = useRef(null);
  const typeWriterContent = ['Hello', 'My name is Sergiu', 'I am a front-end web developer'];
  return (
    <section

      id="hero"
      className="portfolio__hero-section"
    >
      <div className="portfolio__hero-header-container">
        <header className="portfolio__hero-header">
          {typeWriterContent.map((content, i) => {
            return <div
              ref={typewriterContainerRef}
              className="portfolio__hero-header-inner-container"
              key={i}
            >
              <div
                ref={typewriterBeforeRef}
                className={`portfolio__hero-typewriter-before portfolio__hero-typewriter-before--initial-animation${i}`}
              ></div>
              <h1 ref={heroHeadingRef} className="portfolio__hero-heading">
                {content}
              </h1>
              <div
                ref={typewriterAfterRef}
                className={`portfolio__hero-typewriter-after portfolio__hero-typewriter-after--initial-animation${i}`}
              ></div>
            </div>
          })}

        </header>
      </div>

      <img className="portfolio__hero-svg-rect" src={rect1} />
      <img className="portfolio__hero-svg-ec1" src={ec1} />
      <img className="portfolio__hero-svg-ec2" src={ec2} />
      <img className="portfolio__hero-svg-ec3" src={ec3} />
      <img className="portfolio__hero-svg-ec4" src={ec4} />

    </section>
  );
};

export default HeroSection;
