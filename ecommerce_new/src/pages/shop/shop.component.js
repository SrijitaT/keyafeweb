import React,{useState} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/preview-collection/preview-collection.component";


export default function ShopPage(props) {
  let initialState = SHOP_DATA;
  const { id } = props.match.params;
  const [collections, setCollections] = useState(initialState)
  let idToTitleMap = {"breads":"Pizza And Breads","drycakes":"Dry Cakes","snacks":"Savoury items(snacks)"}
  
  return (
    <div>
      {
      collections.filter(c=>c.title.toLowerCase() == (idToTitleMap[id]?idToTitleMap[id]:id).toLowerCase()).map(c=>(
          <CollectionPreview key={c.id} title={c.title} items={c.items}/>
        ))
      }
    </div>
  )
}
