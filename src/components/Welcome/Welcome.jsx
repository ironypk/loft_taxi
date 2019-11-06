import React from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import LoginContainer from "./Form/Login/LoginContainer";
import RegistContainer from "./Form/Regist/RegistContainer";
import { Route, Switch, Redirect } from "react-router-dom";

let Welcome = ({ match }) => {
  return (
    <div className={s.welcome}>
      <div className={s.welcome__logo}>
        <Logo />
      </div>
      <Switch>
        <Route path={`${match.path}`} component={LoginContainer} />
        <Route path={`${match.path}login`} component={LoginContainer} />
        <Route path="/regist" component={RegistContainer} />
      </Switch>
    </div>
  );
};

export default Welcome;
