import React from 'react';
import "./filter-navbar.styles.scss";
import Grid from "@material-ui/core/Grid";
import FilterCard from '../filter-card/filter-card.component';

export default function FilterNavbar({hidden,setHidden}) {
    
  return (
      <>
<Grid container spacing={2} className='filter-nav-container'>
  <Grid item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Cake Type</div>
  </Grid>
  <Grid item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Weight</div>
  </Grid>
  <Grid item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Shape</div>
  </Grid>
  <Grid item xs={6} md={2} lg={2} className="filter-btn">
    <div onClick={()=>setHidden(!hidden)}>Select Flavour</div>
  </Grid>
</Grid>
</>
)
}
