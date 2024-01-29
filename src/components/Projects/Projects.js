import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { ProjectsData } from "./projectData";

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
          {
            ProjectsData?.map((item, index) => (
          <Col key={item.id} md={4} className="project-card">
            <ProjectCard
              imgPath={item.imgPath}
              isBlog={item.isBlog}
              title={item.title}
              description={item.description}
              ghLink={item.ghLink}
              // demoLink="#"
            />
          </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
