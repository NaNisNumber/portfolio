import React from "react";
import "./AboutSection.scss";
import { motion } from "framer-motion";
const About = () => {
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
        <div className="portfolio__about-text-container">
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            My name is Sergiu. I'm 21 years old and I'm a self-taught front-end
            web developer.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 200 }}
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
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            Being an analytical person, I like to look through multiple options
            before making a decision.
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="portfolio__about-text"
          >
            Instead of being a party person, one of my best friends is my PC and
            my rescued kitten.
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
