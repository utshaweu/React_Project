import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css'
import {Container,Row,Col} from "react-bootstrap";
import webdesLogo from '../../assets/image/responsive.svg'
import webdevLogo from '../../assets/image/web.svg'
import graphicsLogo from '../../assets/image/editor.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webdesLogo} className="serviceLogo"/>
                                <h2 className="serviceName">Web Design</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio
                                    impedit mollitia nisi, non ratione.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard text-center">
                               <img src={webdevLogo} className="serviceLogo"/>
                               <h2 className="serviceName">Web Development</h2>
                               <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maiores maxime,
                                   modi placeat similique voluptatum.</p>
                           </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo} className="serviceLogo"/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maiores maxime,
                                    modi placeat similique voluptatum.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;