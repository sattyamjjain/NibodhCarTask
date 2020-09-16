/* eslint-disable no-unused-vars */
import React from "react";
import { Card,Row,Col,Image,Container } from "react-bootstrap";
import styled from 'styled-components';

import '../../css/index.css'

const MainContainer = styled.div`
    width:100%;
    padding-top:6vh;
`;

const HeaderContainer = styled.h2`
    text-align:center;
    color:#FFFFFF
`;

const DescTextContainer = styled.div`
    Padding:5vh;
    color:#FFFFFF
`;

const DescImageContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:2vh
`; 

export default class CarouselContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <HeaderContainer>
                Company Description
            </HeaderContainer>
            <PaddingContainer/>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Title>
                                    MAZDA SKYACTIV® TECHNOLOGY: A SMARTER APPROACH
                                </Card.Title>
                                <Card.Text>
                                    When the components of a system are engineered to work together, 
                                    that system will operate at peak efficiency. 
                                    This is the simple idea behind Mazda Skyactiv® Technology. 
                                    But efficiency isn’t the only benefit.
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                    <Col>
                        <DescImageContainer >
                            <Image src={require('../../images/HomePage2.jpg')} fluid />
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescImageContainer>
                            <Image src={require('../../images/HomePage1.jpg')} fluid />
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Title>
                                    MAZDA SKYACTIV® TECHNOLOGY: A SMARTER APPROACH
                                </Card.Title>
                                <Card.Text>
                                    When the components of a system are engineered to work together, 
                                    that system will operate at peak efficiency. 
                                    This is the simple idea behind Mazda Skyactiv® Technology. 
                                    But efficiency isn’t the only benefit.
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                </Row>
            </Container>
        </MainContainer>
    );
  }
}
