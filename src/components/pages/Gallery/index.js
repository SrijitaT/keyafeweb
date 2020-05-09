import React, { Component } from 'react'
import Catalogue from "./Catalogue";
import BannerTop from "components/common/BannerTop";
export default class Gallery extends Component {
    render() {
        return (
            <div>
                <BannerTop pageName="Shop Now" />
                <Catalogue />
            </div>
        )
    }
}
