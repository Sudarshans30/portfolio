import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommercebackend from "../../Assets/Projects/Ecommercebackend.jpg";
// import EmployeeTemplate from "../../Assets/Projects/EmployeeTemplates.png";
import Jatepwa from "../../Assets/Projects/Jatepwa.jpg";
import NoteTakingAPP from "../../Assets/Projects/NoteTakingAPP.png";
import PasswordGenerator from "../../Assets/Projects/PasswordGenerator.png";
import Platepals from "../../Assets/Projects/Platepals.png";
import TalentBridge from "../../Assets/Projects/TalentBridge.jpg";
import WeatherDashboard from "../../Assets/Projects/WeatherDashboard.png";
import WorkdaySchedular from "../../Assets/Projects/WorkdaySchedular.png";
import Bazaarify from '../../Assets/Projects/Bazaarify.png';

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
              imgPath={Bazaarify}
              isBlog={false}
              title="Bazaarify"
              description="This was an multi-vendor ecommerce paltform made with using MERN technologies, the application lets the user to manage and sell their products. To access the admin account, login with username and password: admin@a.com & Pass123456"
              ghLink="https://github.com/Sudarshans30/Bazarify"
              demoLink="https://bzfiyapp.herokuapp.com/"
              
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalentBridge}
              isBlog={false}
              title="TalentBridge"
              description="This website was a university project to showcase our Full-stack ability with relational databases. We used Node.js and Express.js to create RESTful APIs. This application helps new job seeker to find jobs by creating their profiles."
              ghLink="https://github.com/Sudarshans30/TalentBridge-App"
              demoLink="https://talent-bridge-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Platepals}
              isBlog={false}
              title="Plate pals"
              description=" The purpose of this application was to create an online platform, full of recipes and drinks. We used third party APIs to fetch the data from third party APIs"
              ghLink = " https://github.com/wolldog/plate-pals"
              demoLink="https://wolldog.github.io/plate-pals/ "    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherDashboard}
              isBlog={false}
              title=" Weather Dashboard"
              description=" This application uses an openweather API to display weather data to the user based on which city they search for. this application also displays the weather data for the next five days of the searched city"
              ghLink = " https://github.com/Sudarshans30/weather-Dashboard"
              demoLink="https://sudarshans30.github.io/weather-Dashboard/ "    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WorkdaySchedular}
              isBlog={false}
              title="Workday schedular"
              description="This application is used as a peronal planner. Its a simple calender app for scheduling the user's work day. The user can edit, save and delete notes"
              ghLink=" https://github.com/Sudarshans30/work-Day-Schedular"
              demoLink=" https://sudarshans30.github.io/work-Day-Schedular/"    
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ NoteTakingAPP }
              isBlog={false}
              title="NoteTaking app"
              description=" This application utilise Express.js, to allow users to create notes that will be saved on the server, and to edit and delete them afterwards as well."
              ghLink=" https://github.com/Sudarshans30/Note-Taker"
              demoLink="https://deploying-note-taking-web.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PasswordGenerator}
              isBlog={false}
              title="Password generator"
              description="  This application mostly relies on javascript to executes a number of different function to generate a password. When the user will click the password button and answer the prompts, the javascript will executes and generate the random password as per the prompts."
              ghLink="https://github.com/Sudarshans30/password-generator-in-javascript"
              demoLink=" https://sudarshans30.github.io/password-generator-in-javascript/" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommercebackend}
              isBlog={false}
              title="Ecommerce backend"
              description="The goal of this project is to manage the database of products and tags through API calls. The demo video of this backend is in the Readme file of the repository and the Rest APIs are executed by Insomnia."
              ghLink= "https://github.com/Sudarshans30/ecommerce-backend"
              demoLink="https://github.com/Sudarshans30/ecommerce-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jatepwa}
              isBlog={false}
              title="Jatepwa.jpg"
              description="This project was a single page text editor that runs in browser and meets the PWA criteria. It features a number of data persistance techniques that serve as redundancy in case one of the option is not supported by the browser."
              ghLink="https://github.com/Sudarshans30/JATE"
              demoLink="https://github.com/Sudarshans30/JATE/"              
            />
          </Col>

          

          
          

          

        

     
          






        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
