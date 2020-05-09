import React, { Component } from 'react'
import BannerTop from "components/common/BannerTop";
import AddEditProductModal from "./modal/AddEditProductModal";
import { connect } from 'react-redux';
import { uploadImage, getAllProductDetails } from 'redux/actions/imageUploadAction';
import { Form, Button, Alert, Modal, Card } from "react-bootstrap";

class UploadImg extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, prod_det: null, origin: "" }
    }
    componentDidMount() {
        this.props.getAllProductDetails();
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
                <div className="container">
                    <div className="row">
                        {this.props.allProducts.map(prod =>
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
                    </div>
                    <Button variant="primary" onClick={() => this.handleShowHide(true, this.handleValueToSend.bind(this, "add", null))}>
                        Add product
                    </Button>
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
    allProducts: state.imgUpload.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails }
)(UploadImg)