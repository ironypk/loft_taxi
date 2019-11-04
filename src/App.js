import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";

export let LogoutContext = React.createContext();

let App = props => {
  let [page, setPage] = useState("welcome");
  return (
    <div className="App">
      {page === "welcome" && (
        <Welcome
          dispatch={props.dispatch}
          user={props.state.user}
          setPage={setPage}
        />
      )}
      {page === "order" && (
        <LogoutContext.Provider value={props.dispatch}>
          <Order  setLogin={setPage} />
        </LogoutContext.Provider>
      )}
    </div>
  );
};

export default App;
