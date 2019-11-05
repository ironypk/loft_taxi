import React from "react";
import all from "./Item.module.css";

let Item = (props) => {
  return (
    <li className={all.item}>
      <a 
        onClick={ () => {
          if (props.link === "logout") {
            props.logout();
            props.setLogin('welcome');
          }
          else {
            props.setPage(props.link);
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
