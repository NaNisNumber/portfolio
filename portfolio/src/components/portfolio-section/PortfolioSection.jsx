import React, { Fragment, useRef } from "react";
import "./PortfolioSection.scss";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const Portfolio = () => {
  const scrollToTop = animateScroll.scrollToTop;
  const reverseSphereRef = useRef();

  const projectsData = [
    {
      projectExists: false,
      name: null,
      livePreviewUrl: null,
      repoUrl: null,
      aboutProjectUrl: null,
      position: "left",
    },
    {
      projectExists: false,
      name: null,
      livePreviewUrl: null,
      repoUrl: null,
      aboutProjectUrl: null,
      position: "top",
    },
    {
      projectExists: true,
      name: "Retro Games Website",
      livePreviewUrl: "https://nanisnumber.github.io/Retro-games-website_P/",
      repoUrl: "https://github.com/NaNisNumber/Retro-games-website_P",
      aboutProjectUrl: "/about-project/0",
      position: "right",
    },
    {
      projectExists: false,
      name: null,
      livePreviewUrl: null,
      repoUrl: null,
      aboutProjectUrl: null,
      position: "bottom",
    },
  ];

  const projects = projectsData.map((project) => {
    const projectExists = project.projectExists;
    const projectName = project.name;
    const livePreviewUrl = project.livePreviewUrl;
    const repoUrl = project.repoUrl;
    const aboutProjectUrl = project.aboutProjectUrl;
    const position = project.position;

    return (
      <div
        onClick={(e) => {
          revealProjectHandler(e);
        }}
        className={`portfolio__portfolio-project-container portfolio__portfolio-project-container--${position} portfolio__portfolio-project-container--${position}-float`}
        data-position={position}
        data-container="project"
      >
        {projectExists && (
          <div className="portfolio__portfolio-project-inner-container">
            <p className="portfolio__portfolio__project-name">
              {`${projectName}`}
            </p>
            <a
              className="portfolio__portfolio-project-link"
              href={`${livePreviewUrl}`}
            >
              <p>Live preview</p>
            </a>
            <a
              className="portfolio__portfolio-project-link"
              href={`${repoUrl}`}
            >
              <p>Github repo</p>
            </a>
            <Link
              onClick={scrollToTop}
              className="portfolio__portfolio-project-link"
              to={`${aboutProjectUrl}`}
            >
              <p>About project</p>
            </Link>
          </div>
        )}
        {projectExists && (
          <ion-icon
            data-mark="question"
            class="portfolio__portfolio-project-question-mark"
            name="help-outline"
          ></ion-icon>
        )}
      </div>
    );
  });

  const revealProjectHandler = function (e) {
    const mediaQuery = "(max-width: 900px)";
    const mediaIsMatching = window.matchMedia(mediaQuery).matches;
    let target = e.target;
    let restOfProjects = [];
    const projectContainers = document.querySelectorAll(
      ".portfolio__portfolio-project-container"
    );

    let delay = 0;

    if (target.dataset.mark == "question") {
      target = target.parentElement;
    }
    const targetQuestionMark = target.lastChild;

    for (let i = 0; i < projectContainers.length; i++) {
      const container = projectContainers[i];
      const position = container.dataset.position;
      const questionMark = container.lastChild;

      container.classList.remove(
        `portfolio__portfolio-project-container--${position}-pull-reverse`,
        `portfolio__portfolio-project-container--${position}-pull-reverse-mb`
      );

      if (container === target) continue;

      // add the rest of project containers that are not the target to the array;
      restOfProjects.push(container);
      //

      // if target is clicked, make the other project bubbles unclickable and also the sphere
      container.style.pointerEvents = "none";
      reverseSphereRef.current.style.pointerEvents = "none";
      //

      /* when the user click to reveal a project hide all the question marks from the other projects that are
      not the targeted one to prevent stacking of the question marks inside the sphere */
      if (questionMark) {
        questionMark.classList.add(
          "portfolio__portfolio-project-question-mark-hidden"
        );
      }

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

    if (target.dataset.container) {
      if (mediaIsMatching) {
        target.classList.add("expand-mb");
      } else {
        target.classList.add("expand");
      }
    }

    target.addEventListener("animationend", function onAnimationEnd() {
      // after the animation on the target project bubble ends, bring back
      // the functionality of the other bubbles and the sphere
      target.removeEventListener("animationend", onAnimationEnd);
      restOfProjects.forEach((project) => {
        project.style.pointerEvents = "auto";
        reverseSphereRef.current.style.pointerEvents = "auto";
      });
      //

      if (!target.firstChild) return;
      targetQuestionMark.classList.add(
        "portfolio__portfolio-project-question-mark-hidden"
      );
      target.firstChild.classList.add(
        "portfolio__portfolio-project-inner-container-display"
      );
    });
  };

  const reverseRevealHandler = function () {
    const mediaQuery = "(max-width: 900px)";
    const mediaIsMatching = window.matchMedia(mediaQuery).matches;
    const projectContainers = document.querySelectorAll(
      ".portfolio__portfolio-project-container"
    );

    projectContainers.forEach((container) => {
      const position = container.dataset.position;
      const questionMark = container.lastChild;

      if (questionMark) {
        questionMark.classList.add(
          "portfolio__portfolio-project-question-mark-hidden"
        );
      }

      container.addEventListener("animationend", function onAnimationEnd() {
        container.removeEventListener("animationend", onAnimationEnd);
        if (questionMark) {
          questionMark.classList.remove(
            "portfolio__portfolio-project-question-mark-hidden"
          );
        }
      });

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
        "expand",
        "expand-mb"
      );

      if (container.firstChild) {
        container.firstChild.classList.remove(
          "portfolio__portfolio-project-inner-container-display"
        );
      }

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
      <section id="portfolio" className="portfolio__portfolio-section">
        <header className="portfolio__portfolio-header">
          <h1 className="portfolio__portfolio-heading">My projects</h1>
        </header>
        <div className="portfolio__portfolio-container">
          <div
            ref={reverseSphereRef}
            onClick={() => {
              reverseRevealHandler();
            }}
            className="portfolio__portfolio-sphere"
          ></div>
          {projects}
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
