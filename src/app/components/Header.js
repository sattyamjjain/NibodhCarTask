/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import { Nav,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import '../css/index.css'

const MainContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const HeaderListContainer = styled.div`
`;

const HeaderLogoContainer = styled.div`
  padding:1vh
`;

export default class Header extends React.Component {
  render() {
    return (
      <StickyHeader
        // This is the sticky part of the header.
        header={
              <MainContainer>
                <HeaderLogoContainer>
                  <Image src={require('../images/logo.png')} /> 
                </HeaderLogoContainer>
                <HeaderListContainer>
                  <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                      <Nav.Link>
                        <Link to="/">Home</Link>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <Link to="/products">Products</Link>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <Link to="/contactUs">Contact Us</Link>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </HeaderListContainer>
            </MainContainer>
    } />
    );
  }
}
