import React from "react";
import "./TextContent.css";

export default function TextContent() {
  return (
    <div className="text-container">
      <h3 className="heading">About</h3>
      <p className="paragraph">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3 className="heading">Interests</h3>
      <p className="paragraph">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
