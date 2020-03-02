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
import Gallery from "./pages/Gallery.js";
import Contact from "./pages/Contact"
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
        <Route path="/">
            <Home />
        </Route>
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
