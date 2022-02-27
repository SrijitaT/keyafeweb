import "./checkout-item.styles.scss";
import { removeItem ,adjustQuantity} from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

function CheckoutItem({cartItem:{id,name,price,imageUrl,quantity,category}}) {  
    let dispatch = useDispatch();  
    return (
      <div className="checkout-item">
          <div className="image-container">
          <img src={imageUrl} alt="item"/>
          </div>
        
       <span className="name">{name}</span>
       <span className="quantity">
           <div className="arrow" onClick={()=>dispatch(adjustQuantity({id,name,price,imageUrl,quantity,category},"decrement"))}>&#10094;</div>
           <span className="value">{quantity}</span>
           <div className="arrow" onClick={()=>dispatch(adjustQuantity({id,name,price,imageUrl,quantity,category},"increment"))}>&#10095;</div>
        </span>
       <span className="price">{price}</span>
       <div className="remove-button" onClick={()=>dispatch(removeItem({id,name,price,imageUrl,quantity,category}))}>&#10005;</div>
      </div>
    )
}

export default CheckoutItem;
