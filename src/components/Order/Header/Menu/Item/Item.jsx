import React from "react";
import all from "./Item.module.css";
import {Link} from "react-router-dom";
let Item = props => {
  return (
    <li className={all.item}>
      <Link to={`${props.match.url}/${props.link}`}className={all.item__link} onClick={() =>{
        if(props.link === 'logout'){
          window.location = '/welcome';
          props.logout()
        }
      }}>{props.item}</Link>
    </li>
  );
};

export default Item;
