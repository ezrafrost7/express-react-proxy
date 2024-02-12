import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Card from 'react-bootstrap/Card';

import Company from '../resources/company.png';
import Home from '../resources/home.jpg';
import Life from '../resources/life.jpg';
import Car from '../resources/car.jpg';

function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

            <Content>
                <div class="container">
                    <div class="row">
                        <Card bg="info" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Home} height="250px" />
                            <Card.Body>
                                <Card.Title>Home Insurance</Card.Title>
                                <Card.Text>A stable plan to ensure you always have a complete, safe home.</Card.Text>
                                <button class="btn btn-secondary">View Details</button>
                            </Card.Body>
                        </Card>

                        <div class="col-md-4">
                            <Card bg="info" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={Life} height="250px" />
                                <Card.Body>
                                    <Card.Title>Life Insurance</Card.Title>
                                    <Card.Text>Give your loved ones something to remember you by.</Card.Text>
                                    <button class="btn btn-secondary">View Details</button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-md-4">
                            <Card bg="info" style={{ width: '21rem' }}>
                                <Card.Img variant="top" src={Car} height="250px" />
                                <Card.Body>
                                    <Card.Title>Car Insurance</Card.Title>
                                    <Card.Text>Ensure your brand new ride is as safe as it is flashy.</Card.Text>
                                    <button class="btn btn-secondary">View Details</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default HomePage;
