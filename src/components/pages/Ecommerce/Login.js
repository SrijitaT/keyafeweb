import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address/Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email/Phone" />
                    <Form.Text className="text-muted">
                        We'll never share your email/phone with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button><br />
                <p>If you dont have an account, please click the register button!!</p>
                <Button variant="success" type="button" onClick={() => this.props.showRegisterForm()}>
                    Register
                </Button>
            </Form>
        )
    }
}
export default Login;
