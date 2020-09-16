/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import { Nav,Row,Col,Card,InputGroup,FormControl,Button,Container } from 'react-bootstrap';
import * as FeatherIcon from 'react-feather';

const MainContainer = styled.div`
    width:100%;
    background-color:#313030;
`;

const SubFooterContainer = styled.div`

`;

const FooterContainer = styled.div`
  padding:2vh;
  display:flex;
  justify-content:space-between;
`;

const CopyrightContainer = styled.div`
  padding:1vh;
  color:#7B7575
`;

const DividerContainer = styled.div` 
  padding-left:5vh;
  padding-right:5vh;
`;

const FooterListContainer = styled.div`
`;

const PaddingListContainer = styled.div`
  padding-left:2vh;
  padding-right:2vh
`;

const DescTextContainer = styled.div`
    Padding:5vh;
    color:#7B7575;
    text-align:center;
`;

const Divider = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

export default class Footer extends React.Component {
  render() {
    return (
      <MainContainer>
        <SubFooterContainer>
          <Container>
            <Row xs={1} md={2}>
              <Col>
                <DescTextContainer>
                  <Card.Body>
                    <Card.Text>
                      To keep you in the loop of our latest news, register 
                      now for our email newsletter.
                    </Card.Text>
                    <div style={{display:'flex',justifyContent:'center',paddingLeft:'5vh',paddingRight:'5vh'}}>
                      <InputGroup className="mb-12">
                        <FormControl
                          placeholder="Enter Your Email"
                          aria-label="Enter Your Email"
                          aria-describedby="basic-addon2"
                        />
                      </InputGroup>
                      <PaddingListContainer />
                      <Button variant="outline-secondary"><FeatherIcon.ArrowRight /></Button>
                    </div>
                  </Card.Body>
                </DescTextContainer>
              </Col>
              <Col>
                <DescTextContainer>
                  <Card.Body>
                    <Card.Text>
                      Follow us and use the following social media platforms to get in 
                      contact with us and to share your passion for the brand, products 
                      and services of Mercedes-Benz.
                    </Card.Text>
                    <div style={{display:'flex',justifyContent:'space-between',paddingLeft:'5vh',paddingRight:'5vh'}}>
                      <Button variant="outline-secondary"><FeatherIcon.Facebook /></Button>
                      <Button variant="outline-secondary"><FeatherIcon.Instagram/></Button>
                      <Button variant="outline-secondary"><FeatherIcon.Mail /></Button>
                    </div>
                  </Card.Body>
                </DescTextContainer>
              </Col>
            </Row>
          </Container>
        </SubFooterContainer>
        <DividerContainer >
          <Divider color="#7B7575"/>
        </DividerContainer>
        <FooterContainer>
            <CopyrightContainer>
              @Copyright 2020-21
            </CopyrightContainer>
            <FooterListContainer>
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Contact Us</Nav.Link>
                </Nav.Item>
              </Nav>
            </FooterListContainer>
        </FooterContainer>  
      </MainContainer>
    );
  }
}
