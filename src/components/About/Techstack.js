import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiMysql,
  
} from "react-icons/di";
import { SiGraphql, SiExpress } from "react-icons/si";
import  { AiOutlineGithub } from "react-icons/ai"

function Techstack() {
  const renderTooltip = (technology) => (
    <Tooltip id={`${technology}-tooltip`}>{technology}</Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("HTML")}
        >
          <div className="icon-container">
            <DiHtml5 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("CSS")}
        >
          <div className="icon-container">
            <DiCss3 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("JavaScript")}
        >
          <div className="icon-container">
            <DiJavascript1 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Node.js")}
        >
          <div className="icon-container">
            <DiNodejs />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Express.js")}
        >
          <div className="icon-container">
            < SiExpress/>
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("React")}
        >
          <div className="icon-container">
            <DiReact />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("MySQL")}
        >
          <div className="icon-container">
            <DiMysql />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("MongoDB")}
        >
          <div className="icon-container">
            <DiMongodb />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("GraphQL")}
        >
          <div className="icon-container">
            <SiGraphql />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Github")}>
          <div className="icon-container">
            < AiOutlineGithub/>
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;

