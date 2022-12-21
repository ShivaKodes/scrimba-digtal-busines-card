import React from "react";

import mail from "../assets/Mail.png";
import linkedin from "../assets/linkedin.png";
import "./Button.css";
export default function Button() {
  return (
    <div className="button">
      <button className="mail-btn">
        <img src={mail} alt="mail-logo" className="mail" />
        <p>Mail</p>
      </button>
      <button className="linkedin-btn">
        <img src={linkedin} alt="linkedin-logo" className="linkedin" />
        <p>Linkedin</p>
      </button>
    </div>
  );
}
