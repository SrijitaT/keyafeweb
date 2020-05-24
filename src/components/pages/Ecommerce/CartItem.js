import React, { Component } from 'react'
import { Alert, Row, Col, Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';

class CartItem extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        const { cart } = this.props;
        return (
            cart.length ? (<Table responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Qty.</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                        <th>Schedule delivery</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(cartItem =>
                            <tr key={cartItem.id}>
                                <td><img src={cartItem.img_url} height="100px" width="100px" /></td>
                                <td>{cartItem.name}</td>
                                <td><select value={cartItem.qty}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></td>
                                <td>Rs {cartItem.price}</td>
                                <td>Rs {cartItem.total_price}</td>
                                <td>
                                    <DatePicker
                                        selected={cartItem.schd_date}
                                        onChange={this.handleChange}
                                        minDate={new Date()}
                                    />
                                </td>
                                <td><Button variant="outline-danger">X</Button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>) : <h2>No items in cart!!</h2>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.keyafestore.cart
});
export default connect(mapStateToProps, null)(CartItem);