import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "redux/actions/authActions";

class Register extends Component {
	constructor() {
        super();
        this.state = {
            email: "",password: "",username: "",phone: "",
			address:"",country : "",city:"",state:"",
			pincode:"",isRegistered: true, errors: ""
        };
    }
	onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
	onSubmit(e) {
        e.preventDefault();
        const {errors,...register} = this.state;
        this.props.registerUser(register)
		.then(res=>this.props.handleShowHide(false))
    }
    render() {
        return (
            <>
            <Form onSubmit={e => this.onSubmit(e)}>
                <div className="form-row">
					<div className="col form-group">
						<label>Username</label>
					  	<input type="text" className="form-control" placeholder="" required name="username" onChange={e => this.onChange(e)}/>
					</div>
					<div className="col form-group">
						<label>Phone</label>
					  	<input type="number" className="form-control" placeholder="" name="phone" onChange={e => this.onChange(e)}/>
					</div> 
				</div> 
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder="" name="email" onChange={e => this.onChange(e)}/>
					<small className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div> 
				{/*<div className="form-group">
					<label className="custom-control custom-radio custom-control-inline">
					  <input className="custom-control-input" checked="" type="radio" name="gender" value="option1"/>
					  <span className="custom-control-label"> Male </span>
					</label>
					<label className="custom-control custom-radio custom-control-inline">
					  <input className="custom-control-input" type="radio" name="gender" value="option2"/>
					  <span className="custom-control-label"> Female </span>
					</label>
		</div> */}
				<div className="form-row">
					  <label>Address</label>
					  <input type="text" className="form-control" name="address" onChange={e => this.onChange(e)}/>
				</div> 
				<div className="form-row">
				<div className="form-group col-md-6">
					  <label>Country/Region</label>
					  <input type="text" className="form-control" value="India" name="country" onChange={e => this.onChange(e)}/>
				</div> 
				<div className="form-group col-md-6">
					  <label>State</label>
					  <select id="inputState" className="form-control" name="state" onChange={e => this.onChange(e)}>
					    <option> Choose...</option>
					      <option selected="">West Bengal</option>
					  </select>
					</div> 
				</div> 
				<div className="form-row">
					<div className="form-group col-md-6">
					  <label>City</label>
					  <select id="inputCity" className="form-control" name="city" onChange={e => this.onChange(e)}>
					    <option> Choose...</option>
					      <option selected="">Kolkata</option>
					      <option>Howrah</option>
					  </select>
					</div> 
					<div className="form-group col-md-6">
					  <label>Pincode</label>
					  <input type="text" className="form-control" name="pincode" onChange={e => this.onChange(e)}/>
					</div> 
				</div> 
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Create password</label>
					    <input className="form-control" type="password" name="password" onChange={e => this.onChange(e)}/>
					</div> 
					<div className="form-group col-md-6">
						<label>Repeat password</label>
					    <input className="form-control" type="password" name="password" onChange={e => this.onChange(e)}/>
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
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(Register);
