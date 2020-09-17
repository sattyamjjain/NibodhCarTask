/* eslint-disable no-unused-vars */
import React from "react";
import { Container,Row,Col,Image,Form,Button,Card } from "react-bootstrap";
import styled from 'styled-components';
import ThreeSixty from 'react-360-view';
import * as FeatherIcon from 'react-feather';

const MainContainer = styled.div`
    width:100%;
`;

const HeaderContainer = styled.h2`
    text-align:center;
    color:#FFFFFF
`;

const DescTextContainer = styled.div`
    Padding:2vh;
    color:#FFFFFF;
`;

const ProductDescContainer = styled.div`
    width:100%;
    background-color:#313030;
    text-align:center;
    color:#7B7575;
    padding-left:20vh;
    padding-right:20vh;
    padding-top:5vh;
    padding-bottom:5vh;
`;

const Image360View = styled.div`
    
`; 

const PaddingContainer = styled.div`
    padding:2vh
`; 

const InteriorContainer = styled.div`
    text-align:center;

`;

export default class ProductContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <video id="background-video" loop autoPlay muted style={{width:'100%'}}>
                <source src={require('../../videos/videohome.mp4')} type='video/mp4'/>
            </video>
            <Container>
                <Row xs={1} md={4}>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Text>
                                    COMPARE OUR VEHICLES
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Text>
                                    BOOK ONLINE
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Text>
                                    DOWNLOAD BROUCHURE
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                    <Col>
                        <DescTextContainer>
                            <Card.Body>
                                <Card.Text>
                                    FIND A RETAILER
                                </Card.Text>
                            </Card.Body>
                        </DescTextContainer>
                    </Col>
                </Row>
            </Container>
            <ProductDescContainer>
                <Card.Body>
                    <Card.Title>
                    XF builds on the success of Jaguar's most award-winning car ever. 
                    Possessing an unrivalled combination of style and substance, 
                    it delivers an utterly seductive blend of design, dynamics and 
                    refinement to create a car that offers both excitement and efficiency. 
                    All enhanced by state-of-the-art technologies that keep you safe, connected and entertained.
                    </Card.Title>
                </Card.Body>
            </ProductDescContainer>
            <PaddingContainer/>
            <HeaderContainer>
                EXPLORE EXTERIOR (360 degree)
            </HeaderContainer>
            <PaddingContainer/>
            <Image360View>
                <ThreeSixty
                    amount={36}
                    imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                    fileName="iris-{index}.jpeg"
                    spinReverse
                    autoplay
                    buttonClass="dark"
                />
            </Image360View>
            <PaddingContainer/>
            <HeaderContainer>
                EXPLORE INTERIOR
            </HeaderContainer>
            <PaddingContainer/>
            <Container style={{textAlign:'center'}}>
                <Row xs={1} md={3}>
                    {
                        this.props.product !== null && this.props.product.interior.length !== 0 && this.props.product.interior.map((prodInt,index)=>(
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <img src={prodInt.image} alt="image360" style={{width:'100%'}}/>
                                    <Card.Body>
                                        <Card.Title>{prodInt.title}</Card.Title>
                                        <Card.Text>{prodInt.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <PaddingContainer/>
        </MainContainer>
    );
  }
}
