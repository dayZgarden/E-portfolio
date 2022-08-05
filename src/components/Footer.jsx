import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from '../assets/img/nav-icon3.png';
import resume from '../assets/img/Zyad Alkurdi Resume.pdf'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={4}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={8} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/zyadalkurdi"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://github.com/dayZgarden"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href={resume}><img src={navIcon3} className='nav__image--third' alt="" /></a>
            </div>
            <p>Copyright &copy; 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
