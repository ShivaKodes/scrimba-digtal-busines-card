import React from "react";
import TextContent from "./TextContent";
import Button from "./Button";
import Header from "./Header";
import Hero from "../assets/image.png";
import "./Content.css";
export default function Content() {
  return (
    <div className="content">
      <img src={Hero} alt="hero" className="hero" />
      <div className="content-container">
        <Header />
        <Button />
        <TextContent />
      </div>
    </div>
  );
}
