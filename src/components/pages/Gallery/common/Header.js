import React from 'react';
import '../style/ui.css';
import { Tab, Nav, Col, Row, Container } from "react-bootstrap";

function ProductHeader() {
    return (
        <header className="section-header">
        <nav className="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTop4">
<ul className="navbar-nav mr-auto">
<li><span className="nav-link">Hi, <a href="#"> Sign in </a> or <a href="#"> Register </a></span></li>
<li><a href="#" className="nav-link"> Deals </a></li>
<li><a href="#" className="nav-link"> Sell </a></li>
<li><a href="#" className="nav-link"> Help </a></li>
</ul>
<ul className="navbar-nav">
<li><a href="#" className="nav-link"> Ship to </a></li>
<li className="nav-item dropdown">
     <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">   Watchlist </a>
    <ul className="dropdown-menu small">
        <li><a className="dropdown-item" href="#">First item</a></li>
        <li><a className="dropdown-item" href="#">Second item</a></li>
        <li><a className="dropdown-item" href="#">Third item </a></li>
    </ul>
</li>
<li><a href="#" className="nav-link"> My shop </a></li>
<li><a href="#" className="nav-link"> <i className="fa fa-bell"></i> </a></li>
<li><a href="#" className="nav-link"> <i className="fa fa-shopping-cart"></i> </a></li>
</ul> 
</div> 
</div> 
</nav>

<Container fluid>
<section className="header-main border-bottom">
<div className="row row-sm">
<div className="col-6 col-sm col-md col-lg  flex-grow-0">
<a href="http://bootstrap-ecommerce.com" className="brand-wrap">
    {/*<img className="logo" src="images/logo.svg"/>*/}
    Keyafe
</a>
</div>
<div className="col-6 col-sm col-md col-lg flex-md-grow-0">


<div className="d-md-none float-right">
    <a href="#" className="btn btn-light"> <i className="fa fa-bell"></i> </a>
    <a href="#" className="btn btn-light"> <i className="fa fa-user"></i> </a>
    <a href="#" className="btn btn-light"> <i className="fa fa-shopping-cart"></i> 2 </a>
</div>


<div className="category-wrap d-none dropdown d-md-inline-block">
    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">   Shop by 
    </button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Machinery / Mechanical Parts / Tools </a>
        <a className="dropdown-item" href="#">Consumer Electronics / Home Appliances </a>
        <a className="dropdown-item" href="#">Auto / Transportation</a>
        <a className="dropdown-item" href="#">Apparel / Textiles / Timepieces </a>
        <a className="dropdown-item" href="#">Home & Garden / Construction / Lights </a>
        <a className="dropdown-item" href="#">Beauty & Personal Care / Health </a> 
    </div>
</div>  
</div> 
<div className="col-lg-6 col-xl col-md-5 col-sm-12 flex-grow-1">
<form action="#" className="search-header">
    <div className="input-group">
        <input type="text" className="form-control" placeholder="Search"/>
        <select className="custom-select border-left"  name="category_name">
                <option value="">All type</option><option value="codex">Special</option>
                <option value="comments">Only best</option>
                <option value="content">Latest</option>
        </select>
    </div>
</form> 
</div> 
<div className="col col-lg col-md flex-grow-0">
<button className="btn btn-block btn-primary" type="submit"> Search </button>
</div>
<div className="col col-lg col-md flex-grow-0">
<button className="btn btn-block btn-light" type="submit"> Advanced </button>
</div>
</div>
</section> 


<nav className="navbar navbar-main navbar-expand pl-0">
<ul className="navbar-nav flex-wrap">
  <li className="nav-item">
   <a className="nav-link" href="#">Home</a>
</li>
<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Demo pages </a>
    <div className="dropdown-menu dropdown-large">
        <nav className="row">
            <div className="col-6">
                <a href="page-index-1.html">Home page 1</a>
                <a href="page-index-2.html">Home page 2</a>
                <a href="page-category.html">All category</a>
                <a href="page-listing-large.html">Listing list</a>
                <a href="page-listing-grid.html">Listing grid</a>
                <a href="page-shopping-cart.html">Shopping cart</a>
                <a href="page-detail-product.html">Product detail</a>
                <a href="page-content.html">Page content</a>
                <a href="page-user-login.html">Page login</a>
                <a href="page-user-register.html">Page register</a>
            </div>
            <div className="col-6">
                <a href="page-profile-main.html">Profile main</a>
                <a href="page-profile-orders.html">Profile orders</a>
                <a href="page-profile-seller.html">Profile seller</a>
                <a href="page-profile-wishlist.html">Profile wishlist</a>
                <a href="page-profile-setting.html">Profile setting</a>
                <a href="page-profile-address.html">Profile address</a>
                <a href="page-components.html" target="_blank">More components</a>
            </div>
        </nav>
    </div>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Electronics</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Fashion</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Beauty</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Motors</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Sports</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Gardening</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Deals</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Under $10</a>
</li>
</ul>
</nav> 

</Container>
</header>
    )
}

export default ProductHeader
