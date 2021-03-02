import React from 'react'

function Sidebar(props) {
    console.log("props.children----",props.children);
    return (
        <section className="section-content padding-y">
            <div className="container-fluid">

                <div className="card mb-3">
	                <div className="card-body">
		                <ol className="breadcrumb float-left">
			            <li className="breadcrumb-item"><a href="#">Home</a></li>
			            <li className="breadcrumb-item"><a href="#">Category name</a></li>
			                <li className="breadcrumb-item active">Item details</li>
		            </ol>
	            </div> 
            </div> 



<div className="row">
	<aside className="col-md-2">

	<article className="filter-group">
		<h6 className="title">
			<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Product type </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_1">
			<div className="inner">
				<ul className="list-menu">
					<li><a href="#">Shorts  </a></li>
					<li><a href="#">Trousers </a></li>
					<li><a href="#">Sweaters  </a></li>
					<li><a href="#">Clothes  </a></li>
					<li><a href="#">Home items </a></li>
					<li><a href="#">Jackats</a></li>
					<li><a href="#">Somethings </a></li>
				</ul>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Brands </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_2">
			<div className="inner">
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Adidas  
				  	<b className="badge badge-pill badge-light float-right">120</b>  </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Nike 
				  	<b className="badge badge-pill badge-light float-right">15</b>  </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">The Noth Face 
				  	<b className="badge badge-pill badge-light float-right">35</b> </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">The cat 
				  	<b className="badge badge-pill badge-light float-right">89</b> </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" className="custom-control-input"/>
				  <div className="custom-control-label">Honda 
				  	<b className="badge badge-pill badge-light float-right">30</b>  </div>
				</label>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Price range </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_3">
			<div className="inner">
				<input type="range" className="custom-range" min="0" max="100" name=""/>
				<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Min</label>
				  <input className="form-control" placeholder="$0" type="number"/>
				</div>
				<div className="form-group text-right col-md-6">
				  <label>Max</label>
				  <input className="form-control" placeholder="$1,0000" type="number"/>
				</div>
				</div> 
				<button className="btn btn-block btn-primary">Apply</button>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Sizes </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_4">
			  <div className="inner">
			  	<label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> XS </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> SM </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> LG </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> XXL </span>
				  </label>
			  </div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Condition </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_5">
			<div className="inner">
				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Any condition</div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Brand new </div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Used items</div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Very old</div>
				</label>
			</div> 
		</div>
	</article> 

	</aside> 
	<main className="col-md-10">


<header className="mb-3">
		<div className="form-inline">
			<strong className="mr-md-auto">32 Items found </strong>
			<select className="mr-2 form-control">
				<option>Latest items</option>
				<option>Trending</option>
				<option>Most Popular</option>
				<option>Cheapest</option>
			</select>
			<div className="btn-group">
				<a href="page-listing-grid.html" className="btn btn-light" data-toggle="tooltip" title="List view"> 
					<i className="fa fa-bars"></i></a>
				<a href="page-listing-large.html" className="btn btn-light active" data-toggle="tooltip" title="Grid view"> 
					<i className="fa fa-th"></i></a>
			</div>
		</div>
</header>

{props.children}


<nav className="mb-4" aria-label="Page navigation sample">
  <ul className="pagination">
    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">4</a></li>
    <li className="page-item"><a className="page-link" href="#">5</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>


<div className="box text-center">
	<p>Did you find what you were looking for？</p>
	<a href="" className="btn btn-light">Yes</a>
	<a href="" className="btn btn-light">No</a>
</div>


	</main> 

</div>

</div> 
</section>
    )
}

export default Sidebar
