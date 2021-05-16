import React from "react";
import "./About.css";

class About extends React.PureComponent<{}, {}> {
  cardAbout = (): JSX.Element => {
    return (
      <div className="about">
        <div className="about-card">
          <h1>The work was performed by Vadim Tatarintsev with the support of Andersen lab.</h1>

          <h2>Technology Stack:</h2>
          <ul>
            <li>React</li>
            <li>Redux-Saga</li>
            <li>TypeScript</li>
            <li>Jest</li>
          </ul>

          <h3>
            Using{" "}
            <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer">
              API
            </a>
          </h3>

          <h3>
            Personal{" "}
            <a
              href="https://cyberpunk-resume.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </h3>

        </div>
      </div>
    );
  };

  render(): JSX.Element {
    return this.cardAbout();
  }
}

export default About;
