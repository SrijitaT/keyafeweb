import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({history,setHidden}) =>{
    const cart = useSelector(state=>state.cart)
    return (<div className="cart-dropdown">
        <div className="cart-items">{
          cart.cartItems.length?cart.cartItems.map((cartItem,idx)=><CartItem key={idx} item={cartItem}/>)
          :
          <span className="empty-message">No items in cart</span>
        }</div>
        <CustomButton inverted onClick={()=>{history.push("/checkout");setHidden(true)}}>GO TO CHECKOUT</CustomButton>
    </div>)
}

export default withRouter(CartDropdown);