import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import java from '../../Assets/Certificates/HackerRank Java(Basic).png'
import javascript from '../../Assets/Certificates/HackerRank JavaScript(Basic).png'
import python from '../../Assets/Certificates/HackerRank Python(Basic).png'
import react from '../../Assets/Certificates/HackerRank React JS (Basic).png'
import sql from '../../Assets/Certificates/HackerRank SQL(Basic).png'
import sqlinter from '../../Assets/Certificates/HackerRank SQL(Intermediate).png'
import problemSolving from '../../Assets/Certificates/HackerRank Problem Solving(Basic).png'
import AIML from '../../Assets/Certificates/AIML.jpg'
import JavaCourseEra from '../../Assets/Certificates/Java CourseEra.jpg'
import JavaOracle from '../../Assets/Certificates/Java Oracle.jpg'
import Marpu from '../../Assets/Certificates/Marpu Internship.jpg'


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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Java ,Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies diffrent frameworks </b> and
                also in areas related to{" "}
                <b className="purple">
                Artificial Intelligence & Machine Learning
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="217px" height="237px" style={{boxShadow:"0 2px 2px #c770f0",borderRadius:"110px"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>

        <br/>
        <br/>
        <Col md={12} className="home-about-social">
            <h1>Certificates of <span className="purple">Courses</span>  &  <span className="purple">Internships</span> </h1>
            <Carousel style={{width:"60vw",marginLeft:"auto",marginRight:"auto",marginTop:"2%",marginBottom:"2%",boxShadow:"2px 2px 50px purple"}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={java}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={javascript}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={python}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={react}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sql}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sqlinter}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={problemSolving}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={AIML}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={JavaCourseEra}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={JavaOracle}
                    alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Marpu}
                    alt="First slide"
                  />
              </Carousel.Item>
    </Carousel>
         
          </Col>



          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abhip32"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-patil-5bab6021b"

                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abhishekpatil_32/"
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
