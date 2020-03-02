import React from 'react';
import MainSlider from './MainSlider.js';


function Home() {
    return (
        <div>
            <MainSlider />
            <div className="icons-banner-botom">
                <div className="container">
                    <ul className="list-unstyled my-4">
                        <li className="icons-mkw3ls">
                            <p className="mb-2">Chocolate</p>
                            <img src={require("./images/img1.png")} className="img-fluid" alt="" />
                        </li>
                        <li className="icons-mkw3ls">
                            <p className="mb-2">Strawberry</p>
                            <img src={require("./images/img2.png")} className="img-fluid" alt="" />
                        </li>
                        <li className="icons-mkw3ls">
                            <p className="mb-2">Pista</p>
                            <img src={require("./images/img3.png")} className="img-fluid" alt="" />
                        </li>
                        <li className="icons-mkw3ls">
                            <p className="mb-2">Vanilla</p>
                            <img src={require("./images/img4.png")} className="img-fluid" alt="" />
                        </li>
                        <li className="icons-mkw3ls">
                            <p className="mb-2">Muffins</p>
                            <img src={require("./images/img5.png")} className="img-fluid" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
