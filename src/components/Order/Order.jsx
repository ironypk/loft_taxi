import React from "react";
import all from "./Order.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, Switch } from "react-router-dom";

let Order = ({ match }) => {
  return (
    <div className={all.order}>
      <Header />
      <div className="order__content">
        <Switch>
          <Route path={`${match.path}/map`} component={Maps} />
          <Route path={`${match.path}/profile`} component={ProfileContainer} />
          <Route component={Maps} />
        </Switch>
      </div>
    </div>
  );
};

export default Order;
