import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src="https://rabbil.com/ControlPanel/Images/foolbazz.png" alt="image"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazar</h2>
                            <p className="serviceDescription serDesMargin">Complete e-commerce app solution for selling fruit online. According to build
                                quality, data loading speed this is the best one</p>
                            <ul>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>
                                <li className="serviceDescription serDesMargin">Dynamic shipping point facilities</li>

                            </ul>
                            <Button variant="primary">Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;