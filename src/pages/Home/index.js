import React from 'react';
import MainSlider from './MainSlider.js';
import BannerBottomIcons from "./BannerBottomIcons.js";
import BannerBottom from "./BannerBottom";

function Home() {
    return (
        <div>
            <MainSlider />
            <BannerBottomIcons />
            <BannerBottom />
        </div>
    );
}

export default Home;
