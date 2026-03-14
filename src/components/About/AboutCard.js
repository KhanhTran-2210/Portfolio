import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tran Trong Khanh</span>{" "}
            from <span className="purple">HoChiMinhCity, VietNam</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer Intern</span>
            {/* at{" "}
            <span className="purple">Juspay</span>. */}
            <br />I graduated from{" "}
            <span className="purple">Cybersoft Academy</span> with a major in{" "}
            <span className="purple">Fullstack Developer</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Having coffee and enjoying the view. ☕🌅
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
