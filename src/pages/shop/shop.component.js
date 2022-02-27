import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { useDispatch } from 'react-redux';
import {getProductOfCategory} from "../../redux/products/products.action";


export default function ShopPage(props) {
  const { id } = props.match.params;
  const [collections, setCollections] = useState(null);
  let dispatch = useDispatch();
  let idToTitleMap = {"breads":"Pizza And Breads","drycakes":"Dry Cakes","snacks":"Savoury items(snacks)"}
  useEffect(()=>{
    dispatch(getProductOfCategory(id))
    .then(res=>{console.log(res.data);
    setCollections(res.data)
    })
  },[])
  return (
    <div>
      {
      collections?
          <CollectionPreview title={id} items={collections}/>
  :"Loading..."  
      }
    </div>
  )
}
