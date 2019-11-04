import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

let rerenderEntireTree = state => {
  ReactDOM.render(
      <App
        dispatch={store.dispatch.bind(store)}
        state={state}
      />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
