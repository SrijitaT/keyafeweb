import React from 'react';
import BannerTop from "../common/BannerTop";
function About() {
    return (
        <React.Fragment>
            <BannerTop pageName="About us" />
            <section className="bottom-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 about-img-pages">
                        </div>
                        <div className="col-lg-6 about-info">
                            <div className="title text-center mb-5">
                                <h3 className="text-dark mb-2">About Us</h3>
                                <p>Ut enim ad minim veniam, quis nostrud ullam.</p>
                            </div>
                            <div className="service-in text-left">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="far fa-heart"></i>
                                        <h5 className="card-title mt-4 mb-3">Made With Love</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
									incididunt ut labore.
								</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-in text-left mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fas fa-glass-martini"></i>
                                        <h5 className="card-title mt-4 mb-3">Seasonal Pastries</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
									incididunt ut labore.
								</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="team py-5" id="team">
                <div className="container py-xl-5 py-lg-3">
                    <div className="title text-center mb-5">
                        <h3 className="text-dark mb-2">Our Team</h3>
                        <p>Ut enim ad minim veniam, quis nostrud ullam.</p>
                    </div>
                    <div className="row support-bottom text-center">
                        <div className="container">
                            <div className="row mt-30">
                                <div className="col-md-3 col-6">
                                    <div className="box15">
                                        <img src={require('images/t1.jpg')} alt="" className="img-fluid" />
                                        <div className="box-content">
                                            <h3 className="title">Cruiser</h3>
                                            <ul className="icon">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="box15">
                                        <img src={require('images/t2.jpg')} alt="" className="img-fluid" />
                                        <div className="box-content">
                                            <h3 className="title">Sthesia</h3>
                                            <ul className="icon">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="box15">
                                        <img src={require(`images/t3.jpg`)} alt="" className="img-fluid" />
                                        <div className="box-content">
                                            <h3 className="title">Frapples</h3>
                                            <ul className="icon">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="box15">
                                        <img src={require('images/t4.jpg')} alt="" className="img-fluid" />
                                        <div className="box-content">
                                            <h3 className="title">Molive</h3>
                                            <ul className="icon">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;