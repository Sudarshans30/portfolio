import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is <span className="purple">Sudarshan Singh</span> and I'm from <span className="purple">Sydney, Australia</span>.
            <br /> I'm about to complete the <span className="purple">coding bootcamp</span> from the <span className="purple">University of Sydney</span>, and I also hold a degree in <span className="purple">Information Systems</span>. 
            Through my academic and bootcamp experiences, I've developed a deep understanding of how <span className="purple">technology</span> can be used to solve complex problems.
            <br />
            As a detail-oriented and enthusiastic <span className="purple">programmer</span>, I'm passionate about developing <span className="purple">clean, efficient code</span> that can deliver real-world solutions. 
            With a solid foundation in various <span className="purple">programming languages</span> and <span className="purple">technologies</span>, I'm excited to tackle new challenges and collaborate with others to create innovative solutions.
            <br />
            In addition to my technical skills, my degree in <span className="purple">Information Systems</span> has given me a broader perspective on how <span className="purple">technology</span> can be used to help organizations operate more efficiently and effectively. 
            I've gained valuable experience in <span className="purple">project management</span>, <span className="purple">data analysis</span>, and <span className="purple">systems design</span> that I'm eager to apply in my coding work.
            <br />
            In my <span className="purple">portfolio</span>, you'll find a selection of projects that demonstrate my skills and approach to coding. Whether I'm working on a personal project or collaborating with a team, 
            I'm committed to delivering high-quality work that meets the needs of my clients or users. Thanks for viewing my portfolio and feel free to contact me.
            <br />
            <br />
            When I'm not coding, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Working out</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Reading</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Travelling</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am passionate about using <span className="purple">technology</span> to create meaningful solutions and strive to build things that make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Sudarshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
