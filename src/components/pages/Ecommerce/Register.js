import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <>
            <Form>
                <div className="form-row">
					<div className="col form-group">
						<label>First name</label>
					  	<input type="text" className="form-control" placeholder=""/>
					</div>
					<div className="col form-group">
						<label>Last name</label>
					  	<input type="text" className="form-control" placeholder=""/>
					</div> 
				</div> 
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder=""/>
					<small className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div> 
				<div className="form-group">
					<label className="custom-control custom-radio custom-control-inline">
					  <input className="custom-control-input" checked="" type="radio" name="gender" value="option1"/>
					  <span className="custom-control-label"> Male </span>
					</label>
					<label className="custom-control custom-radio custom-control-inline">
					  <input className="custom-control-input" type="radio" name="gender" value="option2"/>
					  <span className="custom-control-label"> Female </span>
					</label>
				</div> 
				<div className="form-row">
					<div className="form-group col-md-6">
					  <label>City</label>
					  <input type="text" className="form-control"/>
					</div> 
					<div className="form-group col-md-6">
					  <label>Country</label>
					  <select id="inputState" className="form-control">
					    <option> Choose...</option>
					      <option>Uzbekistan</option>
					      <option>Russia</option>
					      <option selected="">United States</option>
					      <option>India</option>
					      <option>Afganistan</option>
					  </select>
					</div> 
				</div> 
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Create password</label>
					    <input className="form-control" type="password"/>
					</div> 
					<div className="form-group col-md-6">
						<label>Repeat password</label>
					    <input className="form-control" type="password"/>
					</div> 
				</div>
			    <div className="form-group">
			        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
			    </div>     
			    <div className="form-group"> 
		            <label className="custom-control custom-checkbox">
                         <input type="checkbox" className="custom-control-input" checked=""/> 
                    <div className="custom-control-label"> I agree with <a href="#">terms and contitions</a>  </div> </label>
		        </div>  
            </Form>
             <p class="text-center mt-4">Have an account? <Link onClick={() => this.props.toggleLoginRegForm()}>Log In</Link></p>  
             </>
        )
    }
}
export default Register;
