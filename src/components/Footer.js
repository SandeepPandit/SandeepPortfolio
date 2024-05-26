import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/SandeepLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-social-icon">
              <a
                href="https://www.linkedin.com/in/sandeep-pandit-639a56223/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/SandeepPandit"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/sandeep._.pandit/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>
              <BiLogoGmail />
              sandeep.pandit.messi.10@gmail.com
            </p>
          </Col>
        </Row>
        <div className="footer-copyright">
          <p>
            {" "}
            <FaRegCopyright /> Copyright 2024. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
