import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center py-sm-4 py-3">
            <div className="container py-xl-5 py-3">
                <div className="w3l-footer footer-social-agile mb-4">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="mx-1">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li className="ml-1">
                            <a href="#">
                                <i className="fab fa-vk"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="copy-right-grids text-light my-lg-5 my-4 pb-4">© 2020 Keyafe. All Rights Reserved</p>
            </div>
            {/*<img src={require("../../images/chef.png")} alt="" className="img-fluid chef-style" />*/}
        </footer >
    )
}
