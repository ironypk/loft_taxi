import React, { useState } from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import Login from "./Form/Login/Login";
import Regist from "./Form/Regist/Regist";
import { Route, BrowserRouter } from "react-router-dom";

let Welcome = ({ setPage }) => {
  let [form, setForm] = useState("login");
  return (
    <div className={s.welcome}>
      <div className={s.welcome__logo}>
        <Logo />
      </div>
      {form === "login" && <Login setForm={setForm} setPage={setPage} />}
      {form === "regist" && <Regist setForm={setForm} />}
    </div>
  );
};

export default Welcome;
