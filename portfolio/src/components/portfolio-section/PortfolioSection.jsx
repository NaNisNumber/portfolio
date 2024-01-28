import React, { Fragment, useEffect, useRef, useState } from "react";
import questionMarkIcon from "/images/question-mark.svg";
import "./PortfolioSection.scss";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const Portfolio = () => {
  const scrollToTop = animateScroll.scrollToTop;
  const reverseSphereRef = useRef();
  const [bubbleActive, setBubbleActive] = useState(false);
  const [sphereActive, setSphereActive] = useState(false);
  const [floatIntervalIds, setFloatIntervalIds] = useState({});

  const slugify = function (name) {
    const lowerCaseName = name?.toLowerCase();
    const slug = lowerCaseName?.replaceAll(" ", "-");
    return slug;
  };

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
      projectExists: true,
      name: "blog website",
      livePreviewUrl: "https://nanisnumber.github.io/MyBlog/",
      repoUrl: "https://github.com/NaNisNumber/MyBlog",
      position: "top",
    },
    {
      projectExists: true,
      name: "Retro Games Website",
      livePreviewUrl: "https://nanisnumber.github.io/Retro-games-website_P/",
      repoUrl: "https://github.com/NaNisNumber/Retro-games-website_P",
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
    const slug = slugify(projectName);
    const livePreviewUrl = project.livePreviewUrl;
    const repoUrl = project.repoUrl;
    const position = project.position;

    return (
      <div
        key={position}
        onClick={(e) => {
          revealProjectHandler(e);
        }}
        className={`portfolio__portfolio-project-container portfolio__portfolio-project-container--${position} `}
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
              to={`/about-project/${slug}`}
            >
              <p>About project</p>
            </Link>
          </div>
        )}
        {projectExists && (
          <img
            className="portfolio__portfolio-project-question-mark"
            data-mark="question"
            src={questionMarkIcon}
          ></img>
        )}
      </div>
    );
  });

  useEffect(() => {
    function floatAnimation(delay) {
      const projectContainers = document.querySelectorAll(
        ".portfolio__portfolio-project-container"
      );

      const floatTimeout = setInterval(() => {
        for (let i = 0; i < projectContainers.length; i++) {
          const container = projectContainers[i];
          container.classList.remove("remove-transition");
          const position = container.dataset.position;
          container.classList.add(
            `portfolio__portfolio-project-container--${position}-float`
          );
        }
      }, 3000);

      const floatTimeoutRemoveFloat = setInterval(() => {
        for (let i = 0; i < projectContainers.length; i++) {
          const container = projectContainers[i];
          const position = container.dataset.position;
          container.classList.remove(
            `portfolio__portfolio-project-container--${position}-float`
          );
        }
      }, 6100);

      return {
        floatTimeout: floatTimeout,
        floatTimeoutRemoveFloat: floatTimeoutRemoveFloat,
      };
    }

    const intervals = (!bubbleActive || sphereActive) && floatAnimation();

    setFloatIntervalIds(intervals);
  }, [bubbleActive, sphereActive]);

  useEffect(() => {
    if (bubbleActive || sphereActive) {
      clearInterval(floatIntervalIds.floatTimeout);
      clearInterval(floatIntervalIds.floatTimeoutRemoveFloat);
    }
  }, [bubbleActive, sphereActive]);

  const revealProjectHandler = function (e) {
    setSphereActive(false);
    setBubbleActive(true);
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
        `portfolio__portfolio-project-container--${position}-pull-reverse-mb`,
        `portfolio__portfolio-project-container--${position}-float`
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
    if (!bubbleActive) return;
    setSphereActive(true);
    setBubbleActive(false);

    const mediaQuery = "(max-width: 900px)";
    const mediaIsMatching = window.matchMedia(mediaQuery).matches;
    const projectContainers = document.querySelectorAll(
      ".portfolio__portfolio-project-container"
    );

    projectContainers.forEach((container) => {
      container.style.pointerEvents = "none";
      const position = container.dataset.position;
      const questionMark = container.lastChild;
      container.classList.add("remove-transition");
      if (questionMark) {
        questionMark.classList.add(
          "portfolio__portfolio-project-question-mark-hidden"
        );
      }

      container.addEventListener("animationend", function onAnimationEnd() {
        container.removeEventListener("animationend", onAnimationEnd);
        container.style.pointerEvents = "auto";
        if (questionMark) {
          questionMark.classList.remove(
            "portfolio__portfolio-project-question-mark-hidden"
          );
        }
      });

      container.classList.remove(
        `portfolio__portfolio-project-container--${position}-pull`,
        `portfolio__portfolio-project-container--${position}-pull-mb`,
        `portfolio__portfolio-project-container--${position}-float`,
        "expand",
        "expand-mb"
      );

      if (mediaIsMatching) {
        container.classList.add(
          `portfolio__portfolio-project-container--${position}-pull-reverse-mb`
        );
      } else {
        container.classList.add(
          `portfolio__portfolio-project-container--${position}-pull-reverse`
        );
      }

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
