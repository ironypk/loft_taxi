import React from "react";
import style from "./TakeTaxi.module.css";

let AdressList = props => {
  const updateObjectInArray = (inputValue, otherInputValue, onChangeRoute) => {
    return props.adressList.map(item => {
      if (props.isMatching(item, inputValue) && item !== otherInputValue) {
        return (
          <li
            onClick={() => {
              onChangeRoute(item);
              props.setCurrentField(null);
            }}
            key={item.toString()}
            className={style.path_item}
          >
            {item}
          </li>
        );
      }
      return null;
    });
  };
  return (
    <ul className={style.path_list}>
      {props.currentField === "from" &&
        updateObjectInArray(props.from, props.to, props.onChangeRouteFrom)}
      {props.currentField === "to" &&
        updateObjectInArray(props.to, props.from, props.onChangeRouteTo)}
    </ul>
  );
};

export default AdressList;
