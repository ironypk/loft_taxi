import React from "react";
import all from "./Menu.module.css";
import ItemContainer from "./Item/ItemContainer";
import {Route} from "react-router-dom";


let Menu = props => {
  return (
    <nav className={all.menu}>
      <ul className={all.menu__list}>
        <Route render={({match}) => (
          <ItemContainer match={match} link="map" item="Карта" />
        )} />
        <Route render={({match}) => (
          <ItemContainer match={match} link="profile" item="Профиль" />
        )} />
        <Route render={({match}) => (
          <ItemContainer match={match} link="logout" item="Выйти" />
        )} />
      </ul>
    </nav>
  );
};

export default Menu;
