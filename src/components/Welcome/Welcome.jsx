import React from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import Login from "./Form/Login/Login";
import Regist from "./Form/Regist/Regist";
import { Route, BrowserRouter} from "react-router-dom";

let Welcome = () => {
  return (
    <BrowserRouter>
      <div className={s.welcome}>
        <div className={s.welcome__logo}>
          <Logo/>
        </div>
        <Route path="/" component={Regist}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Welcome;
