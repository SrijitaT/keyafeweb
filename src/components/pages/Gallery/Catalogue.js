import React, { Component } from 'react';
import ProductsByCategory from "./ProductsByCategory";
import ProductHeader from "./common/Header";
import SideBar from "./common/Sidebar";
import ProductCarousel from "./ProductCarousel";
import ItemList from "./ItemList";
import {Container} from 'react-bootstrap'


class Catalogue extends Component {
    render() {
        return (
            <>
            <ProductHeader/>
            <SideBar>  
                <ItemList/>
            </SideBar>
            {/*<ProductCarousel/>*/}
          
          </>
        )
    }
}

export default Catalogue;