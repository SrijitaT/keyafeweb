import React, { useState } from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

export default function Header() {
  const user = useSelector((state) => state.user);
  let [hidden,setHidden] = useState(true);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src="/images/logo/keyafe.png" width="100px" height="100px"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          user && user.currentUser?<div className="option">Welcome {user.currentUser.displayName}</div>
          :<Link className="option" to="/signIn">SIGN IN</Link>
        }
        <CartIcon hidden={hidden} setHidden={setHidden}/>
      </div>
      {!hidden?<CartDropdown setHidden={setHidden}/>:null}
    </div>
  )
}
