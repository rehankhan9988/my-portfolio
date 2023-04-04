import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
export const Portfolio = () => {
  let arr = [
    {
      img: IMG1,
      item: "CRUD using Redux toolkit",
      gitLink: "https://github.com/rehankhan9988/crud-redux-toolkit",
      demoLink: "https://crud-toolkit-redux.netlify.app/",
    },
    {
      img: IMG2,
      item: "CRUD using FireBase",
      gitLink: "https://github.com/rehankhan9988/firebase",
      demoLink: "https://firebase-book.netlify.app/",
    },
    {
      img: IMG3,
      item: "CRUD using React Redux",
      gitLink: "https://github.com/rehankhan9988/crud-redux",
      demoLink: "https://mellow-bunny-a6f21f.netlify.app/",
    },
    {
      img: IMG4,
      item: "Samar React Template",
      gitLink: "https://github.com/rehankhan9988/clone-appgenii",
      demoLink: "https://glittery-khapse-445cab.netlify.app/",
    },
    {
      img: IMG5,
      item: "Appsgenii wesite first page",
      gitLink: "https://github.com/rehankhan9988/react-template",
      demoLink: "https://famous-griffin-7b8b93.netlify.app/",
    },
    {
      img: IMG6,
      item: "Portfolio item",
      gitLink: "https://github.com/rehankhan9988/crud-redux-toolkit",
      demoLink: "https://crud-toolkit-redux.netlify.app/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {arr.map((elem) => {
          const { img, item, gitLink, demoLink } = elem;
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={img} alt="" />
              </div>
              <h3> {item}</h3>
              <div className="portfolio_item-cta">
                <a href={gitLink} target="_blank" className="btn">
                  GitHub
                </a>
                <a href={demoLink} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
