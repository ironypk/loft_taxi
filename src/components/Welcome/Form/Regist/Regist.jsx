import React from "react";
import all from "../Form.module.css";
import own from "./Regist.module.css";
import {Link} from "react-router-dom";



let Regist = (props) => {

  
  let onSubmit = e => {
    e.preventDefault();
    props.regist();
  }

  let registForm = React.createRef();



  

  let updateUserName = () => {
    let userName = registForm.current.elements.name.value;
    props.updateUserName(userName);
  };

  let updateUserPass = () => {
    let userPass = registForm.current.elements.pass.value;
    props.updateUserPass(userPass);
  };

  let updateUserEmail = () => {
    let userEmail = registForm.current.elements.email.value;
    props.updateUserEmail(userEmail);
  };

  let updateUserSecondName = () => {
    let userSurname = registForm.current.elements.surname.value;
    props.updateUserSecondName(userSurname);
  };

  return (
    <form ref={registForm} onSubmit={onSubmit} className={all.form}>
      <div className={all.head}>Регистрация</div>
      <div className={all.redirect}>
        <div className={all.redirect_text}>Уже зарегистрирован?</div>
        <Link to={`/welcome`} className={all.redirect_link}>
          Войти
        </Link>
      </div>
      <label className={all.label}>
        <div className={all.label_title}>
          Адрес электронной почты
        </div>
        <div className={all.input_wrapper}>
          <input onChange={updateUserEmail} required value={props.state.email} name='email' className={all.input}></input>
        </div>
      </label>
      <div className={own.user_data}>
        <label className={`${all.label} ${own.name}`}>
          <div className={all.label_title}>
            Имя
          </div>
          <div className={all.input_wrapper}>
            <input onChange={updateUserName} name='name' value={props.state.name} required className={all.input}></input>
          </div>
        </label>
        <label className={all.label}>
          <div className={all.label_title}>
            Фамилия
          </div>
          <div className={all.input_wrapper}>
            <input onChange={updateUserSecondName} value={props.state.surname} name='surname' className={all.input}></input>
          </div>
        </label>
      </div>
      <label className={all.label}>
        <div className={all.label_title}>
          Пароль
        </div>
        <div className={all.input_wrapper}>
          <input onChange={updateUserPass} value={props.state.password} name='pass' className={all.input}></input>
        </div>
      </label>
      <button  className={all.btn}>Зарегистрироваться</button>
    </form>
  );
};

export default Regist;
