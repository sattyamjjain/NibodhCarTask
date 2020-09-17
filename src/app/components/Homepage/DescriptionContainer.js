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
                Welcome to the Nibodh Car Website.
            </HeaderContainer>
            <PaddingContainer/>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Title>
                                    ELEGANT DETAILS THAT INSPIRE
                                </Card.Title>
                                <Card.Text>
                                Inviting and refined, the CX-9 Signature cabin is adorned with Nappa 
                                leather and features a larger 10.25-inch center display. 2nd-row captain’s chairs 
                                provide the ultimate comfort, while new patterned aluminum trim accents, 
                                new quilting and piping on seats add a touch of inspiring style.
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                    <Col>
                        <DescImageContainer className="geeks">
                            <Image src={require('../../images/PopUp1.jpg')} fluid className="geeksImage"/>
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescImageContainer className="geeks">
                            <Image src={require('../../images/PopUp2.jpg')} fluid className="geeksImage"/>
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Title>
                                    STYLE MEETS PERFORMANCE
                                </Card.Title>
                                <Card.Text>
                                The Skyactiv®-G 2.5 Dynamic Pressure Turbo engine provides effortless 
                                acceleration when and where you need it most. Available i-Activ AWD® 
                                helps predict traction loss. G-Vectoring Control Plus helps improve 
                                cornering stability with subtle adjustments to engine torque and brake pressure. 
                                You’re well-equipped to handle every road you take. 
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
