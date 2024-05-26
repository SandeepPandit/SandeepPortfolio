import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FiArrowRightCircle } from "react-icons/fi";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <section className="homebanner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    <ReactTyped
                      className=""
                      strings={["Welcome to my Portfolio....."]}
                      typeSpeed={60}
                      backSpeed={70}
                      loop={true}
                    />
                  </span>
                  <h1>{`Hi! I'm Sandeep`}</h1>
                  <h1 style={{ color: "red" }}>
                    <ReactTyped
                      className=""
                      strings={["Developer", "Learner", "Coder"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop={true}
                    />
                  </h1>

                  <p>
                    I'm passionate in coding and developing new things with a
                    keen eye for detail and a drive for excellence. I have honed
                    my skills in development and competitive programming,
                    consistently delivering high-quality results. My portfolio
                    showcases a selection of my projects, each reflecting my
                    commitment to creativity and user-centered design. I believe
                    in the power of software development to transform and
                    improve lives, and I am dedicated to staying at the
                    forefront of industry trends and advancements. Whether
                    working independently or as part of a team, I bring a
                    collaborative spirit and a proactive approach to every
                    project. When I'm not immersed in my work, I enjoy watching
                    Ted talks and dancing, which inspire and energize me. Please
                    do visit the other sections to know more about me.
                  </p>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#GetInTouch");
                    }}
                    className="LetConnect"
                  >
                    <button>
                      Let’s Connect <FiArrowRightCircle />{" "}
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__flip" : ""}
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
