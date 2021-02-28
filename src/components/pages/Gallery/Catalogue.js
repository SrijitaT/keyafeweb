import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails } from 'redux/actions/productAction';
import ProductsByCategory from "./ProductsByCategory";
import ProductHeader from "./common/Header";
import ProductCarousel from "./ProductCarousel";
import ItemList from "./ItemList";
import {Container} from 'react-bootstrap'


class Catalogue extends Component {
    render() {
        return (
            <>
            <ProductHeader/>
            <ProductCarousel/>
            <ItemList/>
          </>
        )
    }
}
const mapStateToProps = state => ({
    allProducts: state.keyafestore.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails }
)(Catalogue);