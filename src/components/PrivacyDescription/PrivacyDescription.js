import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor doloribus ex in libero, pariatur quia ut! Accusantium, atque
                                autem ducimus fugiat illum laboriosam, modi nihil nostrum quam reprehenderit voluptate.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;