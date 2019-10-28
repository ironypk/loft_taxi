import React, { useState } from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import Login from "./Form/Login/Login";
import Regist from "./Form/Regist/Regist";
import { Route, BrowserRouter} from "react-router-dom";

let Welcome = (props) => {
  let [form, setForm] = useState("login");
  
  let setRegistPage = () => {
    setForm("regist");
  };
  let setLoginPage = () => {
    setForm("login");
  };
  return (
      <div className={s.welcome}>
        <div className={s.welcome__logo}>
          <Logo/>
        </div>
        {form === "login" && <Login setRegistPage={setRegistPage} setWelcomePage={props.setWelcomePage} />}
        {form === "regist" && <Regist setLoginPage={setLoginPage} />}
      </div>
  );
};

export default Welcome;
