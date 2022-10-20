import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";


const tech_stack = [
  "Javascript ES6+",
  "React.js",
  "Java",
  "Node.js",
  "HTML & CSS",
  "Python",
  "Selenium",
  "Robot Framework"
];

const tech_items = tech_stack.map((stack) => <li>{stack}</li>);

function About() {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>I am currently working as a <b>Software Developer</b> at <a href="">Wipro</a> while pursuing
              a <b>M.Tech in Software Engineering</b> from <a href="">Bits Pilani University. </a>
              I did my bachelors in Computer Applications from <a href="">Mahatma Gandhi University.</a>
          </p>
            <p>Here are some technologies I have been working with:</p>
            <ul className="tech-stack">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                );
              })}
            </ul>
            <p> Outside of work, I'm interested in following the developments of technologies.
               And traveling to new cities.</p>
          </div>
          <div className="about-image">
            <img src={"/images/me.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default About;
