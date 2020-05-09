import React, { Component } from 'react'
import BannerTop from "components/common/BannerTop";
import AddEditProductModal from "./modal/AddEditProductModal";
import { connect } from 'react-redux';
import { uploadImage } from 'redux/actions/imageUploadAction';
import { getAllProductDetails } from 'redux/actions/productAction';
import { Form, Button, Alert, Modal, Card, Tab, Row, Col, Nav } from "react-bootstrap";

class UploadImg extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, prod_det: null, origin: "" }
    }
    componentDidMount() {
        this.props.getAllProductDetails(1);
    }
    handleShowHide(val, cb) {
        if (typeof cb === "function") {
            this.setState({ show: val }, cb)
        } else {
            this.setState({ show: val })
        }
    }
    handleValueToSend(origin, prod_det) {
        this.setState({ origin, prod_det })
    }
    render() {
        return (
            <React.Fragment>
                <BannerTop pageName="Upload Images" />
                <div className="container-fluid">
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
                                    {["first", "second", "third", "fourth"].map((cat, index) =>
                                        <Tab.Pane eventKey={cat} key={cat} onClick={() => this.props.getAllProductDetails(index + 1)}>
                                            <Row>
                                                {this.props.allProducts[index + 1].map(prod =>
                                                    <div className="col-sm-4" key={prod.id}>
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src={prod.img_url} />
                                                            <Card.Body>
                                                                <Card.Title>{prod.name}</Card.Title>
                                                                <Card.Text>
                                                                    Price: Rs {prod.price}<br />
                                                                    Category: {prod.category}<br />
                                                                </Card.Text>
                                                                <Button variant="outline-success" onClick={() => this.handleShowHide(true, this.handleValueToSend.bind(this, "edit", prod))}>
                                                                    Edit
                                                                </Button>
                                                                <Button variant="outline-danger">Delete</Button>
                                                            </Card.Body>
                                                        </Card></div>)}
                                            </Row>
                                        </Tab.Pane>
                                    )}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <Row>
                        <Col sm={10} />
                        <Col sm={2}>
                            <Button variant="primary" onClick={() => this.handleShowHide(true, this.handleValueToSend.bind(this, "add", null))}>
                                Add product
                    </Button>
                        </Col>
                    </Row>
                    <AddEditProductModal
                        show={this.state.show}
                        handleShowHide={this.handleShowHide.bind(this)}
                        title={this.state.origin == "edit" ? "Edit product details" : "Fill the form to add a product"} prod_det={this.state.prod_det}
                        _id="add" />
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    allProducts: state.keyafestore.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails }
)(UploadImg)