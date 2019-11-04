import React from "react";
import all from "./Menu.module.css";
import Item from "./Item/Item";
import { LogoutContext } from "../../../../App";

let Menu = props => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <Item setPage={props.setPage} link="map" item="Карта" />
        <Item setPage={props.setPage} link="profile" item="Профиль" />
        <LogoutContext.Consumer>
          {logout => {
            return (
              <Item
                dispatch={logout}
                setLogin={props.setLogin}
                link="logout"
                item="Выйти"
              />
            );
          }}
        </LogoutContext.Consumer>
      </ul>
    </nav>
  );
};

export default Menu;
