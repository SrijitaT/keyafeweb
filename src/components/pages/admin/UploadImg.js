import React, { Component } from 'react'
import BannerTop from "components/common/BannerTop";
import Gallery from "components/pages/Gallery/index";
import { connect } from 'react-redux';
import { uploadImage } from 'redux/action';

const uploadUrl = "http://localhost:5000/api/upload-product-pic";
class UploadImg extends Component {
    constructor(props) {
        super(props);
        this.state = { showSpinner: false }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.setState({ showSpinner: true });
        this.props.uploadImage(2);
        console.log(event.target.files[0]);
        setTimeout(() => this.setState({ showSpinner: false }), 5000);
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        return (
            <React.Fragment>
                <Gallery />
                <div className="container">
                    <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div>
                            <label>Select the product picture:</label>
                            <input type="file" name="prod_pic" />
                        </div>
                        <div>
                            <input type="submit" name="btn_upload_profile_pic" value="Upload" />
                            {this.state.showSpinner ? <img src={require("../../../images/spinner3.gif")} height="50px" width="50px" /> : null}
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default connect(
    null,
    { uploadImage }
)(UploadImg)