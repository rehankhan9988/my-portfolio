import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        MUHAMMAD REHAN KHAN
      </a>
      <ul className="permalinks">
        <i>
          <a href="#">Home</a>
        </i>
        <i>
          <a href="#about">About</a>
        </i>
        <i>
          <a href="#experience">Experience</a>
        </i>
        <i>
          <a href="#portfolio">Portfolio</a>
        </i>
        <i>
          <a href="#contact">Contact</a>
        </i>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/rahankhan.khan.50702" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rehan_khan998864/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Rehan998864" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Rehan Khan</small>
      </div>
    </footer>
  );
};
