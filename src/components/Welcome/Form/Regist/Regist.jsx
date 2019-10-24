import React from "react";
import all from "../Form.module.css";
import own from "./Regist.module.css";

let Regist = () => {
  return (
    <form className={all.form}>
      <div className={all.head}>Регистрация</div>
      <div className={all.redirect}>
        <div className={all.redirect_text}>Уже зарегистрирован?</div>
        <a href="#2" className={all.redirect_link}>
          Войти
        </a>
      </div>
      <label className={all.label}>
        <div className={all.label_title}>
          Адрес электронной почты
        </div>
        <div className={all.input_wrapper}>
          <input className={all.input}></input>
        </div>
      </label>
      <div className={own.user_data}>
        <label className={`${all.label} ${own.name}`}>
          <div className={all.label_title}>
            Имя
          </div>
          <div className={all.input_wrapper}>
            <input className={all.input}></input>
          </div>
        </label>
        <label className={all.label}>
          <div className={all.label_title}>
            Фамилия
          </div>
          <div className={all.input_wrapper}>
            <input className={all.input}></input>
          </div>
        </label>
      </div>
      <label className={all.label}>
        <div className={all.label_title}>
          Пароль
        </div>
        <div className={all.input_wrapper}>
          <input className={all.input}></input>
        </div>
      </label>
      <button className={all.btn}>Зарегистрироваться</button>
    </form>
  );
};

export default Regist;
