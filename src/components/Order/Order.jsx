import React, { useState } from "react";
import all from "./Order.module.css";
import Profile from "../Profile/Profile";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";

let Order = ({ match }) => {
  return (
    <div className={all.order}>
      <Header />
      <div className="order__content">
        <Switch>
          <Route path={`${match.path}/map`} component={Maps} />
          <Route path={`${match.path}/profile`} component={Profile} />
          <Route component={Maps} />
        </Switch>
      </div>
    </div>
  );
};

export default Order;
