import React, { Component } from 'react'
import BannerTop from "../../common/BannerTop";
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
                <div className="card">
            <Table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">Pound</th>
                        <th scope="col" width="120">Quantity</th>
                        <th scope="col" width="120">Price</th>
                        <th scope="col" width="120">Schedule</th>
                        <th scope="col" className="text-right" width="200"> </th>
                    </tr>
                </thead>
                    <CartItem />
            </Table>
            <div className="card-body border-top">
	            <Link to="/checkout" className="btn btn-primary float-md-right"> Make Purchase <FontAwesomeIcon icon="chevron-circle-right" /> </Link>
	            <Link to="/shopping" className="btn btn-light"> <FontAwesomeIcon icon="chevron-circle-left" /> Continue shopping </Link>
            </div>	
        </div> 

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
