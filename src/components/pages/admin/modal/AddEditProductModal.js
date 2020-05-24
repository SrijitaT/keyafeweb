import React, { Component } from 'react'
import BannerTop from "components/common/BannerTop";
import { connect } from 'react-redux';
import { uploadImage } from 'redux/actions/imageUploadAction';
import { Form, Button, Alert, Modal, Card } from "react-bootstrap";
import ModalHOC from "../../../common/hoc/Modal";

class AddEditProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = { imageToUpload: "", prod_name: "", prod_price: 0, prod_category: 1, prev_prod_id: 0, show: false, setShow: false, prod_det: null }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        if (props.prod_det && (props.prod_det.id !== state.prev_prod_id)) {
            return {
                prod_name: props.prod_det.name,
                prod_price: props.prod_det.price,
                prod_category: props.prod_det.category,
                prev_prod_id: props.prod_det.id
            };
        } else if (props.prod_det == null && props._id !== state.prev_prod_id) {
            return {
                prod_name: "",
                prod_price: "",
                prod_category: "",
                prev_prod_id: props._id
            }
        }
        return null;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.uploadImage(this.state);
    }
    onFileUpload(event) {
        this.setState({ imageToUpload: event.target.files[0] })
    }
    handleOnChange(event, var_name) {
        this.setState({ [var_name]: event.target.value });
    }
    render() {
        return (
            <Form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" onChange={(e) => this.handleOnChange(e, "prod_name")} value={this.state.prod_name} required />
                </Form.Group>
                <Form.Group controlId="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" onChange={(e) => this.handleOnChange(e, "prod_price")} value={this.state.prod_price} required />
                </Form.Group>
                <Form.Group controlId="selectCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.handleOnChange(e, "prod_category")} value={this.state.prod_category} required>
                        <option value="1">Birthday Cake</option>
                        <option value="2">Pastries</option>
                        <option value="3">Dry cake</option>
                        <option value="4">Cookies</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <label>Select the product picture:</label><br />
                    <input type="file" name="prod_pic" onChange={this.onFileUpload} value={this.state.imageToUpload} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.props.showSpinner}>
                    {this.props.showSpinner ? "Uploading.." : "Submit"}
                </Button>
                {this.props.showSpinner ? <img src={require("../../../../images/spinner3.gif")} height="40px" width="40px" /> : null}
            </Form>
        )
    }
}
const mapStateToProps = state => ({
    showSpinner: state.imgUpload.showSpinner,
    imageDetails: state.imgUpload.imageDetails,
    uploadStatus: state.imgUpload.uploadStatus
});
export default connect(
    mapStateToProps,
    { uploadImage }
)(ModalHOC(AddEditProductModal))