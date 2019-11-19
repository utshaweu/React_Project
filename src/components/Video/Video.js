import React, {Component,Fragment} from 'react';
import "../../assets/css/custom.css";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import {Player,BigPlayButton} from 'video-react';

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <h2 className="videoTitle">How I Do</h2>
                            <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aspernatur consequatur cum eveniet id, inventore ipsum iste
                                laborum minima officia quod recusandae repellat sunt tempora tenetur totam? Labore, quod!</p>
                            <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                        </Col>
                    </Row>
                </Container>


                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Video;