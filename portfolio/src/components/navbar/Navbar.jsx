import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ setCurrentScrollLocation }) => {
  return (
    <nav className="portfolio__navbar">
      <ul className="portfolio__navbar-ul">
        <RouterLink
          onClick={() => {
            setCurrentScrollLocation("hero");
          }}
          to={"/"}
        >
          <li className="portfolio__navbar-li">Home</li>
        </RouterLink>

        <RouterLink
          onClick={() => {
            setCurrentScrollLocation("about");
          }}
          to={"/"}
        >
          <li className="portfolio__navbar-li">About me</li>
        </RouterLink>
        <RouterLink
          onClick={() => {
            setCurrentScrollLocation("portfolio");
          }}
          to={"/"}
        >
          <li className="portfolio__navbar-li">My projects</li>
        </RouterLink>
        <RouterLink
          onClick={() => {
            setCurrentScrollLocation("contact");
          }}
          to={"/"}
        >
          <li className="portfolio__navbar-li">Contact</li>
        </RouterLink>
      </ul>
    </nav>
  );
};

export default Navbar;
