/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
                        />
                      </InputGroup>
                      <PaddingListContainer />
                      <Button variant="outline-secondary" href="https://gmail.com/" target="_blank"><FeatherIcon.ArrowRight /></Button>
                    </div>
                  </Card.Body>
                </DescTextContainer>
              </Col>
              <Col>
                <DescTextContainer>
                  <Card.Body>
                    <Card.Text>
                    Connect to the high-performance life. 
                    Follow us on your social networks to team up and get an inside 
                    view of our latest projects and ideas.
                    </Card.Text>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <Button variant="outline-secondary" href="https://facebook.com/" target="_blank"><FeatherIcon.Facebook /></Button>
                      <Button variant="outline-secondary" href="https://instagram.com/" target="_blank"><FeatherIcon.Instagram/></Button>
                      <Button variant="outline-secondary" href="https://gmail.com/" target="_blank"><FeatherIcon.Mail /></Button>
                      <Button variant="outline-secondary" href="https://twitter.com/?lang=en" target="_blank"><FeatherIcon.Twitter /></Button>
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
                  <Nav.Link >
                    <Link to="/" style={{color:"#7B7575"}}>Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link> 
                    <Link to="/products" style={{color:"#7B7575"}}>Products</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/contactUs" style={{color:"#7B7575"}}>Contact Us</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </FooterListContainer>
        </FooterContainer>  
      </MainContainer>
    );
  }
}
