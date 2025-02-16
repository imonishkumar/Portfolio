import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgAuth from "../../Assets/Projects/auth.png";
import imgChatbot from "../../Assets/Projects/chatbot.png";
import imgLMS from "../../Assets/Projects/lms.png";
import imgSafeSpace from "../../Assets/Projects/safespace.png";
import imgSMS from "../../Assets/Projects/sms.png";
import imgTrashToTreasure from "../../Assets/Projects/trash.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgAuth}
              isBlog={false}
              title="Image-Based Graphical Password Authentication"
              description="A secure authentication system using image-based graphical passwords, built with Flask and PostgreSQL. Features image-coordinate-based authentication and robust security measures."
              ghLink="https://github.com/imonishkumar/GPA"
              // demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgLMS}
              isBlog={false}
              title="Learning Management System (LMS)"
              description="Developed an LMS using PHP, featuring secure user authentication, dynamic course management, and interactive quizzes. Developed for Company"
              // ghLink="https://github.com/your-github-repo"
              // demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSMS}
              isBlog={false}
              title="Student Management System (SMS)"
              description="Built a system to manage student enrollment, attendance tracking, and academic progress. Developed using PHP, HTML, CSS, JavaScript, and SQL for the AI&DS department."
              ghLink="https://github.com/imonishkumar/Student-Management-System"
              // demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgChatbot}
              isBlog={false}
              title="Symptom Checker Chatbot"
              description="A chatbot built using Python and ML to help users identify potential health issues based on their symptoms. Suggests probable diagnoses and next steps."
              ghLink="https://github.com/imonishkumar/Symptom-Checker-Chatbot"
              // demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgSafeSpace}
              isBlog={false}
              title="SAFESPACE - AI-Driven Counseling"
              description="A research project - AI-powered anonymous counseling platform designed to offer private and empathetic support, connecting users with professionals and experienced advisors."
              // ghLink="https://github.com/your-github-repo"
              // demoLink="#"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgTrashToTreasure}
              isBlog={false}
              title="Trash to Treasure"
              description="A research project on transforming waste disposal into a rewarding experience using AI-based smart bins that incentivize recycling."
              // ghLink="https://github.com/your-github-repo"
              // demoLink="#"  
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
