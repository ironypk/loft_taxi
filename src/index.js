import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyApp from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MyApp />, document.getElementById("root"));

serviceWorker.unregister();
