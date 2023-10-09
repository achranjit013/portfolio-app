import React from "react";
import profilePic from "../assets/about me image.png";

export const Hero = () => {
  return (
    <section className="container hero-section flex" id="home">
      <div className="left-info flex">
        <div>
          Hi I'm <span>Ranjit Acharya</span>
        </div>
        <div>Soft. Engineer</div>
        <div>I love to code and teach other what I know.</div>
        <div>
          <a href="./assets/Resume-Ranjit-Acharya.pdf" download="">
            <button>
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="right-info flex">
        <img src={profilePic} alt="my profile image" />
      </div>
    </section>
  );
};
