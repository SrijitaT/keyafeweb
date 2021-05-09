import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CounterComp from 'components/common/CounterComp';


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
                <tbody>
                    {
                        cart.length ? cart.map(cartItem =>
                            <tr key={cartItem.id}>
	                        <td>
		                    <figure className="itemside">
			                    <div className="aside"><img src={cartItem.img_url} className="img-sm"/></div>
			                    <figcaption className="info">
				                    <a href="#" className="title text-dark">{cartItem.name}</a>
				                    <p className="text-muted small">Description</p>
			                    </figcaption>
		                        </figure>
	                            </td>
                                <td> 
		                           <CounterComp value={cartItem.pound?cartItem.pound:1}/>
	                            </td>
	                            <td> 
									<CounterComp value={cartItem.qty}/>
	                             </td>
	                    		<td> 
		                    		<div className="price-wrap"> 
			                    		<var className="price">Rs {cartItem.total_price}</var> 
			                    		<small className="text-muted"> Rs {cartItem.price} each </small> 
		                    		</div> 
	                    		</td>
                        <td>
                                    <DatePicker
                                        selected={cartItem.schd_date}
                                        onChange={this.handleChange}
                                        minDate={new Date()}
                                    />
                                </td>
	                    <td className="text-right"> 
	                            <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <FontAwesomeIcon icon="heart" /></a> 
	                            <a data-original-title="Remove" title="" href="" className="btn btn-danger" data-toggle="tooltip"> <FontAwesomeIcon icon="trash" /></a> 
	                    </td>
                    </tr> 
                        ) : <div className="row">
                        <div className="col-md-1"></div>
                            <h5><br/>No items in cart!!</h5> 
                        </div>
                    }
                    </tbody>
            </Table>
            <div className="card-body border-top">
                    {cart.length?<Link to="/checkout" className="btn btn-primary float-md-right"> Make Purchase <FontAwesomeIcon icon="chevron-circle-right" /> </Link>:null}
	                <Link to="/shopping" className="btn btn-light"> <FontAwesomeIcon icon="chevron-circle-left" /> Continue shopping </Link>
            </div>	
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.keyafestore.cart.items
});
export default connect(mapStateToProps, null)(CartItem);