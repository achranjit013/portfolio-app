import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section flex">
        <div className="footer-links">
          <h3>Page Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
      </div>

      <p>&copy; All Rights Reserved.</p>
    </footer>
  );
};
