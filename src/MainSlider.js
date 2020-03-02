import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import first from "./images/1.jpg";
import second from "./images/2.jpg";
import third from "./images/3.jpg";

function MainSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default MainSlider;
