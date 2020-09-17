/* eslint-disable no-unused-vars */
import React from "react";
import { Container,Row,Col,Image,Form,Button,Card } from "react-bootstrap";
import styled from 'styled-components';
import * as FeatherIcon from 'react-feather';
import { Link } from 'react-router-dom';

import products from '../../json/products.json';

const MainContainer = styled.div`
    width:100%;
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

export default class ProductsContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Image src={require('../../images/HomePage6.jpg')} style={{width:'100%'}}/>
            <PaddingContainer/>
            <HeaderContainer>
                Our Collection
            </HeaderContainer>
            <PaddingContainer/>
            <Container>
              {
              products.map((product,index)=>(
                <>
                  <Row xs={1} md={2}>
                      <Col>
                          <DescImageContainer >
                              <Image src={product.image} fluid />
                          </DescImageContainer>
                      </Col>
                      <Col>
                          <DescTextContainer>
                              <Card.Body>
                                  <Card.Title>
                                      {product.carName + ', ' + product.carModel}
                                  </Card.Title>
                                  <Card.Text>
                                      Engine : &nbsp; {product.Engine}
                                      <br/>
                                      Seating Capacity: &nbsp; {product.seat}
                                      <br/>
                                      Price in INDIA: &nbsp; {product.Price}
                                  </Card.Text>
                                  <Link to={`/product/${product.id}`}><FeatherIcon.ArrowRight /> Go to Product</Link>
                              </Card.Body>
                          </DescTextContainer>
                      </Col>
                  </Row>
                  <PaddingContainer/>
                </>
              ))}
            </Container>
        </MainContainer>
    );
  }
}
