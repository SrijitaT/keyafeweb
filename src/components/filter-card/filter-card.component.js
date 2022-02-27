import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./filter-card.styles.scss";

export default function FilterCard({content}) {
  return (
  <Grid container spacing={2} className='filter-card-container'>
  <Grid item xs={12} md={12} lg={12}>
    <div>{content}</div>
  </Grid>
  </Grid>
  )
}
