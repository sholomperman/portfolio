import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zmanim from "../../Assets/Projects/ZmanimBot.png";
import bosxes from "../../Assets/Projects/boxes.png";
import remote from "../../Assets/Projects/remote.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zmanim}
              isBlog={false}
              title="Zmanim WhatsApp Bot"
              description="Zmanim WhatsApp Bot is a tool built using WhatsApp.js and Puppeteer. 
              It retrieves the Zmanim (Jewish prayer times that vary by day and location based on the sun) 
              from a website and sends them in a text format through WhatsApp."
              ghLink="https://github.com/sholomperman/zmanim"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bosxes}
              isBlog={false}
              title="Box Packer Helper"
              description="Optimize your packing process with our efficient Box Packer Helper! Powered by a MySQL server and NodeJS, 
              this web app simplifies warehouse tasks. Easily search for products, discover the perfect box, and input quantities. 
              Instantly receive suggestions on box allocation and surplus, streamlining your packing routine. Maximize efficiency"
              ghLink="https://github.com/sholomperman/Box_Packer_Helper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remote}
              isBlog={false}
              title="Smart lights Remote (Arduino + Alexa)"
              description="Elevate your home automation with our Arduino-powered IR Light Control project! Seamlessly integrate non-smart lights into your smart home ecosystem using Alexa voice commands. Simply instruct Alexa, 
              and watch as your ordinary light responds to infrared signals, transforming it into a smart,
              connected lighting solution. Experience the convenience of unified control and modernize your home effortlessly."
              ghLink="#"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
