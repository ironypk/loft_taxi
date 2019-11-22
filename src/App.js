import React from "react";
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
