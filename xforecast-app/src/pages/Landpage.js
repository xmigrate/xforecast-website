import{
  Nav,
  Navbar,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landpage.css";
import { FaGithub } from "react-icons/fa";
import{TbArrowRightCircle} from "react-icons/tb";

export default function Landpage() {
  return (
    <div className="Landpagediv">
      <Navbar className="navdiv" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="/assets/logo.png"
            width="130"
            height="30"
            className="d-inline-block align-top"
            alt="X-forecast logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#license">License</Nav.Link>
            <Nav.Link href="#about us">About us</Nav.Link>
            <Nav.Link href="#how to start">How to start</Nav.Link>
            <button className="gitbtn">
              <FaGithub size={18} /> Get started on Github
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="justify-content-md-center">
      <Col md="auto" className="headcol">
        <h1>An Open-source AIOPs tool<br />for your observability stack</h1>
        <p className="headpara">Xforecast, a light weight realtime plug and play tool for predictive<br />
         analytics Trade with confidence on the world’s fastest and most<br />
         secure cloud monitor exchange</p>
         <Button className="prbtn1" variant="primary">Start forecasting <TbArrowRightCircle size={15}/> </Button>
         <Button className="prbtn2">View Demo </Button>
      </Col>
      </Row>
    </div>
  );
}
