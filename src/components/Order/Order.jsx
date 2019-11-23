import React from "react";
import all from "./Order.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import MapContainer from "../Map/MapContainer";
import Header from "./Header/Header";
import { Route, Switch, withRouter } from "react-router-dom";


let Order = (props) => {
  return (
    <div className={all.order}>
      <Header />
      <div className="order__content">
        <Switch>
          <Route path={`${props.match.path}/`} exact component={MapContainer} />
          <Route path={`${props.match.path}/profile`} component={ProfileContainer} />
          <Route component={MapContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Order);