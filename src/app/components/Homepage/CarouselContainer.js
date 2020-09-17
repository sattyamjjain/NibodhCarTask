/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
`;

export default class CarouselContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage1.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>REAL EMOTIONS SHAPE THE FUTURE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage2.jpg')}
                    alt="Second slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>ANYTHING BUT EXPECTED</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage3.jpg')}
                    alt="Third slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>CRAFTED PERFORMANCE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage4.jpg')}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>REWIND TO REAR WHEEL DRIVE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </MainContainer>
    );
  }
}
