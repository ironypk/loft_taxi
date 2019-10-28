import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, BrowserRouter } from "react-router-dom";

let App = () => {
  let [page, setPage] = useState("welcome");

  let setWelcomePage = () => {
    setPage("order");
  };

  let setLoginPage = () => {
    setPage('welcome')
  }

  return (
    <div className="App">
      {page === "order" && <Order setLoginPage={setLoginPage} />}
      {page === "welcome" && <Welcome setWelcomePage={setWelcomePage} />}
    </div>
  );
};

export default App;
