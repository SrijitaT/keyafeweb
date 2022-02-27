import React from 'react'
import "./collection-item.styles.scss";
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

export default function CollectionItem(item) {
  let dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage:`url(${item.img_url})`}}/>
      <CustomButton inverted onClick={()=>dispatch(addItem([item]))}>Add to Cart</CustomButton>
      <div className="collection-footer">
        <span className="name">{item.title}</span>
        <span className="price">&#8377;{item.unit_price}</span>
      </div>
     
    </div>
  )
}
