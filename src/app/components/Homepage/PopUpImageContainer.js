/* eslint-disable no-unused-vars */
import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import styled from 'styled-components';

import '../../css/index.css'

const MainContainer = styled.div`
    width:100%;
    padding:15vh;
    margin-top:-40vh;
    z-index:999;
    display:flex;
    // justify-content:center;
`;

export default class PopUpImageContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <div class="geeks">
                <Image src={require('../../images/PopUp1.jpg')} fluid class="geeksImage"/>
            </div>
            <div class="geeks">
                <Image src={require('../../images/PopUp2.jpg')} fluid class="geeksImage"/>
            </div>
        </MainContainer>
    );
  }
}
