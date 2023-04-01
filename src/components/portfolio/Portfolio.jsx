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
      item: "Portfolio item",
    },
    {
      img: IMG2,
      item: "Portfolio item",
    },
    {
      img: IMG3,
      item: "Portfolio item",
    },
    {
      img: IMG4,
      item: "Portfolio item",
    },
    {
      img: IMG5,
      item: "Portfolio item",
    },
    {
      img: IMG6,
      item: "Portfolio item",
    },
  ];
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {arr.map((elem) => {
          const { img, item } = elem;
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={img} alt="" />
              </div>
              <h3> {item}</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com" target="_blank" className="btn">
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="btn btn-primary"
                >
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
