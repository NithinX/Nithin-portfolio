import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";


const tech_stack = [
  "Javascript ES6+",
  "Python",
  "React.js",
  "Java",
  "Node.js",
  "HTML & CSS",
  "Selenium",
  "MongoDB",
  "Express.js",
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
          <p>I am currently a fourth year <b>Computer Science</b> major at
            <a href=""> University of Toronto</a>.
            After graduation, I will be joining{" "}
            <a href="https://www.aboutamazon.com/">Amazon</a> as a{" "}
            <b>Software Development Engineer</b> while undertaking a part-time
            <b> Master's of Science</b> in <b>Software Engineering </b>at{" "}
            <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
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
            <p> Outside of work, I'm interested in following the developments of science. 
              I also play a lot of video games. And make TikToks.</p>
          </div>
          <div className="about-image">
            <img src={"/images/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default About;
