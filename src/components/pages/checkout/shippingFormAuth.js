import React from "react";
import { Link } from "react-router-dom";
import PaymentForm from "../payment";

function ShippingFormAuth({user}){
    return(
        <>
    <div className="card">
    <h5 className="card-header">Contact : {user.email}</h5>
    <div className="card-body">
      <h5 className="card-title">Ship to : {user.address}</h5>
    </div>
  </div>
  <br/><br/>
  
  <div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-3">Delivery info</h4>

	  <div className="form-row">
			<div className="form-group col-sm-6">
				<label className="js-check box active">
					<input type="radio" name="dostavka" value="option1" checked/>
					<h6 className="title">Standard delivery</h6>
					<p className="text-muted">Free by airline within 20 days</p>
				</label>
			</div>
			<div className="form-group col-sm-6">
				<label className="js-check box">
					<input type="radio" name="dostavka" value="option1"/>
					<h6 className="title">Midnight delivery</h6>
					<p className="text-muted">Extra Rs 100 will be charged </p>
				</label>
			</div>
		</div>
</div></div>

<div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Payment Info</h4>
            <PaymentForm/>
        </div>
</div>

<div className="row">
        <div className="col-md-6">
            <Link to="/cart" className="btn btn-warning">Return to Cart</Link>
      </div>
  </div>
  </>
  )
} 

export default ShippingFormAuth; 