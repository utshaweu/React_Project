import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                      <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                          <h2 className="serviceName">Follow Me</h2>
                          <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                          <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                      </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Address</h2>
                            <p className="footerDescription">15/A/8 Tikka Para Mohammadpur,Dhaka-1207</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faEnvelope} /> utshaw1995@gmail.com</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faPhone} /> +8801674070166</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Information</h2>
                            <a className="footerLink" href="#">About Me</a><br/>
                            <a className="footerLink" href="#">My Resume</a><br/>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Legal</h2>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">utshaweu.com &copy; 2019-2020</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;