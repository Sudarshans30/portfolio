import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Firstly, Hello and welcome to my portfolio. I am a very passionate developer with a strong love for coding. My expertise lies in using
              modern web technologies and frameworks to build scalable, efficient and visually appealing web applications.
              {/* I fell in love with coding and I have at least learnt
              something, I think… 🤷‍♂️ */}
              <br />
              <br />I have a strong foundation in
              <i>
                <b className="purple">  Javascript and its frameworks, </b>
                and I am consistently learning and keeping up with latest advancements in the field
              </i>
              <br />
              <br />
              In addition, I have a keen interest in exploring the fields of &nbsp;
              <i>
                <b className="purple">Machine learning</b> and
                {" "}
                <b className="purple">
                 Cloud computing.
                </b>
              </i>
              <br />
              <br />
              When it  comes to development, I am experienced in using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as 
              <i>
                <b className="purple"> React.js </b>
                to build robust and responsive applications. 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sudarshans30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >  */}
                  {/* <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sudarshan-singh-4a9966b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sudarshan_singh30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
