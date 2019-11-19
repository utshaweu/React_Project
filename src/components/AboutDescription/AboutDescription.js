import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Who i AM</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae cupiditate, earum explicabo
                                in inventore labore libero magnam, recusandae sapiente tenetur vel voluptas voluptate voluptates.</p>

                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae cupiditate, earum explicabo
                                in inventore labore libero magnam, recusandae sapiente tenetur vel voluptas voluptate voluptates.</p>

                            <h1 className="serviceName">My Vision</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae cupiditate, earum explicabo
                                in inventore labore libero magnam, recusandae sapiente tenetur vel voluptas voluptate voluptates.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;