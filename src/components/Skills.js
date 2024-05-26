import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__jackInTheBox" : ""
                  }
                >
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>
                      I have worked hard in upskilling myself in different
                      technologies.<br></br>
                    </p>

                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 85]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>C++</h5>
                      </div>

                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 80]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 70]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>SQL</h5>
                      </div>
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 80]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>HTML5 & CSS</h5>
                      </div>
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 85]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>ReactJS</h5>
                      </div>
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 75]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",

                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>NodeJS & Express</h5>
                      </div>
                      <div className="item">
                        <ChangingProgressProvider values={[0, 20, 90]}>
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${value}%`}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: `rgba(21, 0, 255,0.87)`,
                                textColor: "#CA3110",
                                trailColor: "#d6d6d6",
                              })}
                            />
                          )}
                        </ChangingProgressProvider>

                        <h5>DBMS, Operating Systems & OOPS</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
