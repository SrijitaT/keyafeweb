import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useSelector } from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({hidden,setHidden}) =>{
let cartItemCount = useSelector(selectCartItemsCount);
    return(<div className="cart-icon" onClick={()=>setHidden(!hidden)}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItemCount}</span>
    </div>)
}

export default CartIcon;