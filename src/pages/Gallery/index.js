import React, { Component } from 'react'
import Catalogue from "./Catalogue";
import BannerTop from "../../common/BannerTop";
export default class Gallery extends Component {
    render() {
        return (
            <div>
                <BannerTop pageName="Gallery" />
                <Catalogue />
            </div>
        )
    }
}
