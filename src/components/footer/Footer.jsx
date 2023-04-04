import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        REHAN
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
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://teitter.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Rehan Khan. All rights reserved</small>
      </div>
    </footer>
  );
};
