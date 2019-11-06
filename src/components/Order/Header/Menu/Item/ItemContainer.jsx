import React from "react";
import { logoutActionCreator } from "../../../../../redux/login_reducer";
import Item from "./Item";
import StoreContext from "../../../../../StoreContext";
import { Route } from "react-router-dom";

let ItemContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let logout = () => {
          store.dispatch(logoutActionCreator());
        }
        return <Route render={({match})=>(
          <Item match={match} link={props.link} item={props.item} logout={logout}/>
        )}/>
      }}
    </StoreContext.Consumer>
  );
};

export default ItemContainer;
