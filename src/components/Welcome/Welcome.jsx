import React from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import Login from "./Form/Login/Login";
import Regist from "./Form/Regist/Regist";

let Welcome = () => {
  return (
    <div className={s.welcome}>
      <div className={s.welcome__logo}>
        <Logo/>
      </div>
      <Regist/>
    </div>
  );
};

export default Welcome;
