import React from 'react';
import "./preview-collection.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';

export default function CollectionPreview({title,items}) {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">{
        items.filter((items,idx)=>idx<4).map(({id,...others})=>(
          <CollectionItem key={id} id={id} title={title} {...others}>{others.name}</CollectionItem>
        ))
      }</div>
    </div>
  )
}
