import React,{useState} from 'react';
import "./preview-collection.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';
import Grid from '@material-ui/core/Grid';
import FilterNavbar from "../filter-navbar/filter-navbar.component";
import FilterCard from '../filter-card/filter-card.component';

export default function CollectionPreview({title,items}) {
  const [hidden, setHidden] = useState(true);
  return (
    <>
    <FilterNavbar hidden={hidden} setHidden={setHidden}/>
    <div className='collection-preview'>
    {hidden?null:<FilterCard content="Cakes"/>}
      <div className="title">{title.toUpperCase()}</div>
        <Grid container spacing={2} className="preview">
      {items.map(({id,...others})=>(
        <Grid item xs={12} md={3} lg={3}>
            <CollectionItem key={id} id={id} title={title} {...others}>{others.name}</CollectionItem>
        </Grid>
        ))}
      </Grid>
    </div>
    </>
  )
}
