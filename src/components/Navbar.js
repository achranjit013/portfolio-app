import React from "react";

export const Navbar = () => {
  // const hideSideMenu = () => {
  //   document.querySelector(".h").style.display = "none";
  // };

  return (
    <header className="h">
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
      </section>
    </header>
  );
};
