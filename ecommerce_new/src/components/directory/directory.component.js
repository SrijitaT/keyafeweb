import React,{useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import HOME_DATA from './hompage.data';
import "./directory.styles.scss";

export default function Directory() {
  let initialState = HOME_DATA ;
  const [sections, setSections] = useState(initialState);
  return (
    <div className="directory-menu">
      {
        sections.map(({id,...otherSectionProps})=>{
            return <MenuItem key={id} {...otherSectionProps}/>
        })
      }
    </div>
  )
}
