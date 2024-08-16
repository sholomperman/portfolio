import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFiletypeHtml } from "react-icons/bs";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiFirebase,
  SiArduino,
  SiCsharp,
  SiCss3,
  SiFlutter
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
        <BsFiletypeHtml />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiCsharp />
      </Col><Col xs={5} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
    </Row>
  );
}

export default Techstack;
