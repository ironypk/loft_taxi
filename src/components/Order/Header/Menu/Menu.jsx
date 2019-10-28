import React from "react";
import all from "./Menu.module.css";
import Item from "./Item/Item";

let Menu = (props) => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <Item setLinkPage={props.setLinkPage} link='map' item="Карта" />
        <Item setLinkPage={props.setLinkPage} link='profile' item="Профиль" />
        <Item setLoginPage={props.setLoginPage} link='login' item="Войти" />
      </ul>
    </nav>
  );
};

export default Menu;
