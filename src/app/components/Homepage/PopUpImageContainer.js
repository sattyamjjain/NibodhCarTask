/* eslint-disable no-unused-vars */
import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import styled from 'styled-components';

import '../../css/index.css'

const MainContainer = styled.div`
    width:100%;
    margin-top:-15vh
`;

export default class PopUpImageContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Container>
                <Row>
                    <Col class="img-hover-zoom img-hover-zoom--xyz"><Image src={require('../../images/pop1.jpg')} fluid /></Col>
                    <Col class="img-hover-zoom img-hover-zoom--xyz"><Image src={require('../../images/pop1.jpg')} fluid /></Col>
                </Row>
            </Container>
        </MainContainer>
    );
  }
}
