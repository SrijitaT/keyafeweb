import React,{useState} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

export default function ShopPage() {
  let initialState = SHOP_DATA;
  const [collections, setCollections] = useState(initialState)
  return (
    <div>
      {
        collections.map(c=>(
          <CollectionPreview title={c.title} items={c.items}/>
        ))
      }
    </div>
  )
}
