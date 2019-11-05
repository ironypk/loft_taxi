import React from "react";
import { logoutActionCreator } from "../../../../../redux/login_reducer";
import Item from "./Item";
import StoreContext from "../../../../../StoreContext";

let ItemContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let logout = () => {
          store.dispatch(logoutActionCreator());
        }
        return <Item setPage={props.setPage} setLogin={props.setLogin} link={props.link} item={props.item} logout={logout}/>
      }}
    </StoreContext.Consumer>
  );
};

export default ItemContainer;
