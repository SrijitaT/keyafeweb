import React from "react";
import { Link } from "react-router-dom";

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
  
  <div className="card">
  <h5 className="card-header">Shipping Method</h5>
  <div className="card-body">
    <h5 className="card-title">Standard Shipping</h5>
  </div>
</div>
<br/>
<div className="row">
        <div className="col-md-6">
            <Link to="/cart" className="btn btn-warning">Return to Cart</Link>
      </div>
      <div className="col-md-6">
            <button type="button" className="btn btn-primary">Continue to Shipping</button>
      </div>
  </div>
  </>
  )
} 

export default ShippingFormAuth; 