import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import random from "../../Assets/Projects/random.png";
import cg1 from "../../Assets/Projects/CodeGeek/SC1.png";
import cg2 from "../../Assets/Projects/CodeGeek/SC2.png";
import cg3 from "../../Assets/Projects/CodeGeek/SC3.png";
import cg4 from "../../Assets/Projects/CodeGeek/SC4.png";
import cg5 from "../../Assets/Projects/CodeGeek/SC5.png";
import cg6 from "../../Assets/Projects/CodeGeek/SC6.png";
import cg7 from "../../Assets/Projects/CodeGeek/SC7.png";
import cg8 from "../../Assets/Projects/CodeGeek/SC8.png";
import cg9 from "../../Assets/Projects/CodeGeek/SC9.png";
import cg10 from "../../Assets/Projects/CodeGeek/SC10.png";
import cg11 from "../../Assets/Projects/CodeGeek/SC11.png";
import cg12 from "../../Assets/Projects/CodeGeek/SC12.png";
import cg13 from "../../Assets/Projects/CodeGeek/SC13.png";
import cg14 from "../../Assets/Projects/CodeGeek/SC14.png";
import cg15 from "../../Assets/Projects/CodeGeek/SC15.png";
import cg16 from "../../Assets/Projects/CodeGeek/SC16.png";
import cg17 from "../../Assets/Projects/CodeGeek/SC17.png";
import cg18 from "../../Assets/Projects/CodeGeek/SC18.png";
import cg19 from "../../Assets/Projects/CodeGeek/SC19.png";
import cg20 from "../../Assets/Projects/CodeGeek/SC20.png";
import cg21 from "../../Assets/Projects/CodeGeek/SC21.png";
import cg22 from "../../Assets/Projects/CodeGeek/SC22.png";
import cg23 from "../../Assets/Projects/CodeGeek/SC23.png";
import cg24 from "../../Assets/Projects/CodeGeek/SC24.png";

import sc1 from "../../Assets/Projects/Spotify/Spotify (1).png";
import sc2 from "../../Assets/Projects/Spotify/Spotify (2).png";
import sc3 from "../../Assets/Projects/Spotify/Spotify (3).png";
import sc4 from "../../Assets/Projects/Spotify/Spotify (4).png";
import sc5 from "../../Assets/Projects/Spotify/Spotify (5).png";
import sc6 from "../../Assets/Projects/Spotify/Spotify (6).png";
import sc7 from "../../Assets/Projects/Spotify/Spotify (7).png";
import sc8 from "../../Assets/Projects/Spotify/Spotify (8).png";
import sc9 from "../../Assets/Projects/Spotify/Spotify (9).png";

import nf1 from "../../Assets/Projects/Netflix/Netflix (1).png";
import nf2 from "../../Assets/Projects/Netflix/Netflix (2).png";
import nf3 from "../../Assets/Projects/Netflix/Netflix (3).png";
import nf4 from "../../Assets/Projects/Netflix/Netflix (4).png";
import nf5 from "../../Assets/Projects/Netflix/Netflix (5).png";
import nf6 from "../../Assets/Projects/Netflix/Netflix (6).png";

import fr1 from "../../Assets/Projects/FunRento/FunRento (1).png";
import fr2 from "../../Assets/Projects/FunRento/FunRento (2).png";
import fr3 from "../../Assets/Projects/FunRento/FunRento (3).png";
import fr4 from "../../Assets/Projects/FunRento/FunRento (4).png";
import fr5 from "../../Assets/Projects/FunRento/FunRento (5).png";
import fr6 from "../../Assets/Projects/FunRento/FunRento (6).png";
import fr7 from "../../Assets/Projects/FunRento/FunRento (7).png";
import fr8 from "../../Assets/Projects/FunRento/FunRento (8).png";
import fr9 from "../../Assets/Projects/FunRento/FunRento (9).png";
import fr10 from "../../Assets/Projects/FunRento/FunRento (10).png";
import fr11 from "../../Assets/Projects/FunRento/FunRento (11).png";
import fr12 from "../../Assets/Projects/FunRento/FunRento (12).png";
import fr13 from "../../Assets/Projects/FunRento/FunRento (13).png";
import fr14 from "../../Assets/Projects/FunRento/FunRento (14).png";
import fr15 from "../../Assets/Projects/FunRento/FunRento (15).png";
import fr16 from "../../Assets/Projects/FunRento/FunRento (16).png";

import cecs1 from "../../Assets/Projects/CECS/CECS (1).png";
import cecs2 from "../../Assets/Projects/CECS/CECS (2).png";
import cecs3 from "../../Assets/Projects/CECS/CECS (3).png";
import cecs4 from "../../Assets/Projects/CECS/CECS (4).png";
import cecs5 from "../../Assets/Projects/CECS/CECS (5).png";
import cecs6 from "../../Assets/Projects/CECS/CECS (6).png";
import cecs7 from "../../Assets/Projects/CECS/CECS (7).png";
import cecs8 from "../../Assets/Projects/CECS/CECS (8).png";
import cecs9 from "../../Assets/Projects/CECS/CECS (9).png";
import cecs10 from "../../Assets/Projects/CECS/CECS (10).png";
import cecs11 from "../../Assets/Projects/CECS/CECS (11).png";
import cecs12 from "../../Assets/Projects/CECS/CECS (12).png";
import cecs13 from "../../Assets/Projects/CECS/CECS (13).png";
import cecs14 from "../../Assets/Projects/CECS/CECS (14).png";
import cecs15 from "../../Assets/Projects/CECS/CECS (15).png";
import cecs16 from "../../Assets/Projects/CECS/CECS (16).png";
import cecs17 from "../../Assets/Projects/CECS/CECS (17).png";
import cecs18 from "../../Assets/Projects/CECS/CECS (18).png";
import cecs19 from "../../Assets/Projects/CECS/CECS (19).png";
import cecs20 from "../../Assets/Projects/CECS/CECS (20).png";
import cecs21 from "../../Assets/Projects/CECS/CECS (21).png";
import cecs22 from "../../Assets/Projects/CECS/CECS (22).png";
import cecs23 from "../../Assets/Projects/CECS/CECS (23).png";
import cecs24 from "../../Assets/Projects/CECS/CECS (24).png";
import cecs25 from "../../Assets/Projects/CECS/CECS (25).png";
import cecs26 from "../../Assets/Projects/CECS/CECS (26).png";

