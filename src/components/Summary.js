import React from "react";

export const Summary = () => {
  return (
    <section className="container summary-section flex">
      <div className="summary-info flex">
        <div className="summary-logo flex">
          <i className="fa-solid fa-graduation-cap"></i>
        </div>
        <div>
          <span>IT</span>
          <p>Graduate</p>
        </div>
      </div>

      <div className="summary-bar"></div>

      <div className="summary-info flex">
        <div className="summary-logo flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>5 + Projects</span>
          <p>Completed</p>
        </div>
      </div>

      <div className="summary-bar"></div>

      <div className="summary-info flex">
        <div className="summary-logo flex">
          <i className="fa-solid fa-laptop-file"></i>
        </div>
        <div>
          <span>1 + Years</span>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};
