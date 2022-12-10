import {
  Nav,
  Navbar,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landpage.css";
import { FaGithub } from "react-icons/fa";
import { TbArrowRightCircle } from "react-icons/tb";

function Landpage() {
  return (
    <div className="Landpagediv h-100">
       <Navbar className="navdiv py-3" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
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
          <Nav className="ms-auto links">
            <Nav.Link  className="links" href="#license">License</Nav.Link>
            <Nav.Link className="links" href="#about us">About us</Nav.Link>
            <Nav.Link className="links" href="#how to start">How to start</Nav.Link>
            <button className="gitbtn p-2">
              <FaGithub size={18} /> <span className="links ms-2">Get started on Github</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <Row className="vh-100 d-flex justify-content-center align-items-center m-0">
        <Col md="auto" className="headcol">
        <div>
          <h1>An Open-source AIOPs tool<br />for your observability stack</h1>
          </div>
           <p className="headpara">Xforecast, a light weight realtime plug and play tool for predictive<br />
            analytics Trade with confidence on the world’s fastest and most<br />
            secure cloud monitor exchange</p>
          <Button className="prbtn1" variant="primary">Start forecasting <TbArrowRightCircle size={15} /> </Button>
          <Button className="prbtn2">View Demo </Button> 
      </Col> 
      </Row>
    </div>
  );
}

export default Landpage;