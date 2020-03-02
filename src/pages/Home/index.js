import React from 'react';
import MainSlider from './MainSlider.js';
import BannerBottomIcons from "./BannerBottomIcons.js";
import BannerBottom from "./BannerBottom";
import Services from "./Services";
import "../../App.css";

function Home() {
    return (
        <div>
            <MainSlider />
            <BannerBottomIcons />
            <BannerBottom />
            <Services />
        </div>
    );
}

export default Home;
