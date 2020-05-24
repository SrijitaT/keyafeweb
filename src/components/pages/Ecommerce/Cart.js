import React, { Component } from 'react'
import BannerTop from "../../common/BannerTop";
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from "./CartItem";
class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <BannerTop pageName="Cart" />
                <Container>
                    <CartItem />
                    <Row>
                        <Col sm={4}><Button variant="outline-primary" size="lg">Continue Shopping</Button></Col>
                        <Col sm={4} />
                        <Col sm={4}>
                            <b>Sub-Total :</b> Rs 500<br />
                            <b>GST @ 18% :</b> Rs 9<br />
                            <b>Total :</b> Rs 509<br />
                            ** Shipping & COD Charges as applicable.<br />
                            <Button variant="outline-success" size="lg">Checkout</Button>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </React.Fragment>
        )
    }
}
export default Cart;