function Projects() {
  const codeGeek=[cg1,cg2,cg3,cg4,cg5,cg6,cg7,cg8,cg9,cg10,cg11,cg12,cg13,cg14,cg15,cg16,cg17,cg18,cg19,cg20,cg21,cg22,cg23,cg24]
  const spotify=[sc1,sc2,sc3,sc4,sc5,sc6,sc7,sc8,sc9]
  const netflix=[nf1,nf2,nf3,nf4,nf5,nf6]
  const funrento=[fr1,fr2,fr3,fr4,fr5,fr6,fr7,fr8,fr9,fr10,fr11,fr12,fr13,fr14,fr15,fr16]
  const cecs=[cecs1,cecs2,cecs3,cecs4,cecs5,cecs6,cecs7,cecs8,cecs9,cecs10,cecs11,cecs12,cecs13,cecs14,cecs15,cecs16,cecs17,cecs18,cecs19,cecs20,cecs21,cecs22,cecs23,cecs24,cecs25,cecs26]

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
              imgPath={cg1}
              isBlog={false}
              title="CodeGeek"
              description="CodeGeek is a competitve coding platform like HackerRank. CodeGeek has been designed for coders as well as for recruiters. Users can practice various problems across 4 programming languages. It also allows a proctored certification test and based on candidates appeared results will be generated. As a particular user will solve problem in particular langauge, his rank and badge for that language will be assigned by the system."
              ghLink="https://github.com/Abhip32/Spotify-Clone"
              images={true}
              imagesArray={"chatify"}
              st={{ name:"CodeGeek",imgs:codeGeek}}  
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              images={true}
              isBlog={false}
              title="Spotify-Clone"
              description="A Desktop Responsive Clone of Spotify made in ReactJS. Integrated with offical Spotify API. In this App user can search and play his/her favourite songs. There is a seprate section for user dashboard and liked songs of user. There is a discover section on user dashboard, where user can explore new songs."
              ghLink="https://github.com/Abhip32/Spotify-Clone"
              demoLink="https://abhip32.github.io/Spotify-Clone/"
              st={{ name:"Spotify-Clone",imgs:spotify}}  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              images={true}
              title="Netflix Frontend Clone"
              description="A Desktop Responsive Clone of Spotify made in ReactJS. Functionality of Website is that you can search for any movie and all information about that movie will pop up. Along with this there is showcase of movies implemented on this website. This website is basically a frontend clone of Netflix"
              ghLink="https://abhip32.github.io/Netflix-Clone/"
              demoLink="https://abhip32.github.io/Netflix-Clone/"
              st={{ name:"Netflix Frontend Clone",imgs:netflix}}  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CRICGEEK"
              description="A fully Responsive Website made in AngularJs. On this website user can view the scores & news of live cricket matches. Along with this user will be able to see results of past & upcoming matches. In the Rankings section user can see the ranks of players across all formats."
              ghLink="https://github.com/Abhip32/CricGeek"
              demoLink="https://abhip32.github.io/CricGeek/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CRICGEEK API"
              description="This project is an API for CRICGEEK project. This is a REST API which is devloped using ExpressJS. This API basically scraps data from EspnCricInfo and Cricbuzz. Data includes scores of live and past matches. Information about upcoming matches and latest cricket news along with the rankings of players."
              ghLink="https://github.com/Abhip32/Cricket-Api"
              demoLink="https://cricket-api-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="News App"
              description="A simple fully responsive news app made in Angular Js. It makes use of NewYork Times API to fetch news. User will be able to see news across multiple catogories such as Health, Entertainment, General, Automobiles, Technology etc. User will be also able to search a news according to articles."
              ghLink="https://github.com/Abhip32/News-App"
              demoLink="https://abhip32.github.io/News-App" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              images={true}
              title="Funrento  (e-commerce website)"
              description="My first project in Django. On this website user will be able to rent the furniture for a particular life span. User authentication and OTP verification has been implemented in this website. More features such as out of order of order notifiler, payment portal and user portal is also available on this website."
              ghLink="https://github.com/Abhip32/Rental_Furniture"
              st={{ name:"FunRento (e-commerce website)",imgs:funrento}}  
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={random}
              isBlog={false}
              title="Cargo Express Courier System"
              description="This a desktop application which is devloped to bring automation in the daily work which happens at a courier company. I have used Java for frontend and MySQL for backend. Order tracking, bill generation, Seprate dashboard for User, Employee and admin, Forgot password these fratures has been implemented in this project."
              ghLink="https://github.com/Abhip32/Cargo-Express-Courier-System"
              images={true}
              st={{ name:"Cargo Express Courier System",imgs:cecs}} 

              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
