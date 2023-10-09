import React from "react";
import aboutMeImg from "../assets/about me image.png";

export const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="container about-me-container flex">
        <div className="about-me-img flex">
          <img src={aboutMeImg} alt="about me image" />
        </div>
        <div className="about-me-desc">
          <h1>Ranjit Acharya</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            perferendis assumenda fugiat ipsum in corrupti rerum, cupiditate
            eligendi. Eligendi, ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dicta praesentium ab. Excepturi accusamus suscipit at amet labore
            praesentium quod numquam dolorum harum, veritatis rerum quas
            laboriosam! Pariatur, dolor veritatis.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Movie</span>
              <span>Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
