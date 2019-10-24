import React from "react";
import all from "./Menu.module.css";
import Item from "./Item/Item";

let Menu = () => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <Item item="Карта" />
        <Item item="Профиль" />
        <Item item="Войти" />
      </ul>
    </nav>
  );
};

export default Menu;
