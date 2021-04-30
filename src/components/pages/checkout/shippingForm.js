import React from 'react';
import { Link } from "react-router-dom";
import LoginRegisterModal from "../authentication/LoginRegisterModal";
import PropTypes from 'prop-types';

class ShippingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <h3>Contact Information</h3>
                    </div>
                    <div className="form-group col-md-6">
                        <h5>Already have an account?  <LoginRegisterModal btnName="Login" variant="outline-light" title="Login Form"  icon = "no"/>
                        </h5>
                    </div>
            </div>
            <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
            </div>
            <h3>Shipping Address</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputfname">First Name</label>
                        <input type="text" className="form-control" id="inputfname" placeholder="First Name"/>
                    </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" className="form-control" id="inputlname" placeholder="Last Name"/>
                </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPhone">Phone</label>
                    <input type="number" className="form-control" id="inputPhone"/>
                </div>
                </div>
  <div className="form-row">
  <div className="form-group col-md-4">
      <label for="inputCountry">Country/Region</label>
      <input type="text" className="form-control" id="inputCountry" value="India"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>West Bengal</option>
      </select>
    </div>
    <div className="form-group col-md-4">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-row">
        <div className="form-group col-md-6">
            <Link to="/cart" className="btn btn-warning">Return to Cart</Link>
      </div>
      <div className="form-group col-md-6">
            <button type="submit" className="btn btn-primary">Continue to Shipping</button>
      </div>
  </div>
</form>
        );
    }
}

ShippingForm.propTypes = {};

export default ShippingForm;
