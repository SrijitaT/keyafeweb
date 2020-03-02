import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
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
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
								<span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        {/*<li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
							    </Link>
                                <div className="dropdown-menu text-lg-left text-center" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item scroll" href="#services">Services</a>
                                    <a className="dropdown-item scroll" href="#products" title="">New Products</a>
                                    <a className="dropdown-item scroll" href="#news" title="">Company News</a>
                                    <Link className="nav-link" to="/about">Team</Link>
                                </div>
                            </li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="menu">
                        <a href="#" className="navicon"></a>
                        <div className="toggle">
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
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;
