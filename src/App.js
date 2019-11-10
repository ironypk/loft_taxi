import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, Redirect } from "react-router-dom";


let App = props => {
  return (
    <div data-testid = 'app' className="App">
      <Route path="/welcome" component={Welcome} />
      {
        localStorage.token ? (
          <Route path="/order" component={Order} />
        ) : (
          <Redirect to='/welcome'/>
        )
      }
    </div>
  );
};

export default App;
