import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails, addToCart } from 'redux/actions/productAction';
import { Button, Row, Col } from "react-bootstrap";

class ProductsByCategory extends Component {
    componentDidMount() {
        if (this.props.category == 1)
            this.props.getAllProductDetails(this.props.category);
    }
    render() {
        return (
            <div className="row w3ls_portfolio_grids">
                {this.props.allProducts[parseInt(this.props.category)].map(prod => (<div className="col-sm-4 agileinfo_portfolio_grid" key={prod.id} >
                    <div className="w3_agile_portfolio_grid1">
                        <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                            <div className="w3layouts_port_head">
                                <Row>
                                    <Col sm={2} />
                                    <Col sm={4}><h4 className="text-light align-center">Name : </h4></Col>
                                    <Col sm={4}><h4 className="text-light align-center">{prod.name}</h4></Col>
                                    <Col sm={2} />
                                </Row>
                                <Row>
                                    <Col sm={2} />
                                    <Col sm={4}><h4 className="text-light align-center">Price : </h4></Col>
                                    <Col sm={4}><h4 className="text-light align-center">Rs {prod.price}</h4></Col>
                                    <Col sm={2} />
                                </Row>

                                <Button variant="outline-light" onClick={() => this.props.addToCart(prod)}>Add to cart</Button>
                            </div>
                            <img src={prod.img_url} className="img-fluid" />
                        </div>
                    </div>
                </div>))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    allProducts: state.keyafestore.allProducts,
    cart: state.keyafestore.cart
});
export default connect(
    mapStateToProps,
    { getAllProductDetails, addToCart }
)(ProductsByCategory);