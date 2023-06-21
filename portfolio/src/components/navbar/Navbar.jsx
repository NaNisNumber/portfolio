import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="portfolio__navbar">
      <ul className="portfolio__navbar-ul">
        <Link
          duration={500}
          smooth={true}
          activeClass="active-nav-link"
          spy={true}
          to="hero"
        >
          <li className="portfolio__navbar-li">Home</li>
        </Link>
        <Link
          duration={500}
          smooth={true}
          activeClass="active-nav-link"
          spy={true}
          to="about"
        >
          <li className="portfolio__navbar-li">About me</li>
        </Link>
        <Link
          duration={500}
          smooth={true}
          activeClass="active-nav-link"
          spy={true}
          to="portfolio"
        >
          <li className="portfolio__navbar-li">My projects</li>
        </Link>
        <RouterLink>
          <li className="portfolio__navbar-li">Contact</li>
        </RouterLink>
      </ul>
    </nav>
  );
};

export default Navbar;
