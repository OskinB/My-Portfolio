import React from "react";
import "./App.scss";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <nav>
        <h1>Ósk Björns</h1>
        <h2>Jr. Web Developer</h2>
        <ul>
          <a href="index.html">
            <li>Portfolio</li>
          </a>
          <a href="about-me.html">
            <li>About Me</li>
          </a>
          <a href="resume.html">
            <li>Resume</li>
          </a>
        </ul>
      </nav>

      <div className="container">
        <section className="page-title">
          <h1>My Portfolio</h1>
          <h2>Take a look at my work</h2>
        </section>

        <section className="portfolio-cards">
          <ProjectCard/>
        </section>
      </div>
    </div>
  );
}

export default App;
