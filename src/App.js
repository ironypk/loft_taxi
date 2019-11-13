import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, Redirect, Switch } from "react-router-dom";

let App = props => {
  return (
    <div data-testid="app" className="App">
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/order" component={Order} />
      </Switch>
      {props.state ? <Redirect to="/order" /> : <Redirect to="/welcome" />}
    </div>
  );
};

export default App;
