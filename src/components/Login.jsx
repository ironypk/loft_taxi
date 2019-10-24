import React from "react";
import "../style/form.css";

let Login = () => {
  return (
    <form className="welcome_form login">
    <div className="welcome_form__head">Войти</div>
    <div className="welcome_form__redirect">
      <div className="welcome_form__redirect_text">Новый пользователь?</div>
      <a href="#2" className="welcome_form__redirect_link">
        Зарегистрируйтесь
      </a>
    </div>
    <label className="welcome_form__label welcome_form__user">
      <div className="welcome_form__label_title welcome_form__user_title">
        Имя пользователя*
      </div>
      <div className="welcome_form__input_wrapper">
        <input className="welcome_form__input welcome_form__user_input"></input>
      </div>
    </label>
    <label className="welcome_form__label welcome_form__pass">
      <div className="welcome_form__label_title welcome_form__pass_title">Пароль*</div>
      <div className="welcome_form__input_wrapper">
        <input className="welcome_form__input welcome_form__pass_input"></input>
      </div>
    </label>
    <button className="welcome_form__btn">Войти</button>
  </form>
  );
};

export default Login;
