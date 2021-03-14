import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import ModalHOC from "../../common/hoc/Modal";
import Login from "./Login";
import Register from "./Register";

class LoginRegisterModal extends Component {
    state = {
        register: false
    }
    toggleLoginRegForm = () => {
        this.setState({ register: !this.state.register }, () => {
            if(this.state.register)
                this.props.changeTitle("Registration Form")
            else
                this.props.changeTitle("Login Form")
        })
    }
    render() {
        return this.state.register ? <Register toggleLoginRegForm={this.toggleLoginRegForm.bind(this)}/> : <Login toggleLoginRegForm={this.toggleLoginRegForm.bind(this)} />
    }
}
export default ModalHOC(LoginRegisterModal);
