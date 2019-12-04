<<<<<<< HEAD
import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Order from './components/order';

let App = () => {
  return (
    <div className="App">
      <Welcome/>
=======
import React from "react";
import './style/redirectForm.css';
import "./App.css";
import './style/commonForm.css';
import Welcome from "./components/Welcome/Welcome";
import Order from "./components/Order/Order";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

let App = props => {
  return (
    <div data-testid="app" className="App">
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/order" component={Order} />
      </Switch>
      {props.isLoggedIn ? <Redirect to="/order/map" /> : <Redirect to="/welcome" />}
      {localStorage.isLoggedIn ? <Redirect to="/order/map" /> : <Redirect to="/welcome" /> }
>>>>>>> 3f5ff150a38c30c68165115579b1210958696e36
    </div>
  );
};

let mapStateToProps = state => {
  return {
    isLoggedIn: state.loginPage.isLoggedIn
  };
};

let AppContainer = connect(mapStateToProps, null)(App);

let MyApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MyApp;
