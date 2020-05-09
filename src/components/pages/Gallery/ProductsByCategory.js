import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails } from 'redux/actions/productAction';

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
        )
    }
}
const mapStateToProps = state => ({
    allProducts: state.keyafestore.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails }
)(ProductsByCategory);