import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MONISH KUMAR A </span> 
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am a self-driven and motivated software developer with experience 
            in Web technologies (HTML, CSS, JS), Python, Java, and SQL.
            <br />
            I have worked on multiple real-world projects, including 
            Learning Management Systems, Image-Based Graphical Password Authentication, 
            and AI-driven platforms like SafeSpace.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging About Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop growing!"{" "}
          </p>
          <footer className="blockquote-footer">Monish Kumar A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
