import React from 'react';

function Catalogue() {
    return (
        <div className="gallery py-5">
            <div className="container py-xl-5 py-lg-3">
                <div className="title text-center mb-5">
                    <h2 className="text-dark mb-2">Gallery</h2>
                    <p>Ut enim ad minim veniam, quis nostrud ullam.</p>
                </div>
                <div className="row w3ls_portfolio_grids">
                    <div className="col-sm-4 agileinfo_portfolio_grid">
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g1.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g1.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g2.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g2.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g3.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g3.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 agileinfo_portfolio_grid">
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g4.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g4.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g5.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g5.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g6.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g6.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 agileinfo_portfolio_grid">
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g7.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g7.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g8.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g8.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="w3_agile_portfolio_grid1">
                            <a href="images/g9.jpg" title="Keyafe">
                                <div className="agileits_portfolio_sub_grid agileits_w3layouts_team_grid">
                                    <div className="w3layouts_port_head">
                                        <h3>Keyafe</h3>
                                    </div>
                                    <img src={require("../../images/g9.jpg")} alt=" " className="img-fluid" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
