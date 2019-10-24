import React from "react";
import "../style/form.css";

let Regist = () => {
  return (
    <form className="welcome_form regist">
      <div className="welcome_form__head">Регистрация</div>
      <div className="welcome_form__redirect">
        <div className="welcome_form__redirect_text">Уже зарегистрирован?</div>
        <a href="#2" className="welcome_form__redirect_link">
          Войти
        </a>
      </div>
      <label className="welcome_form__label welcome_form__email">
        <div className="welcome_form__label_title welcome_form__email_title">
          Адрес электронной почты
        </div>
        <div className="welcome_form__input_wrapper">
          <input className="welcome_form__input welcome_form__user_input"></input>
        </div>
      </label>
      <div className="welcome_form__user_data">
        <label className="welcome_form__label welcome_form__name">
          <div className="welcome_form__label_title welcome_form__name_title">
            Имя
          </div>
          <div className="welcome_form__input_wrapper">
            <input className="welcome_form__input welcome_form__name_input"></input>
          </div>
        </label>
        <label className="welcome_form__label welcome_form__surname">
          <div className="welcome_form__label_title welcome_form__surname_title">
            Фамилия
          </div>
          <div className="welcome_form__input_wrapper">
            <input className="welcome_form__input welcome_form__surname_input"></input>
          </div>
        </label>
      </div>
      <label className="welcome_form__label welcome_form__pass">
        <div className="welcome_form__label_title welcome_form__pass_title">
          Пароль
        </div>
        <div className="welcome_form__input_wrapper">
          <input className="welcome_form__input welcome_form__pass_input"></input>
        </div>
      </label>
      <button className="welcome_form__btn">Зарегистрироваться</button>
    </form>
  );
};

export default Regist;
