import React, { useEffect, useRef } from "react";
import "./AboutSection.scss";
import htmlLogo from "/images/html.svg";
import cssLogo from "/images/css-3.svg";
import scssLogo from "/images/sass.svg";
import jsLogo from "/images/js.svg";
import reactLogo from "/images/react.svg";
import firebaseLogo from "/images/firebase-icon.svg";
import gitLogo from "/images/git.svg";
import githubLogo from "/images/github.svg";
import nodeLogo from "/images/nodejs.svg";
import mongodbLogo from "/images/mongodb.svg";
import materialUiLogo from "/images/materialUI.svg";
import { motion } from "framer-motion";

const About = () => {
  const skillsIconsContainerRef = useRef();

  useEffect(() => {
    let delay = 0;
    const icons = document.querySelectorAll(
      ".portfolio__about-skills-icons-icon"
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    function whenInView(entries) {
      const entriesObj = entries[0];
      const targetedElement = entriesObj.target;
      const isIntersecting = entries[0].isIntersecting;
      if (!isIntersecting) return;

      icons.forEach((icon, i) => {
        delay = delay + 0.4;
        if (i === 0) delay = 0;
        icon.style.animation = `scaleSkillIcon 0.4s ${delay}s forwards`;
      });

      observer.unobserve(targetedElement);
    }

    const observer = new IntersectionObserver(whenInView, options);
    observer.observe(skillsIconsContainerRef.current);
  }, []);

  return (
    <section id="about" className="portfolio__about-section">
      <div className="portfolio__about-container">
        <header className="portfolio__about-header">
          <motion.h1
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="portfolio__about-heading--main"
          >
            Some things about me
          </motion.h1>
        </header>

        <div className="portfolio__about-skills-container">
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text portfolio__about-text--name"
          >
            My name is Sergiu. I'm 21 years old and I'm a self-taught front-end
            web developer.
          </motion.p>
          <div className="portfolio__about-skills-inner-container">
            <div className="portfolio__about-skills-inner-inner-container">
              <motion.p
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="portfolio__about-text"
              >
                My current skills are:
              </motion.p>
              <ul className="portfolio__about-skills-ul">
                <li>
                  <span>HTML</span> <img alt="html logo" src={htmlLogo} />
                </li>
                <li>
                  <span>CSS</span> <img alt="css logo" src={cssLogo} />
                </li>
                <li>
                  <span> SCSS</span> <img alt="scss logo" src={scssLogo} />
                </li>
                <li>
                  <span>JAVASCRIPT </span> <img alt="js logo" src={jsLogo} />
                </li>
                <li>
                  <span> REACT</span> <img alt="react logo" src={reactLogo} />
                </li>
                <li>
                  <span> FIREBASE</span>{" "}
                  <img alt="html logo" src={firebaseLogo} />
                </li>
                <li>
                  <span> GIT</span> <img alt="git logo" src={gitLogo} />
                </li>
                <li>
                  <span> GITHUB</span>{" "}
                  <img alt="github logo" src={githubLogo} />
                </li>
              </ul>
            </div>
            <div
              ref={skillsIconsContainerRef}
              className="portfolio__about-skills-icons-container"
            >
              <div className="portfolio__about-skills-icons-inner-container">
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="html logo"
                  src={htmlLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="html logo"
                  src={cssLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="html logo"
                  src={scssLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="html logo"
                  src={jsLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="html logo"
                  src={reactLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="html logo"
                  src={firebaseLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="html logo"
                  src={gitLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="html logo"
                  src={githubLogo}
                />
              </div>
            </div>
          </div>

          <div className="portfolio__about-skills-inner-container">
            <div className="portfolio__about-skills-inner-inner-container">
              <motion.p
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="portfolio__about-text"
              >
                Currently I'm learning:
              </motion.p>
              <ul className="portfolio__about-skills-ul">
                <li>
                  <span> NODE.JS</span> <img alt="nodejs logo" src={nodeLogo} />
                </li>
                <li>
                  <span> MONGODB</span>
                  <img alt="mongodb logo" src={mongodbLogo} />
                </li>
                <li>
                  <span> MATERIAL UI</span>
                  <img alt="material ui logo" src={materialUiLogo} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__about-text-container">
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            My coding journey started about a year and a half ago, and since
            then I keep my passion alive, although there are days when not much
            happens.In any case, I try to do things as best as I can, to
            recognize my mistakes, and seek improvement.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            Being an analytical person, I like to look through multiple options
            before making a decision.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            Instead of being a party person, I prefer places that are more
            quiet.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            Anyway, that's just a small piece of the puzzle that I am.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
