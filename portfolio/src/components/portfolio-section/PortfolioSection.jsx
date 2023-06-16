import React, { Fragment, useRef } from "react";
import "./PortfolioSection.scss";

const Portfolio = () => {
  const containerBottomRef = useRef();

  const revealProjectHandler = function (e) {
    const mediaQuery = "(max-width: 900px)";
    const mediaIsMatching = window.matchMedia(mediaQuery).matches;
    const target = e.target;
    const projectContainers = document.querySelectorAll(
      ".portfolio__portfolio-project-container"
    );

    let delay = 0;

    for (let i = 0; i < projectContainers.length; i++) {
      const container = projectContainers[i];
      const position = container.dataset.position;

      container.classList.remove(
        "expand",
        "expand-mb",
        `portfolio__portfolio-project-container--${position}-pull-reverse`,
        `portfolio__portfolio-project-container--${position}-pull-reverse-mb`
      );
      if (container === target) continue;
      delay = delay + 500;

      (function (delay) {
        setTimeout(() => {
          if (mediaIsMatching) {
            container.classList.add(
              `portfolio__portfolio-project-container--${position}-pull-mb`
            );
          } else {
            container.classList.add(
              `portfolio__portfolio-project-container--${position}-pull`
            );
          }
        }, delay);
      })(delay);
    }

    if (mediaIsMatching) {
      target.classList.add("expand-mb");
    } else {
      target.classList.add("expand");
    }
  };

  const reverseRevealHandler = function () {
    const mediaQuery = "(max-width: 900px)";
    const mediaIsMatching = window.matchMedia(mediaQuery).matches;
    const projectContainers = document.querySelectorAll(
      ".portfolio__portfolio-project-container"
    );

    projectContainers.forEach((container) => {
      const position = container.dataset.position;
      if (mediaIsMatching) {
        container.classList.add(
          `portfolio__portfolio-project-container--${position}-pull-reverse-mb`
        );
      } else {
        container.classList.add(
          `portfolio__portfolio-project-container--${position}-pull-reverse`
        );
      }

      container.classList.remove(
        `portfolio__portfolio-project-container--${position}-pull`,
        `portfolio__portfolio-project-container--${position}-pull-mb`,
        `portfolio__portfolio-project-container--${position}-float`,
        "expand"
      );

      if (position === "left") {
        container.addEventListener("animationend", function onAnimationEnd() {
          container.removeEventListener("animationend", onAnimationEnd);
          projectContainers.forEach((container) => {
            const position = container.dataset.position;
            container.classList.remove(
              `portfolio__portfolio-project-container--${position}-pull-reverse`,
              `portfolio__portfolio-project-container--${position}-pull-reverse-mb`
            );
            container.classList.add(
              `portfolio__portfolio-project-container--${position}-float`
            );
          });
        });
      }
    });
  };

  return (
    <Fragment>
      <section className="portfolio__portfolio-section">
        <header className="portfolio__portfolio-header">
          <h1 className="portfolio__portfolio-heading">My projects</h1>
        </header>
        <div className="portfolio__portfolio-container">
          <div
            onClick={(e) => {
              revealProjectHandler(e);
            }}
            className="portfolio__portfolio-project-container portfolio__portfolio-project-container--left portfolio__portfolio-project-container--left-float"
            data-position="left"
          ></div>
          <div
            onClick={(e) => {
              revealProjectHandler(e);
            }}
            className="portfolio__portfolio-project-container portfolio__portfolio-project-container--top portfolio__portfolio-project-container--top-float"
            data-position="top"
          ></div>
          <div
            onClick={() => {
              reverseRevealHandler();
            }}
            className="portfolio__portfolio-sphere"
          ></div>
          <div
            onClick={(e) => {
              revealProjectHandler(e);
            }}
            className="portfolio__portfolio-project-container portfolio__portfolio-project-container--right portfolio__portfolio-project-container--right-float "
            data-position="right"
          >
            {/* <p className="portfolio__portfolio-project-text">Live preview</p>
            <p className="portfolio__portfolio-project-text">Github repo</p>
            <p className="portfolio__portfolio-project-text">About project</p> */}
          </div>
          <div
            onClick={(e) => {
              revealProjectHandler(e);
            }}
            ref={containerBottomRef}
            className="portfolio__portfolio-project-container portfolio__portfolio-project-container--bottom portfolio__portfolio-project-container--bottom-float "
            data-position="bottom"
          ></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
