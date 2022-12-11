import { Nav, Navbar, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landpage.css";
import { FaGithub, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { TbArrowRightCircle } from "react-icons/tb";
import image from "../Images/Ellipse.svg";
import image2 from "../Images/imgbg.png";

function Landpage() {
  return (
    <div className="Landpagediv h-100">
      <Navbar
        className="navdiv py-3"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
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
            <Nav.Link className="links" href="#license">
              License
            </Nav.Link>
            <Nav.Link className="links" href="#about us">
              About us
            </Nav.Link>
            <Nav.Link className="links" href="#how to start">
              How to start
            </Nav.Link>
            <button className="gitbtn p-2">
              <FaGithub size={18} />{" "}
              <span className="links ms-2">Get started on Github</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="">
        <Row
          className="vh-100 d-flex justify-content-center align-items-center m-0 homepage"
          style={{ backgroundImage: `url(${image}), url(${image2})` }}
        >
          <Col md="auto" className="headcol">
            <div>
              <h1>
                An Open-source AIOPs tool
                <br />
                for your observability stack
              </h1>
            </div>
            <p className="headpara pt-2">
              Xforecast, a light weight realtime plug and play tool for
              predictive
              <br />
              analytics Trade with confidence on the world’s fastest and most
              <br />
              secure cloud monitor exchange
            </p>
            <div className="d-flex justify-content-center">
              <Button className="prbtn1 px-3 " variant="primary">
                Start forecasting <TbArrowRightCircle size={15} />{" "}
              </Button>
              <Button className="prbtn2 px-3 ">View Demo </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="h-100 d-flex justify-content-center align-items-center m-0 pt-5 pb-5">
        <Col>
          <div>
            <h6>THE CORE STRUCTURE</h6>
            <h2>
              xforecast can simply fit into your
              <br />
              observabilty infrastructure.
            </h2>
            <p className="headpara pt-2">
              Now we support InfluxDB and Prometheus as source/target
              datasources.
              <br /> Datasource compatibility is the only pre-requisite to run
              xforecast
            </p>
          </div>
          <div
            className="align-items-center d-flex justify-content-center flex-wrap flex-row m-5"
            style={{ gap: "56px" }}
          >
            <img
              src="/assets/influx.svg"
              width="260"
              height="55"
              className="d-inline-block align-top"
              alt="influxdb logo"
            />
            <img
              src="/assets/promethus.svg"
              width="260"
              height="55"
              className="d-inline-block align-top"
              alt="preomenthus logo"
            />
          </div>
          <div style={{ padding: "10%" }}>
            <img
              src="/assets/websiteframe.svg"
              width="100%"
              height="90%"
              className="d-inline-block align-top webframe"
              alt="preomenthus logo"
            />
          </div>
        </Col>
      </Row>
      <Row className="h-100 d-flex justify-content-center align-items-center m-0 pt-5 pb-5 features">
        <Col>
          <div>
            <h6>THE CORE STRUCTURE</h6>
            <h2>AIOPs with Xforecast</h2>
          </div>
          <Row xs={1} md={3} className="g-4 pt-5">
            <Col>
              <Card className=" featurescard ">
                <Card.Img
                  variant="top"
                  src="/assets/Predict.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Predict multiple metrics</Card.Title>
                  <Card.Text>
                    Xforecast configuration file can be updated to support
                    multiple metrics prediction at the same time
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="featurescard">
                <Card.Img
                  variant="top"
                  src="/assets/Declarative.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Declarative metrics </Card.Title>
                  <Card.Text>
                    Metrics config is decalarative and should be defined in
                    config.yml file and cordinates
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="featurescard">
                <Card.Img
                  variant="top"
                  src="/assets/run.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Run anywhere</Card.Title>
                  <Card.Text>
                    Xforecast can be run as a container in a VM or in any
                    kubernetes environment
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="featurescard">
                <Card.Img
                  variant="top"
                  src="/assets/Forecasting.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Data forecasting</Card.Title>
                  <Card.Text>
                    This is the core functionality of xforecast. Make
                    predictions on any given metric.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="featurescard">
                <Card.Img
                  variant="top"
                  src="/assets/Hyperparameter.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Hyperparameter tuning</Card.Title>
                  <Card.Text>
                    Hyperparameters can be tuned per metric which is configured
                    for predictions
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="featurescard">
                <Card.Img
                  variant="top"
                  src="/assets/communityico.png"
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Title>Community support</Card.Title>
                  <Card.Text>
                    Quick support from the active community. Post any questions
                    or issues in github discussions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="h-100 d-flex justify-content-center align-items-center m-0 pt-5 ">
        <Col>
          <div>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <span className="Community px-3 py-2">XFORECAST COMMUNITY</span>
            </div>
            <h2>
              Learn more and get involved <br />
              with our community
            </h2>
            <p className="headpara pt-2">
              Join the conversation and help shape the evolution of xforecast.
            </p>
            <div className="align-items-center d-flex justify-content-center pt-5">
              <img
                src="/assets/community.png"
                width="40%"
                height="80%"
                alt="preomenthus logo"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="foot m-0 py-3  d-flex justify-content-center align-items-center">
        <Col>
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <ul className=" footlist d-flex flex-wrap flex-row">
              <li className="linksfoot">
                <a href="#Home">
                  <FaTwitter className="icons" size={18} />
                  Twitter
                </a>
              </li>
              <li className="linksfoot">
                <a href="#feature">
                  <FaYoutube className="icons" size={18} />
                  Youtube
                </a>
              </li>
              <li className="linksfoot">
                <a
                  href="https://github.com/xmigrate/xmigrate/discussions/"
                  target="_blank"
                >
                  <FaMedium className="icons" size={18} />
                  Medium
                </a>
              </li>
              <li className="linksfoot">
                <a
                  href="https://github.com/xmigrate/xmigrate/discussions/"
                  target="_blank"
                >
                  <FaGithub className="icons" size={18} />
                  Github
                </a>
              </li>
            </ul>

            <button className="gitbtnfoot p-2">
              <FaGithub size={18} />
              <span className="links ms-2">Get started on Github</span>
            </button>
          </div>
        </Col>
      </Row>
      <Row className="footsecond m-0 py-3  d-flex justify-content-center align-items-center">
        <Col>
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <img
              src="/assets/logo.png"
              width="130"
              height="30"
              className="d-inline-block align-top"
              alt="X-forecast logo"
            />
            <ul className=" footlistsecond d-flex flex-wrap flex-row">
              <li className="linksfootsecond">
                <a href="#Home">Home</a>
              </li>
              <li className="linksfootsecond">
                <a href="#feature">Community</a>
              </li>
              <li className="linksfootsecond">
                <a
                  href="https://github.com/xmigrate/xmigrate/discussions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Landpage;
