import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sholom Perman </span>
            from <span className="purple"> Brooklyn, NY.</span>
            <br />
            I was employed as a software developer at Chabad.org.
            <br />
            I have completed a software developer boot camp at JETS - Jewish Educational Trade School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> DIY Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(126, 172, 136)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer style={{ color: "rgb(126, 172, 136)" }}>— Shalom</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
