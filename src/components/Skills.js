import React from "react";

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>
      <div className="container skills-content flex">
        <div className="html skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-html5"></i>
          </div>
          <p>HTML</p>
        </div>
        <div className="css skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <p>CSS</p>
        </div>
        <div className="bootstrap skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-bootstrap"></i>
          </div>
          <p>Bootstrap</p>
        </div>
        <div className="js skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-square-js"></i>
          </div>
          <p>JS</p>
        </div>
        <div className="react skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-react"></i>
          </div>
          <p>React</p>
        </div>
        <div className="github skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-github"></i>
          </div>
          <p>Github</p>
        </div>
        <div className="figma skills-info flex">
          <div className="skills-icon flex">
            <i className="fa-brands fa-figma"></i>
          </div>
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};
