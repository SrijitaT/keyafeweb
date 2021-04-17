import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails,addToCart } from 'redux/actions/productAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
		this.addToCart = this.props.addToCart.bind(this);
	}
	componentDidMount(){
		this.props.getAllProductDetails(0);
	}
	render() {
		return (
			<>
			{ this.props.allProducts.length>0 ? this.props.allProducts.map(item=>
				<article className="card card-product-list">
					<div className="row no-gutters">
						<aside className="col-md-3">
							<a href="#" className="img-wrap">
								{/*<span className="badge badge-danger"> NEW </span>*/}
								<img src={item.img_url}/>
							</a>
						</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="#" className="h5 title"> {item.name}</a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li className="stars-active"> 
						<FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" />
						</li>
						<li>
						<FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" />
						</li>
					</ul>
					<div className="label-rating">9/10</div>
				</div> 
			
				{/*<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 5 Years </span> 
					<span className="tag"> 80 reviews </span>
					<span className="tag"> Russia </span>
				</p>*/}

				<p> {`${item.description.substring(0,150)}....`} </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">Rs {item.price}</span> 
					<small className="text-muted">/per pound</small>
				</div> 
				
				<p className="mt-3">
					<button className="btn btn-outline-primary" onClick={()=>this.props.addToCart(item)}><FontAwesomeIcon icon="cart-plus" />Add to cart </button>
				</p>

				{/*<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>*/}

			</div> 
		</aside> 
	</div> 
</article>): null}
</>
		)
	}
}

const mapStateToProps = state => ({
    allProducts: state.keyafestore.allProducts
});
export default connect(
    mapStateToProps,
    { getAllProductDetails,addToCart }
)(ItemList);