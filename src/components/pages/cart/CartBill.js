import React from 'react'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartBill() {
	const sub_total = useSelector(state => state.keyafestore.cart.sub_total)
    return (
        <aside className="col-md-3">
		<div className="card mb-3">
			<div className="card-body">
			<form>
				<div className="form-group">
					<label>Have coupon?</label>
					<div className="input-group">
						<input type="text" className="form-control" name="" placeholder="Coupon code"/>
						<span className="input-group-append"> 
							<button className="btn btn-primary">Apply</button>
						</span> 
					</div>
				</div>
			</form>
			</div> 
		</div> 
		<div className="card">
			<div className="card-body">
					<dl className="dlist-align">
					  <dt>Total price:</dt>
					  <dd className="text-right">&#x20B9; {sub_total}</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Discount:</dt>
					  <dd className="text-right">&#x20B9; 0</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Total:</dt>
					  <dd className="text-right  h5"><strong>&#x20B9; {sub_total}</strong></dd>
					</dl>
					<hr/>
					<p className="text-center mb-3">
					<FontAwesomeIcon icon="credit-card" />
					</p>
		</div>  
        </div>
	</aside> 
    )
}

export default CartBill
