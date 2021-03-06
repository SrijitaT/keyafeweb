import React, { Component } from 'react'

export default class BannerBottom extends Component {
    render() {
        return (
            <div>
                <section class="banner-main-agiles py-5">
                    <div class="banner-bottom-w3layouts" id="about">
                        <div class="container pt-xl-5 pt-lg-3">
                            <div class="row mt-5">
                                <div class="col-lg-6">
                                    <p class="text-uppercase">A few words</p>
                                    <h3 class="aboutright">Welcome to Keyafe</h3>
                                    <h4 class="aboutright">Nemo enim ipsam voluptatem quia voluptas dolore magna aliqua</h4>
                                    <p>Sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet
							malesuada.
							mollis. Mauris porroinit consectetur cursus tortor vel interdum. Suspendisse interdum velit vel qu dapibus
							condimentum.</p>
                                    <button type="button" class="btn btn-primary button mt-md-5 mt-4" onclick="window.location='about.html'">
                                        <span>Learn More</span>
                                    </button>
                                </div>
                                <div class="col-lg-6 about-img text-lg-enter">
                                    <img src={require("images/about.png")} alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="some-another text-center pb-5">
                        <div class="container pb-xl-5 pb-lg-3">
                            <i class="fas fa-utensils"></i>
                            <p class="text-uppercase mb-4 mt-2">A few words about our Site</p>
                            <h4 class="aboutright about-right-2">Nemo enim ipsam voluptatem quia voluptas dolore magna aliqua Suspendisse
					interdum velit vel qu dapibus condimentum.</h4>
                            <h5 class="text-uppsecase font-weight-bold text-dark mt-4">Srijita Thakur
					<span class="text-secondary font-weight-normal">(Master Chef)</span>
                            </h5>
                        </div>
                    </div>

                    <img src={require("images/cake7.png")} alt="" class="img-fluid cake-style" />
                </section>
            </div>
        )
    }
}
