import React from 'react'
import "./collection-item.styles.scss";
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

export default function CollectionItem({id,name,price,imageUrl,title}) {
  let dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
      <CustomButton inverted onClick={()=>dispatch(addItem([{id,name,price,imageUrl,category:title}]))}>Add to Cart</CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">&#8377;{price}</span>
      </div>
     
    </div>
  )
}
