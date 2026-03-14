import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fiverr from "../../Assets/Projects/fiverr.png";
import corpvison from "../../Assets/Projects/corpvison.png";
import pinterest from "../../Assets/Projects/pinterest.png";
import movie from "../../Assets/Projects/movie.png";
import youtube from "../../Assets/Projects/youtube.png";
import movieapp from "../../Assets/Projects/movieapp.png";

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
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Booking"
              description={
                <>
                  <p>
                    A movie ticket booking web application built with ReactJS.
                  </p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>
                    Built APIs for user management (register, login, update
                    profile, delete account).
                  </li>
                  <li>Implemented authentication using JWT token.</li>
                  <li>
                    Developed filtering features to retrieve user information
                    (name, id, role).
                  </li>
                  <li>
                    Implemented booking system: cinema room list, showtime
                    creation, and seat booking.
                  </li>
                  <li>Designed relational database schema using SQL.</li>
                  <br />
                  <p>
                    Tech stack: ReactJS, JavaScript, Redux, REST API, HTML5,
                    CSS3, Git, Antd, Axios
                  </p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/Captone_ReactJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fiverr}
              isBlog={false}
              title="Fiverr"
              description={
                <>
                  <p>A job searching platform inspired by Fiverr.</p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>Developed admin dashboard interface.</li>
                  <li>
                    Implemented features to manage users, job listings, and job
                    categories.
                  </li>
                  <li>
                    Built CRUD operations (Create, Read, Update, Delete) for
                    jobs and categories.
                  </li>
                  <li>Implemented image upload functionality.</li>
                  <li>Developed authentication system for admin login.</li>
                  <br />
                  <p>
                    Tech stack: ReactJS, JavaScript, Redux, REST API, HTML5,
                    CSS3, Git, Antd, Axios
                  </p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/EndProject_FiverAdmin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corpvison}
              isBlog={false}
              title="Corpvison"
              description={
                <>
                  <p>
                    A responsive static website focusing on UI effects and
                    layout.
                  </p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>Developed responsive layouts using Bootstrap.</li>
                  <li>
                    Implemented UI animations and visual effects (fade in/out).
                  </li>
                  <li>Optimized layout for multiple screen sizes.</li>

                  <br />
                  <p>Tech stack: JavaScript, HTML5, CSS3, Bootstrap</p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/CORPVISON-Bootstrap"
              demoLink="https://corpvison-bootstrap.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinterest}
              isBlog={false}
              title="Pinterest(BE)"
              description={
                <>
                  <p>
                    An image sharing platform where users can upload images with
                    descriptions.
                  </p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>Developed RESTful APIs (GET, POST, PUT, DELETE).</li>
                  <li>Implemented multi-image upload functionality.</li>
                  <li>
                    Built authentication and authorization using token
                    validation.
                  </li>
                  <li>Designed relational database structure using SQL.</li>

                  <br />
                  <p>
                    Tech stack: NodeJS, ExpressJS, SQL, JWT, REST API, Postman,
                    Git
                  </p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/Capstone_Pinterest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie(BE)"
              description={
                <>
                  <p>
                    Backend system supporting a movie ticket booking platform.
                  </p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>
                    Built APIs for user management (register, login, update
                    profile, delete account).
                  </li>
                  <li>Implemented authentication using JWT token.</li>
                  <li>
                    Developed filtering features to retrieve user information
                    (name, id, role).
                  </li>
                  <li>
                    Implemented booking system: cinema room list, showtime
                    creation, and seat booking.
                  </li>
                  <li>Designed relational database schema using SQL.</li>

                  <br />
                  <p>
                    Tech stack: NodeJS, NestJS, SQL, JWT, Prisma, REST API,
                    Postman, Git
                  </p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/Movie_Nestjs.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube(BE)"
              description={
                <>
                  <p>
                    Backend system supporting a movie ticket booking platform.
                  </p>
                  <br />
                  <p>Responsibilities:</p>
                  <li>Developed RESTful APIs (GET, POST, PUT, DELETE).</li>
                  <li>
                    Implemented authentication and authorization using JWT.
                  </li>
                  <li>Built image upload functionality.</li>
                  <li>
                    Used Prisma ORM with Code First approach to manage database
                    schema.
                  </li>

                  <br />
                  <p>
                    Tech stack: NodeJS, ExpressJS, Prisma ORM, SQL, JWT, Git,
                    Postman
                  </p>
                </>
              }
              ghLink="https://github.com/KhanhTran-2210/ExpressJS_Node_be_youtube"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
