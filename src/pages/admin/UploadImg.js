import React, { Component } from 'react'
import BannerTop from "../../common/BannerTop";
import Gallery from "../Gallery/index";
class UploadImg extends Component {
    render() {
        return (
            <React.Fragment>
                <Gallery />
                <div className="container">
                    <form method="POST" action="http://localhost:5000/api/upload-product-pic" enctype="multipart/form-data">
                        <div>
                            <label>Select the product picture:</label>
                            <input type="file" name="prod_pic" />
                        </div>
                        <div>
                            <input type="submit" name="btn_upload_profile_pic" value="Upload" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default UploadImg;