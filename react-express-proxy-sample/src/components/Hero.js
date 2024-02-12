import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Insurance from '../resources/insurance.jpg';

function Hero(props) {
    return (
        <div>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={7} sm={12}>
                            {props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1>}
                            {props.subTitle && <h2 className="display-6 font-weight-light">{props.subTitle}</h2>}
                            {props.text && (
                                <Link to="/quote">
                                    <button class="btn btn-primary btn-lg">{props.text}</button>
                                </Link>
                            )}
                        </Col>
                        <Col md={9} sm={12}>
                            <br></br>
                            {props.title === "Steward's Insurance Co" && (
                                <div class="row">
                                    <Card bg="info" style={{ width: '27rem' }}>
                                        <Card.Body>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>

                                            <h1>
                                                Take care of yourself in these trying times. Family matters, so leave them something to remember you
                                                by.
                                            </h1>
                                        </Card.Body>
                                    </Card>
                                    <img src={Insurance} alt="" width="900px" height="500px" />
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Hero;
