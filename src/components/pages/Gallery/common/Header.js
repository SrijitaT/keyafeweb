import React from 'react';
import '../style/ui.css';
import { Tab, Nav, Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProductHeader() {
    return (
      <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
                <img className="logo" src="images/logo.png"/>
              </a> 
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form action="#" className="search-header">
                <div className="input-group w-100">
                  <select className="custom-select border-right"  name="category_name">
                      <option value="">All type</option><option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                  </select>
                    <input type="text" className="form-control" placeholder="Search"/>
                    
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i> Search
                      </button>
                    </div>
                  </div>
              </form> 
            </div> 
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                    <FontAwesomeIcon icon="user" />
                      <span className="notify">3</span>
                    </div>
                    <small className="text"> My profile </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                     <FontAwesomeIcon icon="comment-dots"/>
                      <span className="notify">1</span>
                    </div>
                    <small className="text"> Message </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                    <FontAwesomeIcon icon="shopping-bag" />
                    </div>
                    <small className="text"> Orders </small>
                  </a>
                </div>
                <div className="widget-header">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                     <FontAwesomeIcon icon="cart-arrow-down" />
                    </div>
                    <small className="text"> Cart </small>
                  </a>
                </div>
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
</header> 
    )
}

export default ProductHeader
