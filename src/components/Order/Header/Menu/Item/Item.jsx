import React from "react";
import all from "./Item.module.css";
import { NavLink } from "react-router-dom";

let Item = (props) => {
  return (
    <li className={all.item}>
      <a 
        onClick={ () => {
          if (props.link === "login") {
            props.setLoginPage();
          }
          else {
            props.setLinkPage(props.link);
          }
        }}
        className={all.item__link}
      >
        {props.item}
      </a>
    </li>
  );
};

export default Item;
