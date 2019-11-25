import React from "react";
import all from "../Form.module.css";
import own from "./Regist.module.css";
import { Link } from "react-router-dom";
import Preloader from "../../../common/Preloader";
import Overlay from "../../../common/Overlay";
import { reduxForm, Field } from "redux-form";

let RegistForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={`${all.welcome_form} form`}>
      {props.isFetching ? <Preloader /> : null}
      <div className={all.head}>Регистрация</div>
      <div className={all.redirect}>
        <div className={all.redirect_text}>Уже зарегистрирован?</div>
        <Link to={`/welcome`} className={all.redirect_link}>
          Войти
        </Link>
      </div>
      <label className='label'>
        <div className='label_title'>Адрес электронной почты</div>
        <div className='input_wrapper'>
          <Field
            component="input"
            required
            name="email"
            className='input'
          />
        </div>
      </label>
      <div className={own.user_data}>
        <label className={`${own.name} label`}>
          <div className='label_title'>Имя</div>
          <div className='input_wrapper'>
            <Field
              component="input"
              name="name"
              required
              className='input'
            />
          </div>
        </label>
        <label className='label'>
          <div className='label_title'>Фамилия</div>
          <div className='input_wrapper'>
            <Field component="input" name="surname" className='input' />
          </div>
        </label>
      </div>
      <label className='label'>
        <div className='label_title'>Пароль</div>
        <div className='input_wrapper'>
          <Field component="input" name="password" className='input'  />
        </div>
      </label>
      <button className={`${all.welcome_btn} btn`}>Зарегистрироваться</button>
    </form>
  );
};

let ReduxRegistForm = reduxForm({
  form: "regist"
})(RegistForm);

let Regist = props => {
  const onSubmit = payload => {
    props.regist(payload);
  };
  return (
    <>
      <ReduxRegistForm {...props} onSubmit={onSubmit} />
      {props.isFetching ? <Overlay /> : null}
    </>
  );
};

export default Regist;
