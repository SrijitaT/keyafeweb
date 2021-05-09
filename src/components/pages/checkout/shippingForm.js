import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShippingFormWithoutAuth from "./shippingFormWithoutAuth";
import ShippingFormAuth from "./shippingFormAuth";

function ShippingForm(){
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    return(
        isAuthenticated?<ShippingFormAuth user={user}/>:<ShippingFormWithoutAuth/>
    )
}

export default ShippingForm;