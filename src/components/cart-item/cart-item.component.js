import "./cart-item.styles.scss";
export default function CartItem({item:{id,name,price,imageUrl,quantity}}) {    
    return (
      <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">{quantity} x &#8377;{price}</span>
        </div>
      </div>
    )
  }