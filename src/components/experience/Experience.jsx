import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React JS</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
