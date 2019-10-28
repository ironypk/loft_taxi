import React from "react";
import all from "./Menu.module.css";
import Item from "./Item/Item";

let Menu = ({setPage, setLogin}) => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <Item setPage={setPage} link='map' item="Карта" />
        <Item setPage={setPage} link='profile' item="Профиль" />
        <Item  setLogin={setLogin} link='login' item="Войти" />
      </ul>
    </nav>
  );
};

export default Menu;
