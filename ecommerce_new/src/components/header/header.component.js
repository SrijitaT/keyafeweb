import React from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

export default function Header({currentUser}) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src="images/logo/keyafe.png" width="100px" height="100px"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser?<div className="option" onClick={()=>auth.signOut()}>Welcome {currentUser.displayName}</div>
          :<Link className="option" to="/signIn">SIGN IN</Link>
        }
      </div>
    </div>
  )
}
