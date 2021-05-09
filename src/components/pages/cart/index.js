import React, { Component } from 'react'
import BannerTop from "../../common/BannerTop";

import CartItem from "./CartItem";
import CartBill from "./CartBill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <BannerTop pageName="Cart" />
                <section className="section-content padding-y">
                <div className="container-fluid">
                <div className="row">
                    <main className="col-md-9">
              
                    <CartItem />
               
    

        <div className="alert alert-success mt-3">
	        <p className="icontext"><FontAwesomeIcon icon="truck" />Delivery will be done as scheduled</p>
        </div>

            </main>
            
            <CartBill/>
            </div></div></section>
            </React.Fragment>
        )
    }
}
export default Cart;
