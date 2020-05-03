import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails } from 'redux/actions/imageUploadAction';

class Catalogue extends Component {
    componentDidMount() {
        this.props.getAllProductDetails();
    }
    render() {
        return (
            <div className="gallery py-5">
                <div className="container py-xl-5 py-lg-3">
                    <div className="title text-center mb-5">
                        <h2 className="text-dark mb-2">Gallery</h2>
                        <p>Ut enim ad minim veniam, quis nostrud ullam.</p>
                    </div>
                    <div className="row w3ls_portfolio_grids">
                        {this.props.allProducts.map(prod => (<div className="col-sm-4 agileinfo_portfolio_grid" key={prod.id} >
                            <div className="w3_agile_portfolio_grid1">
                                <a href="images/g1.jpg" title={prod.name}>
                                    <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                        <div className="w3layouts_port_head">
                                            <h3>{prod.name}</h3>
                                        </div>
                                        {/*<img src={require("images/g1.jpg")} alt=" " className="img-fluid" />*/}
                                        <img src={prod.img_url} className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    allProducts: state.imgUpload.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails }
)(Catalogue);