import React, { useState } from "react";
import s from "./Welcome.module.css";
import Logo from "../Logo/Logo";
import LoginContainer from "./Form/Login/LoginContainer";
import RegistContainer from "./Form/Regist/RegistContainer";

let Welcome = props => {
  let [form, setForm] = useState("login");
  return (
    <div className={s.welcome}>
      <div className={s.welcome__logo}>
        <Logo />
      </div>
      {form === "login" && (
        <LoginContainer
          setForm={setForm}
          setPage={props.setPage}
        />
      )}
      {form === "regist" && <RegistContainer setForm={setForm} />}
    </div>
  );
};

export default Welcome;
