import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () =>{
    const cart=useSelector(state=>state.cart)
    return (<div className="cart-dropdown">
        <div className="cart-items">{
            cart.cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
        }</div>
        <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
    </div>)
}

export default CartDropdown;