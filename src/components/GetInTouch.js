import React from "react";

export const GetInTouch = () => {
  return (
    <section className="get-in-touch" id="contact">
      <h2 className="title">
        <span>Get In Touch</span>
      </h2>
      <div className="container git-content flex">
        <div className="git-icon flex">
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <p>OR</p>
        <a href="mailto:achranjit013@gmail.com">
          <div className="git-email flex">
            <span>achranjit013@gmail.com</span>
            <div className="send-icon flex">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
