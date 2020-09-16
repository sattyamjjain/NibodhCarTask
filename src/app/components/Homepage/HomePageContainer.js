/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from 'styled-components';
import CarouselContainer from './CarouselContainer'
import DescriptionContainer from './DescriptionContainer'
import PopUpImageContainer from './PopUpImageContainer'
import AboutContainer from './AboutContainer'
import ClientContainer from './ClientContainer'

const MainContainer = styled.div`
    width:100%;
`;

export default class HomePageContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <CarouselContainer />
            <PopUpImageContainer />
            <DescriptionContainer/>
            <AboutContainer />
            <ClientContainer />
        </MainContainer>
    );
  }
}
