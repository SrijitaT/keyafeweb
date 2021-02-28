import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import first from "./slides/1.jpg";
import second from "./slides/2.jpg";
import third from "./slides/3.jpg";

function ProductCarousel() {
    return (
      <section class="section-intro padding-y">
        <Container fluid>
        <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Container>
      </section>
    )
}

export default ProductCarousel
