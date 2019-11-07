import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, Switch, Redirect } from "react-router-dom";

let App = props => {
  return (
    <div data-testid = 'app' className="App">
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/order" component={Order} />
        <Redirect to='/welcome'/>
      </Switch>
    </div>
  );
};

export default App;
