import React from "react";
import "./AboutProjectSection.scss";
import retroImage from "/images/retroImage.png";
import htmlLogo from "/images/html.svg";
import cssLogo from "/images/css-3.svg";
import reactLogo from "/images/react.svg";
import firebaseLogo from "/images/firebase-icon.svg";
import ImprovementsComponent from "./Improvements/ImprovementsComponent";
import improvementsArr from "./improvementsArr";

const AboutProjectSection = () => {
  // to display an update or a wrong on a certain element and not all you need to reffer to a single target;
  // you could put different id's to each element you want to display;

  return (
    <section className="portfolio__about-project-section">
      <main className="portfolio__about-project-main">
        <header className="portfolio__about-project-header">
          <h1 className="portfolio__about-project-heading">
            About this project
          </h1>
        </header>
        <div className="portfolio__about-project-container">
          <p className="portfolio__about-project-name">Retro games website</p>
          <div className="portfolio__about-project-container-grid">
            <div className="portfolio__about-project-inner-container">
              <img
                alt="project img"
                className="portfolio__about-project-main-img"
                src={retroImage}
              />
              <div className="portfolio__about-logo-container">
                <img alt="html logo" src={htmlLogo} />
                <img alt="css logo" src={cssLogo} />
                <img alt="react logo" src={reactLogo} />
                <img alt="firebase logo" src={firebaseLogo} />
              </div>
            </div>
            <div className="portfolio__about-project-about-container">
              <div className="portfolio__about-project-about-inner-container">
                <p className="portfolio__about-project-description">
                  Used technologies:
                </p>
                <ul className="portfolio__about-ul">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>REACT</li>
                  <li>FIREBASE</li>
                </ul>
              </div>
              <div className="portfolio__about-project-about-inner-container">
                <p className="portfolio__about-project-description">
                  What was the goal of this project and what did I learn from
                  it?
                </p>
                <ul className="portfolio__about-ul">
                  <li>
                    <span>1)</span> The goal of this project was to create an
                    e-commerce platform.
                  </li>
                  <li>
                    <span>2)</span> I learned how to make requests to an API and
                    work with the received data to create UI similar to the one
                    shown in the image;
                  </li>
                  <li>
                    <span>3)</span> Add the possibility for users to create
                    accounts, log in and log out from their accounts. For that I
                    used google firebase authentication;
                  </li>
                  <li>
                    <span>4)</span> From google firebase, I also used firebase
                    database to store individual users data;
                  </li>
                  <li>
                    <span>5)</span> Added restriction for the user so that if he
                    is not loged in he can't use the buy button to add items to
                    the cart or wishlist them;
                  </li>
                  <li>
                    <span>6)</span> Added page redirect. After the user creates
                    an account, it is loged in and will be redirected to the
                    shop page;
                  </li>
                  <li>
                    <span>7)</span> I used google maps API to display a fake
                    location of the company.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__about-project-improvement">
          <p className="portfolio__about-project-description portfolio__about-project-description--improvement">
            The things I know I could've done better
          </p>
        </div>
        {improvementsArr.map((obj, i) => {
          return (
            <ImprovementsComponent
              key={i}
              updates={obj.updates}
              wrongs={obj.wrongs}
            />
          );
        })}
      </main>
    </section>
  );
};

export default AboutProjectSection;
