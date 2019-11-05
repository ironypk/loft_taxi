import React from "react";
import all from "./Menu.module.css";
import ItemContainer from "./Item/ItemContainer";

let Menu = props => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <ItemContainer setPage={props.setPage} link="map" item="Карта" />
        <ItemContainer setPage={props.setPage} link="profile" item="Профиль" />
        <ItemContainer setLogin={props.setLogin} link="logout" item="Выйти" />
      </ul>
    </nav>
  );
};

export default Menu;
