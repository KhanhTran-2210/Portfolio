import React from "react";
import { Col, Row } from "react-bootstrap";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import CSS3 from "../../Assets/TechIcons/css-3-svgrepo-com.svg";
import Cloudinary from "../../Assets/TechIcons/cloudinary-svgrepo-com.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Prisma from "../../Assets/TechIcons/light-prisma-svgrepo-com.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ANTD from "../../Assets/TechIcons/ant-design-svgrepo-com.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import HTML from "../../Assets/TechIcons/html-5-svgrepo-com.svg";
import Graph from "../../Assets/TechIcons/graphql-svgrepo-com.svg";
import Bootstrap from "../../Assets/TechIcons/bootstrap-svgrepo-com.svg";
import Nest from "../../Assets/TechIcons/nestjs-svgrepo-com.svg";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="html5" className="img-icon" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS3} alt="css3" className="img-icon" />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Nest} alt="nestjs" className="img-icon" />
        <div className="tech-icons-text">NestJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cloudinary} alt="cloudinary" className="img-icon" />
        <div className="tech-icons-text">Cloudinary</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Prisma} alt="prisma" className="img-icon" />
        <div className="tech-icons-text">Prisma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Graph} alt="GraphQL" className="img-icon" />
        <div className="tech-icons-text">GraphQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="Bootstrap" className="img-icon" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ANTD} alt="antd" className="img-icon" />
        <div className="tech-icons-text">Ant Design</div>
      </Col>
    </Row>
  );
}

export default Techstack;
