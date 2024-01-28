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
import mongodbLogo from "/images/mongoDb.svg";
import materialUiLogo from "/images/materialUI.svg";
import mantineUiLogo from "/images/mantineUI.svg";
import tailwindLogo from "/images/tailwind.svg";
import sanityLogo from "/images/sanity.svg";
import dumbbellIcon from "/images/dumbbell.png";
import readingIcon from "/images/reading.png";
import movielIcon from "/images/movie.png";
import gamingIcon from "/images/gaming.png";
import programmingIcon from "/images/programming.png";
import headphonesIcon from "/images/headphones.png";
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
            className="portfolio__about-text  portfolio__about-text--name"
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
                <li>
                  <span> MANTINE UI</span>{" "}
                  <img alt="mantine ui logo" src={mantineUiLogo} />
                </li>
                <li>
                  <span> TAILWIND CSS</span>{" "}
                  <img alt="mantine ui logo" src={tailwindLogo} />
                </li>
                <li>
                  <span>SANITY</span> <img alt="sanity logo" src={sanityLogo} />
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
                  alt="css logo"
                  src={cssLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="scss logo"
                  src={scssLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="js logo"
                  src={jsLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="react logo"
                  src={reactLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="firebase logo"
                  src={firebaseLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="git logo"
                  src={gitLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="github logo"
                  src={githubLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="mantine logo"
                  src={mantineUiLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon "
                  alt="tailwind css logo"
                  src={tailwindLogo}
                />
                <img
                  className="portfolio__about-skills-icons-icon portfolio__about-skills-icons-icon--bottom"
                  alt="sanity logo"
                  src={sanityLogo}
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
            className="portfolio__about-text portfolio__about-me-text "
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
            className="portfolio__about-text portfolio__about-me-text "
          >
            Being an analytical person, I like to look through multiple options
            before making a decision.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text portfolio__about-me-text "
          >
            Instead of being a party person I prefer places that are more quiet,
            without a tremendous amount of people.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text portfolio__about-me-text "
          >
            I think sometimes less is better, less salt in the food, less
            options but never less money.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text portfolio__about-me-text--hobies "
          >
            Some of my hobbies are:
          </motion.p>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text portfolio__about-me-text "
          >
            <div className="portfolio__hobbies-grid">
              <div className="portfolio__hobbie-item">
                <img src={dumbbellIcon}></img>
              </div>{" "}
              <div className="portfolio__hobbie-item">
                <img src={readingIcon}></img>
              </div>
              <div className="portfolio__hobbie-item">
                <img src={movielIcon}></img>
              </div>
              <div className="portfolio__hobbie-item">
                <img src={gamingIcon}></img>
              </div>
              <div className="portfolio__hobbie-item">
                <img src={programmingIcon}></img>
              </div>
              <div className="portfolio__hobbie-item">
                <img src={headphonesIcon}></img>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
