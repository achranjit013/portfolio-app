import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <section className="container flex header-section">
        <div className="header-info flex">
          <div>Ranjit</div>
          <div className="line">Soft. Engineer</div>
        </div>

        <label for="side-menu" className="hamb">
          <div className="hamb-menu flex">
            <span className="hamb-line"></span>
          </div>
        </label>

        <div className="header-menu">
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/recent-work">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/get-in-touch">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};
