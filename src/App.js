import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, BrowserRouter } from "react-router-dom";

let App = () => {
  let [page, setPage] = useState("welcome");

  return (
    <div className="App">
      {page === "welcome" && <Welcome setPage={setPage}  />}
      {page === "order" && <Order setLogin={setPage} />}
    </div>
  );
};

export default App;
