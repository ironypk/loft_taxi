import React from "react";
import all from "../Form.module.css";
import {NavLink} from "react-router-dom";

let Login = (props) => {
  return (
    <form onSubmit={props.setWelcomePage} className={all.form}>
    <div className={all.head}>Войти</div>
    <div className={all.redirect}>
      <div className={all.redirect_text}>Новый пользователь?</div>
      <a href="#" onClick={props.setRegistPage} className={all.redirect_link}>
        Зарегистрируйтесь
      </a>
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
    <button className={all.btn}>Войти</button>
  </form>
  );
};

export default Login;
