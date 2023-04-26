import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Myself <span className="purple"> Sudarshan Singh </span>
            and I am from <span className="purple"> Sydney, Australia.</span>
            <br /> I am about to complete <span className ="purple" >The coding Bootcamp from University of Sydney, and have Bachelor's in Information Systems as well.</span> In my bootcamp, I honed my 
            skills in web/software development and gained experience in building responsive and user friendly applications/websites. I'm Passionate about leveraging technology to solve real world problems and 
            improve user experience. I am always ready to learn new things. Right now, I am looking for a Junior developer/software engineer roles so that i can contribute to innovative projects 
            and collaborate with like-minded individuals. Thank you for visting my portfolio!.......
        
        
            <br />
            <br />
           When i'm not coding, you can find me 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading or
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " I am Passionate about using technology to create meaningful solutions and strive to build things that makes a difference "{" "}
          </p>
          <footer className="blockquote-footer">Sudarshan </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
