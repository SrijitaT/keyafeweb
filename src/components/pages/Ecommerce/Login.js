import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUser } from "redux/actions/authActions";

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
                <Button variant="primary" type="submit">
                    Submit
                </Button><br />
            </Form>
            <p>If you dont have an account, please click the register button!!</p>
            <Button variant="success" type="button" onClick={() => this.props.showRegisterForm()}>
                Register
            </Button>
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
