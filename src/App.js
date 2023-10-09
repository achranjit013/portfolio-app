import "./App.css";
import "./MediaQuery.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { GetInTouch } from "./components/GetInTouch";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { RecentWork } from "./components/RecentWork";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";

function App() {
  return (
    <>
      {/* dark mode checkbox */}
      <input type="checkbox" id="darkMode"></input>
      <div className="wrapper" id="scroll-up">
        {/* Hamburger icon */}
        <input type="checkbox" id="side-menu"></input>

        <Navbar />

        {/* dark mode toggle, related to dark mode checkbox */}
        <div class="container">
          <label for="darkMode" class="dark-mode-toggle">
            <i class="fa-solid fa-circle-half-stroke"></i>
          </label>
        </div>

        <Hero />
        <Summary />
        <Skills />
        <RecentWork />
        <AboutMe />
        <GetInTouch />
        <Footer />

        {/* scroll up */}
        <a href="#scroll-up">
          <div class="scroll-up flex">
            <i class="fa-solid fa-angles-up"></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
