import React from 'react';
import { logoutUser } from "redux/actions/authActions";
import { useDispatch } from 'react-redux';
import {Link,useRouteMatch} from "react-router-dom";

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
        <Link className={match ? "list-group-item active" : "list-group-item"} to={to}>{label}</Link>
    );
  }

function SideBar(){
    const dispatch = useDispatch();
    return(
    <div className="col-md-3">
		<nav className="list-group">
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Account overview"/>
            <OldSchoolMenuLink to="/addresses" label="My Address" />
            <OldSchoolMenuLink to="/my_orders" label="My Orders" />
            <OldSchoolMenuLink to="/wishlist" label="My wishlist" />
		    <Link className="list-group-item" onClick={() => dispatch(logoutUser())} > Log out </Link>
		</nav>
	</div> 
    )
}

export default SideBar;