import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import ModalHOC from "../../common/hoc/Modal";

class Register extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email/phone with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicAddr">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="formBasicPin">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type="number" placeholder="Enter Pincode" />
                </Form.Group>
                <Form.Group controlId="formBasicPwd">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPwd">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
export default Register;
