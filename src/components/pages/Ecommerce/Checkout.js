import React, { Component } from 'react';
import { Accordion, Card, Col, Row, Button, Container } from "react-bootstrap";
import BannerTop from "../../common/BannerTop";

export default class Checkout extends Component {
    render() {
        return (
            <>
            <BannerTop pageName="Checkout" />
            <Container>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Checkout options
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Billing Address
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
            </>
        )
    }
}
