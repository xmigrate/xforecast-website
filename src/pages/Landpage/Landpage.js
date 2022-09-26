import React, { Component } from "react";
import {
  Form,
  Navbar,
  Container,
  Col,
  Row,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import {
  FaChartLine,
  FaRegUser,
  FaCode,
  FaInfo,
  FaCog,
  FaTools,
  FaPlay,
  FaAlignCenter,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaSlackHash,
  FaMapMarkedAlt,
  FaLayerGroup,
  FaStepForward,
  FaSortAmountUp,
  FaMedium
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Landpage.scss";

export default class Landpage extends Component {
  render() {
    return (
      <div className="Landpage">
        {/* Top Navigation Bar  */}
        <Navbar expand="lg" className="sticky-top NavCl">
          <Navbar.Brand className="navbar-brand col-xs-2">
            <img
              src="Assets/images/xforecast.jpg"
              width="122"
              height="22"
              className="d-inline-block align-top"
              alt="xforecast logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end "
            id="basic-navbar-nav"
          >
            <Form id="basic-nav-dropdown" className="d-flex">
              <ul className="navbar-nav">
                <li className="limargin mt-1">
                  <a href="https://docs.xforecast.cloud/en/latest/" target="_blank">Documentation</a>
                </li>
                <li className="limargin mt-1">
                  <a href="https://medium.com/xmigrateoss" target="_blank">Blog</a>
                </li>
              </ul>
              <a href="https://github.com/xmigrate/xforecast/discussions" target="_blank">
                <Button variant="secondary Gitbtn limargin ">
                  Get Started on Github <span className="ml-2"><FaGithub size={22} /></span>
                </Button>
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container id="Home" fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner pt-5">
              <h1 className="banner-txt">
                An Open-source AIOPs tool for your observability stack
              </h1>
              <p className="lead">
              Xforecast, a light weight realtime plug and play tool for predictive analytics <br />
                
              </p>
              <a
                href="https://github.com/xmigrate/xforecast"
                target="_blank"
              >
                <div className="btn bt-pr1 btn-outline-primary btn-md btn-main mr-1 px-4" >

                  Start forecasting
                </div>
              </a>
              <a
                href=""
                target="_blank"
              >
                <div className="btn bt-pr2 btn-outline-primary btn-md px-4" >

                  View Demo

                </div>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="banner pt-5">
              <div className="boxshad">
                <Image src="Assets/images/influx.gif" fluid />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner text-mid-1">
              <h1 className="banner-txt2">
                Xforecast can simply fit into your existing observabilty infrastructure.
              </h1>
              <p className="lead">
                Now we support InfluxDB and Prometheus as source/target datasources. Datasource compatibility is the <br />
                only pre-requisite to run xforecast.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            <Col md="5" className="banner pb-3 mb-5">
              <Row className="justify-content-md-center ">
                <Col md="5">
                  <Image
                    src="Assets/images/Influxdb_logo.png"
                    fluid
                  />
                </Col>
                <Col md="2">
                  <Image
                    src="Assets/images/Prometheus_software_logo.png"
                    fluid
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="feature" className="HomeColo p-5 justify-content-md-center">
            <Col>

              <Row className="justify-content-md-center">
                <Col md="auto" className="banner pt-5">
                  <h3 className="banner-txt2">
                    AIOPs with Xforecast{" "}
                    <span role="img" aria-label="Happy">
                      😀
                    </span>
                  </h3>
                  <p className="lead">
                    The following are the features which xforecast supports
                    now and will be supported in future.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
                      <FaChartLine size={50} />
                    </div>
                    <Card.Title className="CardTit">Data forecasting</Card.Title>
                    <Card.Text className="lead">
                      This is the core functionality of xforecast. Make predictions on any given metric.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className=" clicon p-3">
                      <FaTools size={50} />
                    </div>
                    <Card.Title className="CardTit">Hyperparameter tuning</Card.Title>
                    <Card.Text className="lead">
                      Hyperparameters can be tuned per metric which is configured for predictions
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
                      <FaInfo size={50} />
                    </div>
                    <Card.Title className="CardTit">Predict multiple metrics</Card.Title>
                    <Card.Text className="lead">
                      Xforecast configuration file can be updated
                      to support multiple metrics prediction at the same time
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
                      <FaCog size={50} />
                    </div>
                    <Card.Title className="CardTit">Declarative metrics</Card.Title>
                    <Card.Text className="lead" >
                      Metrics config is decalarative and should be defined
                      in config.yml file
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="justify-content-md-center">
                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
                      <FaPlay size={50} />
                    </div>
                    <Card.Title className="CardTit">Run anywhere</Card.Title>
                    <Card.Text className="lead">
                      Xforecast can be run as a container in a VM
                      or in any kubernetes environment
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
                      <FaRegUser size={50} />
                    </div>
                    <Card.Title className="CardTit">Community support</Card.Title>
                    <Card.Text className="lead">
                      Quick support from the active
                      community. Post any questions or issues
                      in github discussions
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className=" p-3 m-3 premium-change "
                >
                    <Row>
                        <Col className="premiumcol" md={{ span: 6, offset: 6 }}> <Button className="btn-premium" variant="primary" size="sm">Premium</Button></Col>
                      </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">
                      
                    <Row>
                        <Col  md={{ span: 6, offset: 3 }}><FaCode size={50} /></Col>
                      </Row>
                      
                    </div>
                    <Card.Title className="CardTit">Web console</Card.Title>
                    <Card.Text className="lead">Configure, manage and monitor xforecast 
                      from web dashboard</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className="p-3 m-3 premium-change "
                >
                       <Row>
                        <Col className="premiumcol" md={{ span: 6, offset: 6 }} > <Button className="btn-premium" variant="primary" size="sm">Premium</Button></Col>
                      </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">
                 
                      <Row>
                        <Col md={{ span: 6, offset: 3 }}><FaLayerGroup size={50} /></Col>
                      </Row>


                    </div>
                    <Card.Title className="CardTit">Multi-dimensional data forecasting</Card.Title>
                    <Card.Text className="lead">
                      Xforecast support predictions on multi-dimensional
                      data and this makes the predictions more accurate
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>

            </Col>
          </Row>

          {/* Community */}
          <div id="Community" className="justify-content-md-center p-5">
            <Row>
              <Col md="12" className="banner pt-5">
                <h1 className="banner-txt2">
                  Learn more and get involved with the community
                </h1>
                <p className="lead">
                  Join the conversation and help shape the evolution of
                  Xforecast, Here are fews ways to get started
                </p>
              </Col>
            </Row>
            <Row className="justify-content-ls-center pt-4 pb-3 ">
              <Col md={{ span: 4, offset: 4 }}>
                <Row>
                  <Col xs="3" className=" iconCommunity ">
                    <a href="https://twitter.com/xforecastoss" target="_blank">
                      <FaTwitter size={60} />
                    </a>
                  </Col>
                  <Col xs="3" className=" iconCommunity">
                    <a
                      href="https://www.youtube.com/channel/UCJc96kOu0tNhDtp7FT91ENg"
                      target="_blank"
                    >
                      <FaYoutube size={60} />
                    </a>
                  </Col>
                  <Col xs="3" className=" iconCommunity">
                    <a
                      href="https://github.com/xmigrate/xforecast/discussions"
                      target="_blank"
                    >
                      <FaGithub size={60} />
                    </a>
                  </Col>
                  <Col xs="3" className="iconCommunity">
                    <a
                      href="https://medium.com/xmigrateoss"
                      target="_blank"
                    >
                      <FaMedium size={60} />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row >
              <Col md="12" className="banner pt-3">
                <p className="lead">
                  You can also join us every other week for our community
                  meeting call to dicuss <strong>xforecast</strong>
                </p>
              </Col>
            </Row>
          </div>
          {/* Footer */}
          <Row className="justify-content-md-center footer">
            <Col md="9">
              <Row>
                <Col xs={{ order: "first" }}>
                  <ul className="footer-list lead pt-4 mt-1">
                  <li> <a href="#Home">Home</a></li>
                   <li> <a href="#feature">Features</a></li>
                   <li> <a href="https://github.com/xmigrate/xforecast/discussions"  target="_blank">Community</a></li>
                  </ul>
                </Col>
                <Col >
                  <p className="footer-brand pt-3">
                    <img
                      src="Assets/images/xforecast.png"
                      width="120"
                      height="20"
                      className="d-inline-block align-top"
                      alt="Xforecast logo"
                    />
                  </p>
                </Col>
                <Col xs={{ order: "last" }} >
                  <p className="pt-4 mt-1 lead"> &#169; 2022@Xmigrate consultancy services private ltd</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
