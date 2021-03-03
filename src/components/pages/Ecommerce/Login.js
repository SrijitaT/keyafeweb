import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUser } from "redux/actions/authActions";
import {Link} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: ""
        };
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(login);
    }
    render() {
        return (
            <>
            <Form onSubmit={e => this.onSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address/Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email/Phone" name="email" onChange={e => this.onChange(e)} />
                    <Form.Text className="text-muted">
                        We'll never share your email/phone with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={e => this.onChange(e)} />
                </Form.Group>
                <div className="form-group">
          	    <a href="#" className="float-right">Forgot password?</a> 
                {/*<label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" checked=""/> <div className="custom-control-label"> Remember </div> </label>*/}
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button><br />
            </Form>
            <p class="text-center mt-4">Don't have account? <Link onClick={() => this.props.toggleLoginRegForm()}>Sign up</Link></p>
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
    { loginUser }
)(Login);
