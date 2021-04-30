import React from 'react';
//import "./css/bootstrap.css";
import "./css/cm-overlay.css";
import "./css/flexslider.css";
import "./css/jquery.fatNav.css";
import "./css/style.css";
import "./css/font-awesome.css";

function Home() {
return (
<>
<div className="agileits_main jarallax">
<div className="container-fluid">
  <div className="w3ls-header">
	<div className="w3-agile-logo">
		<h1><a href="index.html">Keyafe</a></h1>
	</div>
	<div className="w3layouts-nav-right">
	<ul className="list-right w3l">
				<li><i className="fa fa-map-marker" aria-hidden="true"></i>  <span> Texas </span></li>
				<li><i className="fa fa-phone list-icon" aria-hidden="true"></i> <span>1234 423 23 </span></li>	
		</ul>
		<div className="fat-nav">
			<div className="fat-nav__wrapper">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="#about">About Us</a></li>
					<li><a href="#gallery">Menu</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#team">Team</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>		
		</div>
	<div className="clearfix"></div>
</div>	

<div className="w3_banner">
		<div className="container">
			<div className="slider">
				<div className="callbacks_container">
				   <ul className="rslides callbacks callbacks1" id="slider4">
						<li>							
							<div className="banner_text_w3layouts">
								<h3>welcome to Keyafe</h3>
								<p>Nam imperdiet tempus</p>
								<div className="w3-button">
									<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
								</div>
							</div>
						</li>
						<li>	
							<div className="banner_text_w3layouts">
								<h3>healthier side of home style</h3>
								<p>telsdasd lus nec enim tempus</p>
								<div className="w3-button">
									<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
								</div>
							</div>
						</li>
						<li>	
							<div className="banner_text_w3layouts">
								<h3>taste the experience</h3>
								<p>Nam tellus nec enim tempus</p>
								<div className="w3-button">
									<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
								</div>
							</div>
						</li>
						
					</ul>
				</div>
		   </div>
		</div>   
	</div>	

</div>

<div className="w3l-about jarallax" id="about">
	<div className="container">
		<div className="w3-agile-title">
				<p><i className="fa fa-cutlery" aria-hidden="true"></i></p>
				<div className="w3-agile-title-pos">
					<h3 className="agileits-title">about us</h3>
				</div>
		</div>
		<div className="agile-about-top">
			<div className="col-md-4 col-sm-4 agileits-aboutright">
				<h3 className="about-head">Phasellus euismod purus sit amet ipsum imperdiet sodales.</h3>
				<div className="about-content1">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
				</div>
				<div className="about-content1">
						<h4>Lorem ipsum dolor sit amet.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
				</div>
			</div>
			<div className="col-md-4  col-sm-4 agileits-aboutleft"></div>
			<div className="col-md-4 col-sm-4 agileits-aboutright">
				<h3 className="about-head">Phasellus euismod purus sit amet ipsum imperdiet sodales.</h3>
				<div className="about-content1">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
				</div>
				<div className="about-content1">
						<h4>Lorem ipsum dolor sit amet.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>	
		<div className="agileinfo-bottom">
		<div className="col-md-6 col-sm-6 col-xs-6 agileits-aboutright about-bottom">
			<h3 className="about-head">Phasellus euismod purus sit amet ipsum imperdiet sodales.</h3>
			<div className="about-content1">
				<h4>Lorem ipsum dolor sit amet.</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
			</div>
			<div className="about-content1">
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
			</div>
		</div>
		<div className="col-md-6 col-sm-6 col-xs-6 agileits-aboutright about-bottom1">
			<h3 className="about-head">Phasellus euismod purus sit amet ipsum imperdiet sodales.</h3>
			<div className="about-content1">
				<h4>Lorem ipsum dolor sit amet.</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
			</div>
			<div className="about-content1">
					<h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod purus sit amet ipsum imperdiet sodales</p>
			</div>
		</div>
		<div className="clearfix"></div>
		</div>
	</div>
</div>


	<div className="w3l-about timing jarallax">
		<div className="container">
			<div className="col-md-6 col-sm-12 agile_timing_left"></div>
			<div className="col-md-6 col-sm-12 agile_timing_right">
				<a href="mailto:foodie@example.com">foodie@example.com</a>
				<h4>opening hours</h4>
				<ul><li className="wthree-time-title">LUNCH</li>
					<li><span>Monday-Friday</span>: 11:00 AM - 3:00 PM</li>
					<li><span>Saturday-Sunday</span>: 11:00 AM - 4:00 PM</li>
					<li className="wthree-time-title">DINNER</li>
					<li><span>Monday-Friday</span>: 7:00 PM - 10:00 PM</li>
					<li><span>Saturday-Sunday</span>: 7:00 PM - 11:00 PM</li>
				</ul>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>


	<div className="w3l-about jarallax" id="gallery">
		<div className="container">
			<div className="w3-agile-title">
				<p><i className="fa fa-cutlery" aria-hidden="true"></i></p>
				<div className="w3-agile-title-pos">
					<h3 className="agileits-title">Menu</h3>
				</div>
			</div>
			<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" className="nav nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="#home-main" id="home-tab" role="tab" data-toggle="tab" aria-controls="home-main" aria-expanded="true">All</a></li>
						<li role="presentation"><a href="#learning" role="tab" id="learning-tab" data-toggle="tab" aria-controls="learning">starters</a></li>
						<li role="presentation"><a href="#playing" role="tab" id="playing-tab" data-toggle="tab" aria-controls="playing">main course</a></li>
						<li role="presentation"><a href="#painting" role="tab" id="painting-tab" data-toggle="tab" aria-controls="painting">salads</a></li>
						<li role="presentation"><a href="#school" role="tab" id="school-tab" data-toggle="tab" aria-controls="school">desserts</a></li>
					</ul>
					<div id="myTabContent" className="tab-content">
						<div role="tabpanel" className="tab-pane fade in active" id="home-main" aria-labelledby="home-tab">
							<div className="w3_tab_img">
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g2.jpg">
										  <figure className="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " className="img-responsive" />
										  </figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Lorem</h5>
										<p>Consectetur</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g5.jpg">
										  <figure className="imghvr-shutter-in-out-diag-2"><img src="images/g5.jpg" alt=" " className="img-responsive" />
										  </figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Ipsum</h5>
										<p>Adipiscing </p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g3.jpg">
										  <figure className="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " className="img-responsive" />
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Vivamus</h5>
										<p>Ullamcorper  </p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g4.jpg">
										  <figure className="imghvr-shutter-in-out-diag-2"><img src="images/g4.jpg" alt=" " className="img-responsive" />
										</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Fusce</h5>
										<p>Tristique</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g3.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " className="img-responsive" />
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Nullam</h5>
										<p>accumsan</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g4.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g4.jpg" alt=" " className="img-responsive" />
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Donec</h5>
										<p>Vulputate</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g1.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g1.jpg" alt=" " className="img-responsive" />
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Vivamus</h5>
										<p>Sodales</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g1.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " className="img-responsive" />
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Morbi</h5>
										<p>Ornare </p>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="learning" aria-labelledby="learning-tab">
							<div className="w3_tab_img">
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g2.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Vivamus</h5>
										<p>Eleifend</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g3.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Cras</h5>
										<p>Pulvinar</p>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="playing" aria-labelledby="playing-tab">
							<div className="w3_tab_img">
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g4.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g4.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Maecenas</h5>
										<p>Blandit</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g1.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g1.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Sodales</h5>
										<p>Vivamus</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g2.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Vivamus</h5>
										<p>Eleifend</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g3.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Maecenas</h5>
										<p>Blandit</p>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="painting" aria-labelledby="painting-tab">
							<div className="w3_tab_img">
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g1.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g1.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Morbi</h5>
										<p>Ornare </p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g2.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Cras</h5>
										<p>Pulvinar</p>
									</div>
								</div>
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g3.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Donec</h5>
										<p>Vulputate</p>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="school" aria-labelledby="school-tab">
							<div className="w3_tab_img">
								<div className="col-sm-3 w3_tab_img_left">
									<div className="demo">
										<a className="cm-overlay" href="images/g5.jpg">
											<figure className="imghvr-shutter-in-out-diag-2"><img src="images/g5.jpg" alt=" " className="img-responsive"/>
											</figure>
										</a>
									</div>
									<div className="agile-gallery-info">
										<h5>Lorem</h5>
										<p>Consectetur</p>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
			</div>
		</div>
</div>


<div className="w3l-about jarallax" id="services">
		<div className="container">
			<div className="w3-agile-title">
				<p><i className="fa fa-cutlery" aria-hidden="true"></i></p>
				<div className="w3-agile-title-pos">
					<h3 className="agileits-title">services</h3>
				</div>
			</div>
			<div className="clearfix"></div>
			<div className="agile_banner_bottom_grids">
				<div className="col-md-8 agileinfo_service_right">
					<div className="col-md-6 w3l_service_right_grid">
						<div className="w3_service_right_grid_main">
							<div className="col-xs-4 agileits_service_left">
								<div className="w3ls_service_left_grid hvr-rectangle-out">
									<i className="fa fa-birthday-cake" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 agileits_service_right">
								<h4>best birthday freebies </h4>
								<p>Duis lobortis in ex sed cursus. Etiam ac risus at ex blandit placerat id ac augue.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3_service_right_grid_main">
							<div className="col-xs-4 agileits_service_left">
								<div className="w3ls_service_left_grid hvr-rectangle-out">
									<i className="fa fa-coffee" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 agileits_service_right">
								<h4>dish of the day</h4>
								<p>Duis lobortis in ex sed cursus. Etiam ac risus at ex blandit placerat id ac augue.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
					<div className="col-md-6 w3l_service_right_grid">
						<div className="w3_service_right_grid_main">
							<div className="col-xs-4 agileits_service_left">
								<div className="w3ls_service_left_grid hvr-rectangle-out">
									<i className="fa fa-users" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 agileits_service_right">
								<h4>professional chef's</h4>
								<p>Duis lobortis in ex sed cursus. Etiam ac risus at ex blandit placerat id ac augue.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3_service_right_grid_main">
							<div className="col-xs-4 agileits_service_left">
								<div className="w3ls_service_left_grid hvr-rectangle-out">
									<i className="fa fa-motorcycle" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 agileits_service_right">
								<h4>take away</h4>
								<p>Duis lobortis in ex sed cursus. Etiam ac risus at ex blandit placerat id ac augue.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 agileinfo_service_left"></div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

<div className="w3l-about jarallax" id="team">
	<div className="container">
		<div className="w3-agile-title">
				<p><i className="fa fa-cutlery" aria-hidden="true"></i></p>
				<div className="w3-agile-title-pos">
					<h3 className="agileits-title">team</h3>
				</div>
			</div>
		<div className="w3-about-grids">
			<div className="col-md-12  col-sm-12 col-xs-12 w3-about-left">
				  <section className="slider">
					<div id="slider" className="flexslider">
					  <ul className="slides">
							<li>
								<video className="col-md-6 col-sm-6 col-xs-12 agile-media" controls>
									<source src="videos/1.mp4" type="video/mp4"/>
								</video>
								<div className="col-md-6 col-sm-6 col-xs-12 caption">
									<img src="images/c.jpg" alt="chef"/>
									<h4>Edgar M. Kerr</h4>
									<p>executive chef</p>
								</div>	
								<div className="clearfix"> </div>
							</li>
							<li>
								<video className="col-md-6 col-sm-6 col-xs-12 agile-media" controls>
									<source src="videos/3.mp4" type="video/mp4"/>
								</video>
								<div className="col-md-6 col-sm-6 col-xs-12 caption">
									<img src="images/d.jpg" alt="chef"/>
									<h4>Silvia D. Perry</h4>
									<p> chef manager,</p>
								</div>
								<div className="clearfix"> </div>
							</li>
							<li>
								<video className="col-md-6 col-sm-6 col-xs-12 agile-media" controls>
									<source src="videos/2.mp4" type="video/mp4"/>
								</video>
								<div className="col-md-6 col-xs-12 caption">
									<img src="images/e.jpg" alt="chef"/>
									<h4>Antonio </h4>
									<p>master chef.</p>
								</div>
								<div className="clearfix"> </div>
							</li>
					  </ul>
					</div>					
					<div className="clearfix"> </div>
				  </section>
			</div>
		</div>
	</div>
</div>


<div className="w3l-about w3ls-contact jarallax" id="contact">
	<div className="container">
		<div className="col-md-6  col-sm-12 agileinfo-contactleft">
			<h3 className="agileits-title">foodie</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
			<ul className="wthree-address">
				<li><i className="fa fa-map-marker" aria-hidden="true"></i><p className="address"> 2364 Parrish Avenue ,San Antonio,Texas. </p></li>
				<li><i className="fa fa-phone list-icon" aria-hidden="true"></i>123 456 7889</li>
				<li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>	
			</ul>
			<div className="agileinfo-social-grids">
				<ul>
					<li><a href="#"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#"><i className="fa fa-twitter"></i></a></li>
					<li><a href="#"><i className="fa fa-rss"></i></a></li>
					<li><a href="#"><i className="fa fa-vk"></i></a></li>
				</ul>
			</div>
		</div>
		<div className="col-md-6 col-sm-12 agileinfo-contactright">
			<h3 className="agileits-title">contact us</h3>
			<form action="#" method="post">
				<input type="text" className="name" name="name" placeholder="First Name" required=""/>
				<input type="text" className="name" name="name" placeholder="Last Name" required=""/>
				<input type="email" className="name" name="name" placeholder="Email" required=""/>
				<input type="text" className="name" name="name" placeholder="Subject" required=""/>
				<textarea placeholder="Your Message" required=""></textarea>
				<input type="submit" value="SEND MESSAGE"/>
			</form>
		</div>
		<div className="clearfix"></div>
	</div>
</div>


<div className="w3l-about sponsors jarallax">
	<div className="container">
	   <div className="some-happy-clients">
			<div className="w3-agile-title">
				<p><i className="fa fa-cutlery" aria-hidden="true"></i></p>
				<div className="w3-agile-title-pos">
					<h3 className="agileits-title">our sponsors</h3>
				</div>
			</div>
			<div className="clearfix"></div>
			<div className="some-happy-clients-list text-center">
				 <div className="clients">
					   <ul id="flexiselDemo3">
							<li><a href="index.html"><i className="fa fa-cc-stripe fa-4x" aria-hidden="true"></i></a></li>
							<li><a href="index.html"><i className="fa fa-meanpath fa-4x" aria-hidden="true"></i></a></li>
							<li><a href="index.html"><i className="fa fa-cc-amex fa-4x" aria-hidden="true"></i></a></li>
							<li><a href="index.html"><i className="fa fa-lastfm-square fa-4x" aria-hidden="true"></i></a></li>
						</ul>
				</div>  
			</div>
		</div>
	</div>
</div>



<div className="agileits_w3layouts-map">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997273.672218193!2d-104.56936882173544!3d31.09200792512632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C+USA!5e0!3m2!1sen!2sin!4v1490082267659"  style={{"border":0}} allowfullscreen></iframe>
</div>

<div className="agileinfo-copyright text-center">
		<p>© 2017 Foodie. All rights reserved | Design by <a href="//w3layouts.com/">W3layouts</a></p>
</div>

<div className="tooltip-content">
	<div className="modal fade features-modal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog modal-md">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h2 className="modal-title">Foodie</h2>
				</div>
				<div className="modal-body">
					<img src="images/g1.jpg" className="img-responsive" alt="image"/>
					<p>Fusce et congue nibh, ut ullamcorper magna. Donec ac massa tincidunt, fringilla sapien vel, tempus massa. Vestibulum felis leo, tincidunt sit amet tristique accumsan. In vitae dapibus metus. Donec nec massa non nulla mattis aliquam egestas et mi.</p>
				</div>
			</div>
		</div>
	</div>
</div>
</>
)}

export default Home;