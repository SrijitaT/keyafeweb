import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({title,img_url,size,linkUrl,cat_id,history,match})=>{
  return (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{backgroundImage:`url(${img_url})`}} />
        <div className="content" onClick={()=>history.push({pathname:`${match.url}${linkUrl}`,cat_id})}>
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
  </div>)}
export default withRouter(MenuItem);