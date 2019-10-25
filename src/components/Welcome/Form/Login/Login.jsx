import React from "react";
import all from "../Form.module.css";
import {NavLink} from "react-router-dom";

let Login = () => {
  return (
    <form className={all.form}>
    <div className={all.head}>Войти</div>
    <div className={all.redirect}>
      <div className={all.redirect_text}>Новый пользователь?</div>
      <NavLink to="/regist" className={all.redirect_link}>
        Зарегистрируйтесь
      </NavLink>
    </div>
    <label className={all.label}>
      <div className={all.label_title}>
        Имя пользователя*
      </div>
      <div className={all.input_wrapper}>
        <input className={all.input}></input>
      </div>
    </label>
    <label className={all.label}>
      <div className={all.label_title}>Пароль*</div>
      <div className={all.input_wrapper}>
        <input className={all.input}></input>
      </div>
    </label>
    <a href='/order' className={all.btn}>Войти</a>
  </form>
  );
};

export default Login;
