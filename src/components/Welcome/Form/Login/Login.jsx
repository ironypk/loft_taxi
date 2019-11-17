import React from "react";
import all from "../Form.module.css";
import { Link } from "react-router-dom";
import Preloader from "../../../common/Preloader";
import Overlay from "../../../common/Overlay";
import { reduxForm, Field } from "redux-form";

let LoginForm = props => {
  return (
      <form onSubmit={props.handleSubmit} className={all.form}>
        {props.isFetching ? <Preloader /> : null}
        <div className={all.head}>Войти</div>
        <div className={all.redirect}>
          <div className={all.redirect_text}>Новый пользователь?</div>
          <Link to={`${props.match.url}/regist`} className={all.redirect_link}>
            Зарегистрируйтесь
          </Link>
        </div>
        <label className={all.label}>
          <div className={all.label_title}>Email пользователя*</div>
          <div className={all.input_wrapper}>
            <Field
              component="input"
              name="email"
              className={all.input}
              required
            />
          </div>
        </label>
        <label className={all.label}>
          <div className={all.label_title}>Пароль*</div>
          <div className={all.input_wrapper}>
            <Field
              component="input"
              name="password"
              className={all.input}
              required
            ></Field>
          </div>
        </label>
        <button className={all.btn}>Войти</button>
      </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = (payload) => {
    props.login(payload);
  };
  return (
    <>
      <ReduxLoginForm {...props} onSubmit={onSubmit} />
      {props.isFetching ? <Overlay /> : null}
    </>
  );
};

export default Login;
