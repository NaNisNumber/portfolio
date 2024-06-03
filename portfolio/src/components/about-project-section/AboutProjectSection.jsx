import React, { useEffect, useState } from "react";
import "./AboutProjectSection.scss";
import ImprovementsComponent from "./Improvements/ImprovementsComponent";
import { createClient } from "@sanity/client";
import { useLocation } from "react-router-dom";

const AboutProjectSection = () => {
  const location = useLocation().pathname;
  const locationArr = location.split("/");
  const projectId = locationArr[locationArr.length - 1];
  const [projectData, setProjectData] = useState({});

  const client = createClient({
    projectId: "5n6e2pqe",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2024-01-13", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  });

  useEffect(() => {
    async function getProjectData() {
      const projectData = await client.fetch(
        `*[_type == 'portfolioProject' && slug.current == '${projectId}']
         {wu,
         learned,
         'projectName':name,
         'projectImg':projectImage.asset->url,
         'techLogos':techLogos[].asset->,
         usedTech
        }
        `
      );

      setProjectData(projectData[0]);
    }
    getProjectData();
  }, []);

  return (
    <section className="portfolio__about-project-section">
      <main className="portfolio__about-project-main">
        <header className="portfolio__about-project-header">
          <h1 className="portfolio__about-project-heading">
            About this project
          </h1>
        </header>
        <div className="portfolio__about-project-container">
          <p className="portfolio__about-project-name">
            {projectData.projectName}
          </p>
          <div className="portfolio__about-project-container-grid">
            <div className="portfolio__about-project-inner-container">
              <img
                alt="project img"
                className="portfolio__about-project-main-img"
                src={`${projectData.projectImg}`}
              />
              <div className="portfolio__about-logo-container">
                {projectData.techLogos?.map((techLogo) => (
                  <img key={techLogo._id} alt="html logo" src={techLogo.url} />
                ))}
              </div>
            </div>
            <div className="portfolio__about-project-about-container">
              <div className="portfolio__about-project-about-inner-container">
                <p className="portfolio__about-project-description">
                  Used technologies:
                </p>
                <ul className="portfolio__about-ul">
                  {projectData.usedTech?.map((techName, i) => (
                    <li key={i}>
                      {" "}
                      <span>{i + 1})</span> {techName}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="portfolio__about-project-about-inner-container">
                <p className="portfolio__about-project-description">
                  What was the goal of this project and what did I learn from
                  it?
                </p>
                <ul className="portfolio__about-ul">
                  {projectData.learned?.map((learned, i) => (
                    <li key={i}>
                      {" "}
                      <span>{i + 1})</span> {learned}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="portfolio__about-project-improvement">
            {projectData.wu && <p className="portfolio__about-project-description">
              Things I could've done better
            </p>}
          </div>
          {projectData.wu?.map((obj, i) => {
            return (
              <ImprovementsComponent
                key={i}
                updates={obj.updates}
                wrongs={obj.wrongs}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default AboutProjectSection;
