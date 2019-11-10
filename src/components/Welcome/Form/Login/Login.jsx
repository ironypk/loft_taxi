import React from "react";
import all from "../Form.module.css";
import {Link} from "react-router-dom";
import * as Axios from "axios";
import { useHistory} from "react-router-dom";

let Login = props => {

  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    props.login();
    login(props.state.user);
  };
  let loginForm = React.createRef();

  let updateUserName = () => {
    let userEmail = loginForm.current.elements.email.value;
    props.updateUserName(userEmail);
  };

  let updateUserPass = () => {
    let userPass = loginForm.current.elements.pass.value;
    props.updateUserPass(userPass);
  };


  let  login  = async (user) => {
    const {data : {token,error}} = await Axios.post('https://loft-taxi.glitch.me/auth', user);
    if(error !== undefined){
      alert(error)
    } else{
      localStorage.setItem("token", token);
      history.push('/order')
    }
}

  return (
    <form ref={loginForm} onSubmit={onSubmit} className={all.form}>
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
          <input
            onChange={updateUserName}
            value={props.state.email}
            name="email"
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
