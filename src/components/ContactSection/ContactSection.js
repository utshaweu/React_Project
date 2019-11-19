import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Quick Connect</h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="contactDescription">Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="contactDescription">Email Address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="contactDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="footerDescription">15/A/8 Tikka Para Mohammadpur,Dhaka-1207</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faEnvelope} /> utshaw1995@gmail.com</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faPhone} /> +8801674070166</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;