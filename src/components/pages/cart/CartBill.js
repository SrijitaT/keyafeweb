import React from 'react'

function CartBill() {
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
					  <dd className="text-right">USD 568</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Discount:</dt>
					  <dd className="text-right">USD 658</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Total:</dt>
					  <dd className="text-right  h5"><strong>$1,650</strong></dd>
					</dl>
					<hr/>
					<p className="text-center mb-3">
						<img src="images/misc/payments.png" height="26"/>
					</p>
		</div>  
        </div>
	</aside> 
    )
}

export default CartBill
