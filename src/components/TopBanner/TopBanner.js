import React, {Component, Fragment} from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import {Container,Row,Col,Button} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                               <Col className="text-center">
                                 <h1 className="topTitle">Hello I am Sajib Mahmud</h1>
                                   <h3 className="topSubTitle">WEB DESIGNER SINCE 2018 IN DHAKA, BANGLADESH</h3>
                                   <Button variant="outline-primary">More Info</Button>
                               </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;