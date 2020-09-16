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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage2.jpg')}
                    alt="Second slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage3.jpg')}
                    alt="Third slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../images/HomePage4.jpg')}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption style={{padding:'20vh'}}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </MainContainer>
    );
  }
}
