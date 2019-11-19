import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}
            ]
        }
    }



    render() {
        var blue ="rgba(26,188,256,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle">Technology Used</h2>
                    <Row>
                       <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                       </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ducimus enim, illo ipsam necessitatibus officiis qui repellendus soluta tempore! Accusantium adipisci amet atque beatae consequuntur cum deserunt dicta dolore eaque excepturi fugiat ipsam itaque iusto labore laborum libero magnam maiores modi nam nostrum, provident quae quam quisquam recusandae rerum sequi sit. Aperiam dolores eligendi explicabo fugit, ipsum iusto laboriosam molestias nostrum quisquam velit. Asperiores atque delectus et quasi suscipit tempore. Ab fugit ipsa qui reprehenderit repudiandae! A ducimus exercitationem, inventore ipsa laudantium modi mollitia nemo nihil, nostrum, officia omnis quas? Autem facilis impedit placeat quas temporibus, veritatis! Fugit, vel.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;