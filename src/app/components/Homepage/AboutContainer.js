/* eslint-disable no-unused-vars */
import React from "react";
import { Card,Row,Col,Image } from "react-bootstrap";
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';

const MainContainer = styled.div`
    width:100%;
    padding:5vh;
`;

const HeaderContainer = styled.h2`
    text-align:center;
    color:#FFFFFF
`;

const SubHeaderContainer = styled.h5`
    text-align:center;
    color:#FFFFFF
`;

const DescTextContainer = styled.div`
    Padding:5vh
`;

const DescImageContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:2vh
`; 

const ImageVideoContainer = styled.div`
    padding:3vh
`;

export default class AboutContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <HeaderContainer>
                Obsess, Innovate, Repeat
            </HeaderContainer>
            <PaddingContainer/>
            <SubHeaderContainer>
                Precision Crafted Performance is what drives us. It’s at the core of everything we do. From ideating and problem 
                solving to bringing innovation to life, it all adds up to performance you can feel in every detail.
            </SubHeaderContainer>
            <PaddingContainer/>
            <ImageVideoContainer>
                <Row xs={1} md={3}>
                    <Col>
                        <DescImageContainer>
                            <HoverVideoPlayer
                            videoSrc={require('../../videos/video1.mp4')}
                            />
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescImageContainer>
                            <HoverVideoPlayer
                            videoSrc={require('../../videos/video2.mp4')}
                            />
                        </DescImageContainer>
                    </Col>
                    <Col>
                        <DescImageContainer>
                            <HoverVideoPlayer
                            videoSrc={require('../../videos/video3.mp4')}
                            />
                        </DescImageContainer>
                    </Col>
                </Row>
            </ImageVideoContainer>
        </MainContainer>
    );
  }
}
