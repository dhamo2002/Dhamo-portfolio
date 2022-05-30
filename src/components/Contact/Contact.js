import { IconButton } from "@material-ui/core";
import { GitHub, Instagram, LinkedIn, Email, Call } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact Me</h1>
      <h2>______</h2>
      <div className="contact__container">
        <p>
        <IconButton><Email /></IconButton><span>dhamodarvetri@gmail.com</span>
        </p>
        <p>
        <IconButton><Call /></IconButton><span>8838009622</span>
        </p>
    
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/dhamodar-v-6a3195204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/dhamo2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
          <a
            href="https://instagram.com/thz_is_dhamo?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;