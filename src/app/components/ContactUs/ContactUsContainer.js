/* eslint-disable no-unused-vars */
import React from "react";
import { Container,Row,Col,Modal,Form,Button,Card } from "react-bootstrap";
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MainContainer = styled.div`
    width:100%;
    padding-top:20vh;
    padding-bottom:20vh;
`;

const ContactUsForm = styled.div`
    width:100%;
    color:#FFFFFF;
    padding-left:5vh;
    padding-right:5vh;
`;

const ContactUsMaps = styled.div`
    width:100%;
    padding-left:5vh;
    padding-right:5vh;
`;

export default class ContactUsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            show:false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow(val){
        this.setState({
            show:true
        })
    }

    handleClose(){
        this.setState({
            show:false
        })
    }
  render() {
    return (
        <MainContainer>
            <Container>
                <Row xs={1} md={2}>
                    <ContactUsForm>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstName" placeholder="Enter your first name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastName" placeholder="Enter your last name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control placeholder="Type a message" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleShow}>
                                Submit
                            </Button>
                        </Form>
                    </ContactUsForm>
                    <ContactUsMaps>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDg75kTvcQyGvZsv_FbOJHRb8kPinl7-a0' }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom={11}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                        <Card.Body style={{textAlign:'center',color:'#FFFFFF',padding:'5vh'}}>
                            <Card.Text>
                                8833 West Olympic Boulevard
                                Beverly Hills, CA 90211 USA
                                Att: Tim O’Hara (General Manager)
                                Phone: +1-310-659-4050
                            </Card.Text>
                        </Card.Body>
                    </ContactUsMaps>
                </Row>
            </Container>
            <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Response Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Contact Information is submitted</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </MainContainer>
    );
  }
}
