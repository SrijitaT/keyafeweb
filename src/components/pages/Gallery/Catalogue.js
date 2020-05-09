import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails } from 'redux/actions/productAction';
import { Tab, Nav, Col, Row } from "react-bootstrap";
import ProductsByCategory from "./ProductsByCategory";
class Catalogue extends Component {
    render() {
        return (
            <div className="gallery py-5">
                <div className="container-fluid py-xl-5 py-lg-3">
                    <div className="title text-center mb-5">
                        <h2 className="text-dark mb-2">Welcome to Keyafe Store</h2>
                        <p>Hover over the images to add the item to cart. Happy ordering!</p>
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" onClick={() => this.props.getAllProductDetails(1)}>Birthday Cakes</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" onClick={() => this.props.getAllProductDetails(2)}>Pastries</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" onClick={() => this.props.getAllProductDetails(3)}>Dry cakes</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" onClick={() => this.props.getAllProductDetails(4)}>Cookies</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ProductsByCategory category="1" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ProductsByCategory category="2" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <ProductsByCategory category="3" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <ProductsByCategory category="4" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
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