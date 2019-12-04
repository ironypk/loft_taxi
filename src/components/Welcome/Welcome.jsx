import React from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import LoginContainer from "./Form/Login/LoginContainer";
import RegistContainer from "./Form/Regist/RegistContainer";
import { Route, Switch } from "react-router-dom";

let Welcome = ({ match }) => {
  return (
    <div data-testid = 'welcome' className={s.welcome}>
      <div className={s.welcome__logo}>
        <Logo />
      </div>
      <Switch>
        <Route path={`${match.path}/`} component={LoginContainer} exact/>
        <Route path={`${match.path}/regist`} component={RegistContainer} />
      </Switch>
    </div>
  );
};

export default Welcome;
