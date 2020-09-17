/* eslint-disable no-unused-vars */
import React from "react";
import { Card,Row,Col,Image } from "react-bootstrap";
import styled from 'styled-components';
import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';
import clients from '../../json/clients.json'

const MainContainer = styled.div`
    width:100%;
    padding:5vh;
`;

const HeaderContainer = styled.h2`
    text-align:center;
    color:#FFFFFF
`;

const PaddingContainer = styled.div`
    padding:2vh
`; 

const ClientPaddingContainer = styled.div`
    padding:1vh
`; 

const ClientsContainer = styled.div`
    padding:3vh
`;

const ClientCardContainer = styled.div`
    text-align:center;
    color:#FFFFFF
`;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default class ClientContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <HeaderContainer>
                Our Clients
            </HeaderContainer>
            <PaddingContainer/>
            <ClientsContainer>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        clients.map((client,index)=>(
                            <ClientCardContainer>
                                <Image src={client.results[0].picture.large} style={{height:'30vh',width:'30vh'}} roundedCircle />
                                <ClientPaddingContainer/>
                                <Card.Body style={{textAlign:'center'}}>
                                <Card.Title>{client.results[0].name.title+ ' ' + client.results[0].name.first + ' ' + client.results[0].name.last}</Card.Title>
                                <Card.Title>{client.results[0].email}</Card.Title>
                                    <Card.Text>
                                    {client.results[0].location.street.number + ' ' + client.results[0].location.street.name + ', ' + client.results[0].location.city + ' ' + client.results[0].location.state + ' ' + client.results[0].location.country + ' ' + client.results[0].location.postcode}
                                    </Card.Text>
                                </Card.Body>
                            </ClientCardContainer>
                        ))
                    }
                </Carousel>
            </ClientsContainer>
        </MainContainer>
    );
  }
}
