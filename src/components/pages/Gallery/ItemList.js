import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProductDetails } from 'redux/actions/productAction';
import { Container } from 'react-bootstrap'
import stars from "./images/icons/stars-active.svg"


class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	componentDidMount(){
		console.log("In component did mount---------------------");
		this.props.getAllProductDetails();
	}
	render() {
		return (
			<>
			{this.props.allProducts.length>0	?  this.props.allProducts.map(item=>
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
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">9/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 5 Years </span> 
					<span className="tag"> 80 reviews </span>
					<span className="tag"> Russia </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">Rs {item.price}</span> 
					<small className="text-muted">/per pound</small>
				</div> 
				<small className="text-warning">Paid shipping</small>
				
				<p className="mt-3">
					<a href="#" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Add to cart </a>
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
    { getAllProductDetails }
)(ItemList);