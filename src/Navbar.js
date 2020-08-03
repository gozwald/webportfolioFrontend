import React from "react";
import "./App.css";
import { Link } from "react-scroll";

const Navbar = ({ home, about, projects, contact }) => {
  return (
    <>
      <ul className="menu" style={{ fontFamily: "Open Sans,sans-serif" }}>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <div className={home ? "active" : ""}>Home</div>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <div className={about ? "active" : ""}>About</div>
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <div className={projects ? "active" : ""}>Projects</div>
          </Link>
        </li>
        <li>
          <Link to="contactme" spy={true} smooth={true} duration={500}>
            <div className={contact ? "active" : ""}>Contact</div>
          </Link>
        </li>
        <li className="slider"></li>
      </ul>
    </>
  );
};

export default Navbar;
