import React from "react";
import all from "./Item.module.css";
import { Link } from "react-router-dom";
let Item = props => {

  if(props.link === "logout") {
    return (
      <li className={all.item}>
      <Link
        to={`/welcome`}
        onClick={()=>{
          props.logout();
          localStorage.removeItem('token');
        }}
        className={all.item__link}
      >
        {props.item}
      </Link>
    </li>
    )
  } else {
    return (
      <li className={all.item}>
      <Link
        to={`${props.match.url}/${props.link}`}
        className={all.item__link}
      >
        {props.item}
      </Link>
    </li>
    )
  }
};

export default Item;
