import React from "react";
import all from "./Order.module.css";
import Profile from "../Profile/Profile";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, BrowserRouter } from "react-router-dom";

let Order = () => {
  return (
    <BrowserRouter>
      <div className={all.order}>
        <Header />
        <div className="order__content">
          <Route path='/order' component={Maps} />
          <Route path='/map' component={Maps} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Order;
