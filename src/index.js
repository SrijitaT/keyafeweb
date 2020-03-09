import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index.js';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./common/Header.js";
import About from "./pages/About.js";
import Gallery from "./pages/Gallery/index";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";
import UploadImg from "./pages/admin/UploadImg";

ReactDOM.render(<Router>
    <Header />
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/gallery">
            <Gallery />
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
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
