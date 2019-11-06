import React from "react";
import all from "../Form.module.css";
import {NavLink} from "react-router-dom";

let Login = props => {
  const onSubmit = e => {
    e.preventDefault();
    props.login();
    window.location = '/order';
  };
  let loginForm = React.createRef();

  let updateUserName = () => {
    let userName = loginForm.current.elements.name.value;
    props.updateUserName(userName);
  };

  let updateUserPass = () => {
    let userPass = loginForm.current.elements.pass.value;
    props.updateUserPass(userPass);
  };

  return (
    <form ref={loginForm} onSubmit={onSubmit} className={all.form}>
      <div className={all.head}>Войти</div>
      <div className={all.redirect}>
        <div className={all.redirect_text}>Новый пользователь?</div>
        <NavLink to='/regist' className={all.redirect_link}>
          Зарегистрируйтесь
        </NavLink>
      </div>
      <label className={all.label}>
        <div className={all.label_title}>Имя пользователя*</div>
        <div className={all.input_wrapper}>
          <input
            onChange={updateUserName}
            value={props.state.name}
            name="name"
            className={all.input}
            required
          ></input>
        </div>
      </label>
      <label className={all.label}>
        <div className={all.label_title}>Пароль*</div>
        <div className={all.input_wrapper}>
          <input
            onChange={updateUserPass}
            name="pass"
            className={all.input}
            value={props.state.password}
            required
          ></input>
        </div>
      </label>
      <button className={all.btn}>Войти</button>
    </form>
  );
};

export default Login;
