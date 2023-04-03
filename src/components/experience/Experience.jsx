import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
export const Experience = () => {
  let arr = [
    {
      skill: "HTML",
      experience: "Mid-level",
    },
    {
      skill: "CSS",
      experience: "Intermediate",
    },
    {
      skill: "Javascript",
      experience: "Intermediate",
    },
    {
      skill: "React JS",
      experience: "Mid-level",
    },
    {
      skill: "React Native",
      experience: "Intermediate",
    },
    {
      skill: "Bootstrap",
      experience: "Mid-level",
    },
    {
      skill: "React-Redux",
      experience: "Mid-level",
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {arr.map((item, ind) => {
              const { skill, experience } = item;
              return (
                <article className="experience_details" key={ind}>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text_light">{experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
