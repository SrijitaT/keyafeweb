import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function OrderSummary(props) {
	const cart = useSelector(state => state.keyafestore.cart.items)
    const cartTotal = useSelector(state => state.keyafestore.cart.sub_total)
      return(
        <>
        <h3>Order summary</h3>
        <hr/>
        <div className="scrollable-div">
        <Table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(cartItem =>
                            <tr key={cartItem.id}>
	                        <td>
		                    <figure className="itemside">
			                    <div className="aside"> 
                                    <img src={cartItem.img_url} className="img-sm"/>
                                    <span className="notify">{cartItem.qty}</span>
                                </div>
			                    <figcaption className="info">
				                    <a href="#" className="title text-dark">{cartItem.name}</a>
                                </figcaption>
		                    </figure>
	                            </td>
	                    		<td> 
		                    		<div className="price-wrap"> 
			                    		<var className="price">Rs {cartItem.total_price}</var> 
			                    		<small className="text-muted"> Rs {cartItem.price} each </small> 
		                    		</div> 
	                    		</td>
                             </tr> 
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
        <Table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col"></th>
                        <th scope="col" width="120"></th>
                    </tr>
                </thead>
                <tr>
                    <td> <b>SubTotal :</b> </td>
                    <td> Rs. {cartTotal}</td>
                </tr>
        </Table>
        </>
      )
}


export default OrderSummary;
