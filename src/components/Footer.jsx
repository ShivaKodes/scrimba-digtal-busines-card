import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/Facebook Icon.png";
import instagram from "../assets/Instagram Icon.png";
import github from "../assets/Github Icon.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <img src={twitter} alt="twitter-logo" className="twiiter logo" />
      <img src={facebook} alt="facebook-logo" className="facebook logo" />
      <img src={instagram} alt="instagram-logo" className="instagram logo" />
      <img src={github} alt="github-logo" className="github logo" />
    </div>
  );
}
