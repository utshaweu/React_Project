import React, {Component,Fragment} from 'react';
import "../../assets/css/custom.css";
import {Col, Container, Row} from "react-bootstrap";
import coursesLogo from "../../assets/image/courses.jpg";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={coursesLogo}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis rem sed?</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={coursesLogo}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis rem sed?</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={coursesLogo}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis rem sed?</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={coursesLogo}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis rem sed?</p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;