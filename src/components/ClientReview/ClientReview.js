import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                              <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src="http://utshaweu.com/demos/Overfolio/demo/images/test3.jpg"/>
                                <h2 className="serviceName">Web Development</h2>
                                  <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut cumque
                                      doloribus eum, nam nemo perspiciatis quaerat quas recusandae rerum.</p>
                              </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="http://utshaweu.com/demos/Overfolio/demo/images/test3.jpg"/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut cumque
                                        doloribus eum, nam nemo perspiciatis quaerat quas recusandae rerum.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="http://utshaweu.com/demos/Overfolio/demo/images/test3.jpg"/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut cumque
                                        doloribus eum, nam nemo perspiciatis quaerat quas recusandae rerum.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;