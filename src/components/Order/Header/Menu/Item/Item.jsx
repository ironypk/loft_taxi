import React from "react";
import all from "./Item.module.css";
import {NavLink} from "react-router-dom";

let Item = props => {
  return (
      <li className={all.item}>
        <NavLink to={`${props.href}`} className={all.item__link}>
          {props.item}
        </NavLink>
      </li>
  );
};

export default Item;
