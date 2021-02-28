import React, { useState } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import cartImg from "./cart3.png";
//import '../../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import LoginRegisterModal from "../pages/Ecommerce/LoginRegisterModal";
import { logoutUser } from "redux/actions/authActions";

function Header(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.keyafestore.cart);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo text-left">
                    <h1>
                        <Link to="/" className="navbar-brand">Keyafe</Link>
                    </h1>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-lg-auto text-lg-right text-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home
								<span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Shop now</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            {isAuthenticated ?
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Welcome {user.username}
                                    </Link>
                                    <div className="dropdown-menu text-lg-left text-center" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item scroll">My orders</Link>
                                        <Link className="dropdown-item scroll">My Profile</Link>
                                        <Link className="dropdown-item scroll">Change password</Link>
                                        <Link className="dropdown-item scroll" onClick={() => dispatch(logoutUser())}>Logout</Link>
                                    </div>
                                </li>
                                :
                                <LoginRegisterModal
                                    btnName="Login"
                                    variant="outline-light"
                                    title="Login Form" />}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><img src={cartImg} width={30} height={30} /><Badge variant="light">{cart.length}</Badge></Link>
                        </li>
                    </ul>

                    <div className="menu">
                        {show ? <a onClick={handleClose}>X</a> : <a className="navicon" onClick={handleShow}></a>}
                        {show ?
                            <ul className="toggle-menu list-unstyled">
                                <li>
                                    <a href="index.html">Index Page</a>
                                </li>
                                <li>
                                    <a className="scroll" href="#products">New Products</a>
                                </li>
                                <li>
                                    <a href="gallery.html">Latest Cakes</a>
                                </li>
                                <li>
                                    <a className="scroll" href="#order">Order Cake</a>
                                </li>
                                <li>
                                    <a className="scroll" href="#faqs">Faqs</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                            : null}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
