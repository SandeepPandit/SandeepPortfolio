import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa6";
import "animate.css";
export const Project = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={"animate__animated animate__flipInX proj-imgbx"}>
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>
            {title}{" "}
            <a href={link} target={"_blank"} rel="noreferrer">
              <FaLink />
            </a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
