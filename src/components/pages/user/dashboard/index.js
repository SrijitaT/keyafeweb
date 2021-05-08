import React from 'react';
import PropTypes from 'prop-types';
import ProductHeader from "../../shopping/common/Header";
import Sidebar from './sidebar';
import AccountOverview from './accountOverview';
import Addresses from './addresses';
import MyOrders from './myorders';
import Wishlist from "./wishlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
    {
        path:"/wishlist",
        sidebar:() => <Wishlist/>,
        main: () => <Wishlist/>
    },
    {
        path: "/my_orders",
        sidebar: () => <MyOrders/>,
        main: () => <MyOrders/>
      },
  {
    path: "/addresses",
    exact: true,
    sidebar: () => <Addresses/>,
    main: () => <Addresses/>
  },
  {
    path: "/",
    sidebar: () => <AccountOverview/>,
    main: () => <AccountOverview/>
  },
  
];

function Dashboard() {
  return (
      <>
    <ProductHeader/>
    <div className="container-fluid">
    <div className="row">
    <Router>
        <Sidebar/>
          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        
      
    </Router>
    </div></div>
    </>
  );
}


/*class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <ProductHeader/>
                <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                  <AccountOverview/>
                  <Addresses/>
                  <MyOrders/>  
                </div>
                </div>
            </>
        );
    }
}*/

Dashboard.propTypes = {};

export default Dashboard;
