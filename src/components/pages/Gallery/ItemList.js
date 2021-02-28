import React from 'react'
import { Container } from 'react-bootstrap'
import prod1 from "./images/product1.jpg"
import stars from "./images/icons/stars-active.svg"


function ItemList() {
    return (
        <Container fluid>
<section className="padding-bottom">
<header className="section-heading mb-4">
	<h3 className="title-section">Product List</h3>
</header>

<div className="row">
	<div className="col-xl-3 col-lg-3 col-md-4 col-6">
		<div className="card card-product-grid">
			<a href="#" className="img-wrap"> <img src={prod1}/> </a>
			<figcaption className="info-wrap">
                <ul className="rating-stars mb-1">
                	<li className="stars-active">
						<img src={stars} alt=""/>
					</li>
					<li>
						<img src="images/icons/starts-disable.svg" alt=""/>
					</li>
				</ul>
				<div>
					<a href="#" className="text-muted">Clothes</a>
                	<a href="#" className="title">Men's T-shirt for summer</a>
				</div>
				<div className="price h5 mt-2">$99</div> 
			</figcaption>
		</div>
	</div> 
	<div className="col-xl-3 col-lg-3 col-md-4 col-6">
		<div className="card card-product-grid">
			<a href="#" className="img-wrap"> <img src={prod1}/> </a>
			<figcaption className="info-wrap">
                <ul className="rating-stars mb-1">
                	<li  className="stars-active">
						<img src={stars} alt=""/>
					</li>
					<li>
						<img src="images/icons/starts-disable.svg" alt=""/>
					</li>
				</ul>
				<div>
					<a href="#" className="text-muted">Clothes</a>
                	<a href="#" className="title">Winter Jacket for Men, All sizes</a>
				</div>
				<div className="price h5 mt-2">$19</div> 
			</figcaption>
		</div>
	</div> 
	<div className="col-xl-3 col-lg-3 col-md-4 col-6">
		<div className="card card-product-grid">
			<a href="#" className="img-wrap"> <img src={prod1}/> </a>
			<figcaption className="info-wrap">
                <ul className="rating-stars mb-1">
                	<li stye={{width:"80%"}} className="stars-active">
						<img src={stars} alt=""/>
					</li>
					<li>
						<img src="images/icons/starts-disable.svg" alt=""/>
					</li>
				</ul>
				<div>
					<a href="#" className="text-muted">Clothes</a>
                	<a href="#" className="title">Jeans Shorts for Boys Small size</a>
				</div>
				<div className="price h5 mt-2">$56</div>
			</figcaption>
		</div>
	</div> 
	<div className="col-xl-3 col-lg-3 col-md-4 col-6">
		<div className="card card-product-grid">
			<a href="#" className="img-wrap"> <img src={prod1}/> </a>
			<figcaption className="info-wrap">
                <ul className="rating-stars mb-1">
                	<li style={{width:"80%"}} className="stars-active">
						<img src={stars} alt=""/>
					</li>
					<li>
						<img src="images/icons/starts-disable.svg" alt=""/>
					</li>
				</ul>
				<div>
					<a href="#" className="text-muted">Clothes</a>
                	<a href="#" className="title">Jeans Shorts for Boys Small size</a>
				</div>
				<div className="price h5 mt-2">$56</div> 
			</figcaption>
		</div>
	</div> 
</div> 
</section>
</Container>
    )
}

export default ItemList
