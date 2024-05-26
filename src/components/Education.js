import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa6";
import TrackVisibility from "react-on-screen";
import "animate.css";
export const Education = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? "animate__animated animate__flipInX" : ""}
          >
            <div className="proj-imgbx animate__animated animate__flipInX">
              <img src={imgUrl} alt="project" />
              <div className="proj-txtx">
                <h4>
                  {" "}
                  {title}{" "}
                  <a href={link} target={"_blank"} rel="noreferrer">
                    <FaLink />
                  </a>{" "}
                </h4>

                <span>{description}</span>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};
