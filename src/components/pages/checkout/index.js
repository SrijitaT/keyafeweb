import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import BannerTop from "../../common/BannerTop";
import ShippingForm from "./shippingForm";
import OrderSummary from "./orderSummary";

export default class Checkout extends Component {
    render() {
        return (
            <>
            <BannerTop pageName="Checkout" />
            <Container fluid>
            <div className="row">
            <div className="col-md-8 col-xs-8 col-sm-8 addrForm padding-y">
                <ShippingForm/>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4 padding-y">
                <OrderSummary/>
            </div>
            </div>
            </Container>
            </>
        )
    }
}
