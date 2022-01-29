import { useState } from "react";
import "./checkout.styles.scss";
import {selectCartTotal} from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
    let [headers,setHeaders] = useState(["Product","Description","Quantity","Price","Remove"]);
    let total = useSelector(selectCartTotal);
    let cartItems = useSelector(state=>state.cart.cartItems);
return(
    <div className="checkout-page">
        <div className="checkout-header">
            {headers.map((h,index)=>(<div key={index} className="header-block">
                {h}
            </div>))}
        </div>
            {
                cartItems.map((cartItem,idx)=><CheckoutItem key={idx} cartItem={cartItem}/>)
            }
            <div className="total"> <span>TOTAL: &#8377;{total}</span></div>
    </div>
)
}

export default CheckoutPage;