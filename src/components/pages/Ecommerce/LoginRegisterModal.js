import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import ModalHOC from "../../common/hoc/Modal";
import Login from "./Login";
import Register from "./Register";

class LoginRegisterModal extends Component {
    state = {
        register: false
    }
    showRegisterForm = () => {
        this.setState({ register: true }, () => this.props.changeTitle("Registration Form"))
    }
    render() {
        return this.state.register ? <Register /> : <Login showRegisterForm={this.showRegisterForm.bind(this)} />
    }
}
export default ModalHOC(LoginRegisterModal);
