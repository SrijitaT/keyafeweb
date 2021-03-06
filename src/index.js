import React from 'react';
import ReactDOM from 'react-dom';
import './components/pages/FontAwesomeIcons/index';
import './index.css';
import Home from './components/pages/Home/index.js';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/common/Header.js";
import About from "./components/pages/About.js";
import Shopping from "./components/pages/shopping/index";
import Contact from "./components/pages/Contact";
import Footer from "./components/common/Footer";
import UploadImg from "./components/pages/admin/UploadImg";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/cart/Checkout";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "redux/helpers/setAuthToken";
import { setCurrentUser, logoutUser } from "redux/actions/authActions";
import store from "./redux/store";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    //Decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken);
    //Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    //Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        //logout user
        store.dispatch(logoutUser());
        //TODO:Clear current profile
        //Redirect to login
        //window.location.href = "/login";
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
          
            <Switch>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/shopping">
                    <Shopping />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/upload/images"><UploadImg /></Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
