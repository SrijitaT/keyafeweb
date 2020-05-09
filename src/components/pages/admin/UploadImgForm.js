import React, { Component } from 'react'
import BannerTop from "components/common/BannerTop";
//import Gallery from "components/pages/Gallery/index";
import { connect } from 'react-redux';
import { uploadImage } from 'redux/actions/imageUploadAction';
import { Form, Button, Alert } from "react-bootstrap";

class UploadImgForm extends Component {
    constructor(props) {
        super(props);
        this.state = { imageToUpload: null, prod_name: "", prod_price: 0, prod_category: 1 }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
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
            <React.Fragment>
                <BannerTop pageName="Upload Images" />
                <div className="container">
                    <Form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" onChange={(e) => this.handleOnChange(e, "prod_name")} />
                        </Form.Group>
                        <Form.Group controlId="productPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price" onChange={(e) => this.handleOnChange(e, "prod_price")} />
                        </Form.Group>
                        <Form.Group controlId="selectCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.handleOnChange(e, "prod_category")} >
                                <option value="1">Birthday Cake</option>
                                <option value="2">Pastries</option>
                                <option value="3">Dry cake</option>
                                <option value="4">Cookies</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <label>Select the product picture:</label><br />
                            <input type="file" name="prod_pic" onChange={this.onFileUpload} />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={this.props.showSpinner}>
                            {this.props.showSpinner ? "Uploading.." : "Submit"}
                        </Button>
                        {this.props.showSpinner ? <img src={require("../../../images/spinner3.gif")} height="40px" width="40px" /> : null}
                    </Form>
                    {this.props.uploadStatus ? <Alert key="upload" variant={"success"}>
                        Upload successful
                    </Alert> : null}
                    <ModalExample />
                </div>

            </React.Fragment>
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
)(UploadImgForm)