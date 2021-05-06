import React from "react";
import "./About.css";

class About extends React.Component<{}, {}> {
  cardAbout = () => {
    return (
      <div className="about">
        <div className="about-card">
          <h1>Работу выполнил Татаринцев Вадим при поддержке Andersen lab.</h1>

          <h2>Стек технологий:</h2>
          <ul>
            <li>React</li>
            <li>Redux-Saga</li>
            <li>TypeScript</li>
            <li>Jest</li>
          </ul>
          <h3>
            Используемое{" "}
            <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer">
              API
            </a>
          </h3>
          <h3>
            Персональное{" "}
            <a
              href="https://cyberpunk-resume.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              резюме
            </a>
          </h3>
        </div>
      </div>
    );
  };

  render() {
    return this.cardAbout();
  }
}

export default About;
