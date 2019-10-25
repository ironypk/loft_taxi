import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, BrowserRouter } from "react-router-dom";

let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/order" component={Order} />
        <Route path="/welcome" component={Welcome} />
      </div>
    </BrowserRouter>
  );
};

export default App;
