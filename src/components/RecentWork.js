import React from "react";
import recentWorkImg1 from "../assets/my recent work 1.png";
import recentWorkImg2 from "../assets/my recent work 2.png";
import recentWorkImg3 from "../assets/my recent work 3.png";
import recentWorkImg4 from "../assets/my recent work 4.png";

export const RecentWork = () => {
  return (
    <section className="recent-work" id="projects">
      <h2 className="title">
        <span>My Recent Work</span>
      </h2>
      <div className="container recent-work-container grid">
        <div className="recent-work-content">
          <div>
            <img src={recentWorkImg1} alt="my recent work" />
          </div>
          <div className="container flex recent-work-info">
            <h3>Personal Portfolio Web Site</h3>
            <p>April 2023</p>
            <div>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="recent-work-content">
          <div>
            <img src={recentWorkImg2} alt="my recent work" />
          </div>
          <div className="container flex recent-work-info">
            <h3>Personal Portfolio Web Site</h3>
            <p>April 2023</p>
            <div>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="recent-work-content">
          <div>
            <img src={recentWorkImg3} alt="my recent work" />
          </div>
          <div className="container flex recent-work-info">
            <h3>Personal Portfolio Web Site</h3>
            <p>April 2023</p>
            <div>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="recent-work-content">
          <div>
            <img src={recentWorkImg4} alt="my recent work" />
          </div>
          <div className="container flex recent-work-info">
            <h3>Personal Portfolio Web Site</h3>
            <p>April 2023</p>
            <div>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
