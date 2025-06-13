import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chat App"
              description="A full-stack chat application built with the MERN stack. The application enables users to send and receive real-time messages, create group chats, and manage their conversations. It also includes features for user authentication, message history, and multimedia sharing to enhance the chat experience."
             ghLink="https://github.com/Dixit1010/chat-app_full_stack"
              demoLink="https://chat-app-full-stack-h5ys.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="JOB-ZEE"
              description="JOB-ZEE is a full-stack job portal application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to search for jobs, post jobs, and apply for jobs. Job seekers can upload their resumes, making it easier for employers to review their qualifications. Employers can post job listings and manage them efficiently. This application streamlines the job search and recruitment process, providing a user-friendly interface for both job seekers and employers."
              ghLink="https://github.com/Dixit1010/JOB_ZEE_BACKEND.git"
              demoLink="https://job-ezee.netlify.app/"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sorting Algo Visualizer"
              description="A sorting visualizer that brings algorithms to life! This interactive tool visually demonstrates sorting techniques like Bubble Sort, Merge Sort, and Quick Sort in real time, helping users understand their step-by-step operations. Perfect for learning, debugging, and exploring algorithm efficiency."
              ghLink="https://github.com/Dixit1010/sorting-visualizer-.git"
               demoLink="https://sorting-visualizzeer.netlify.app/" 
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
             // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Car Prices Prediction"
              description="This project is a car price prediction model that uses machine learning algorithms to predict the price of a car based on its features. The model is trained on a dataset of car prices and their features, and can be used to predict the price of a car based on its features."
             ghLink="https://github.com/Dixit1010/Car-Prices-Prediction.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}

          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
