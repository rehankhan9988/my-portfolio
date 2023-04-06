import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiReplit } from "react-icons/si";
import "./header.css";
export const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/m-rehan-khan-b6855b249/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/rehankhan9988" target="_blank">
        <FaGithub />
      </a>
      <a href="https://replit.com/@M-RehanRehan2/practice" target="_blank">
        <SiReplit />
      </a>
    </div>
  );
};
