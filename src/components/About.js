import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Project } from "./Project";
import { CodingPlatform } from "./CodingPlatform";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg4 from "../assets/img/project-img4.png";
import Codeforces from "../assets/img/Codeforces.jpeg";
import Codechef from "../assets/img/Codechef.png";
import LeetCode from "../assets/img/LeetCode.png";
import Gfg from "../assets/img/Gfg.jpeg";
import { Education } from "./Education";
import dav from "../assets/img/Dav.png";

import nit from "../assets/img/NIT.png";
export const About = () => {
  const education = [
    {
      title: "NIT Raipur",
      description: <pre> {"B.Tech,\nElectrical Engineering,\nCPI-8.52"}</pre>,
      link: "https://nitrr.ac.in/",
      imgUrl: nit,
    },
    {
      title: "TATA D.A.V. Public School, Jamadoba",
      link: "http://tatadavjamadoba.com/",
      description: <pre>{"Class XII - 96.4%,\n Class X - 93.6%"} </pre>,
      imgUrl: dav,
    },
  ];
  const projects = [
    {
      title: "HeyFoodie",
      description: "React, Typescript, Node.js, MongoDB, Stripe, Tailwind CSS",
      link: "https://heyfoodie.onrender.com/",
      imgUrl: projImg4,
    },
      {
      title: "Professional Services",
      description: "React, Node.js, MongoDB, Tailwind CSS",
      link: "https://professionalservices.onrender.com/",
      imgUrl: projImg5,
    },
    {
      title: "MovieNama",
      description: "HTML, CSS, JavaScript, React, API",
      link: "https://movie-nama.netlify.app/",
      imgUrl: projImg1,
    },
    {
      title: "Tic-Tac-Toe With Spidy",
      link: "https://sandy-tic-tac-toe-spidy.netlify.app/",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Weather App",
      link: "https://sandy-weather-app.netlify.app/",
      description: "HTML, CSS, JavaSript, API",

      imgUrl: projImg3,
    },
  ];
  const coding_platforms = [
    {
      title: "Codeforces",
      description: "Specialist a Max. Rating of 1405",
      link: "https://codeforces.com/profile/Cilian_Murphy",
      imgUrl: Codeforces,
    },
    {
      title: "Codechef",
      link: "https://www.codechef.com/users/sandy10pandit",
      description: "3⭐️ with a Max. Rating of 1608",
      imgUrl: Codechef,
    },
    {
      title: "Leetcode",
      link: "https://leetcode.com/u/Sandeep_Pandit/",
      description: "Maximum Rating of 1707 and solved 600+ questions",
      imgUrl: LeetCode,
    },
    {
      title: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/user/sandeeppanditmessi10/",
      description: "Solved 300+ questions",
      imgUrl: Gfg,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Things To Know About Me</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">PLATFORMS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__backIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {education.map((education, index) => {
                            return <Education key={index} {...education} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <Project key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {coding_platforms.map((coding_platforms, index) => {
                            return (
                              <CodingPlatform
                                key={index}
                                {...coding_platforms}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
