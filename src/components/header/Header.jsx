import React from "react";
import { CTA } from "./CTA";
import "./header.css";
import me from "../../assets/me.png";
import { HeaderSocials } from "./HeaderSocials";
export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>M Rehan Khan</h1>
        <h5 className="text-light">front end developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
