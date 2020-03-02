import React from 'react';

function About() {
    return (
        <React.Fragment>
            <div class="banner2-w3ls">
            </div>
            <div class="breadcrumb-agile">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
            <section class="bottom-banner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 about-img-pages">
                        </div>
                        <div class="col-lg-6 about-info">
                            <div class="title text-center mb-5">
                                <h3 class="text-dark mb-2">About Us</h3>
                                <p>Ut enim ad minim veniam, quis nostrud ullam.</p>
                            </div>
                            <div class="service-in text-left">
                                <div class="card">
                                    <div class="card-body">
                                        <i class="far fa-heart"></i>
                                        <h5 class="card-title mt-4 mb-3">Made With Love</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
									incididunt ut labore.
								</p>
                                    </div>
                                </div>
                            </div>
                            <div class="service-in text-left mt-5">
                                <div class="card">
                                    <div class="card-body">
                                        <i class="fas fa-glass-martini"></i>
                                        <h5 class="card-title mt-4 mb-3">Seasonal Pastries</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
									incididunt ut labore.
								</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default About;