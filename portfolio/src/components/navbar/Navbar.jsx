import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="portfolio__navbar">
      <ul className="portfolio__navbar-ul">
        <li className="portfolio__navbar-li">Home</li>
        <li className="portfolio__navbar-li">About me</li>
        <li className="portfolio__navbar-li">My projects</li>
        <li className="portfolio__navbar-li">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
