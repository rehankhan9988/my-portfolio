import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  let arr = [
    {
      icon: <FaAward className="about_icon" />,
      item: "Experience",
      details: "6 Months Working",
    },
    {
      icon: <FiUsers className="about_icon" />,
      item: "Clients",
      details: "No",
    },
    {
      icon: <VscFolderLibrary className="about_icon" />,
      item: "Projects",
      details: "2 Completed",
    },
  ];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {arr.map((list, ind) => {
              const { icon, item, details } = list;
              return (
                <article className="about_card" key={ind}>
                  {icon}
                  <h5>{item}</h5>
                  <small>{details}</small>
                </article>
              );
            })}
          </div>

          <p>
            As a frontend developer with 6 months of experience, I'm passionate
            about creating beautiful and user-friendly web experiences. I
            specialize in HTML, CSS, JavaScript, and React and work closely with
            clients to ensure timely project delivery. Let's discuss your next
            project!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
