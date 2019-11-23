import React from "react";
import style from "./Profile.module.css";
import Preloader from "../common/Preloader";
import { Field } from "redux-form";


let CardSuccessForm = props => {
  return (
    <div className={`redirect_form ${style.redirect_form__card__success}`}>
      <div className='redirect_form__title'>Платежные данные обновлены</div>

        <button
          onClick={() => {
            props.toggleForm(false);
            props.history.push('/order/map')
          }}
          className='btn'
        >
          перейти на карту
        </button>

    </div>
  );
};

let ProfileForm = props => {
  // if(props.card){
  //   props.initialize(props.card)
  // }
  return (
    <form onSubmit={props.handleSubmit} className={style.payment}>
      {props.isFetching ? <Preloader /> : null}
      <div className={style.payment__header}>
        <h3 className={style.payment__head}>Профиль</h3>
        <div>Способ оплаты</div>
      </div>
      <div className={style.payment__card_wrapper}>
        <div className={`${style.card} ${style.card_front}`}>
          <label className={style.card__row}>
            <div className={style.card__row_title}>Номер карты</div>
            <div className={style.card__input_wrapper}>
              <Field
                component="input"
                className={style.card__input}
                type="number"
                name="number"
                placeholder="Введите номер карты"
                required
              />
            </div>
          </label>
          <label className={style.card__row}>
            <div className={style.card__row_title}>Срок действия</div>
            <div className={style.card__input_wrapper}>
              <Field
                component="input"
                className={style.card__input}
                type="number"
                name="date"
                placeholder="00/00"
                required
              />
            </div>
          </label>
        </div>
        <div className={`${style.card} ${style.card_back}`}>
          <label className={style.card__row}>
            <div className={style.card__row_title}>Имя владельца</div>
            <div className={style.card__input_wrapper}>
              <Field
                component="input"
                className={style.card__input}
                name="name"
                placeholder="Введите имя владельца"
                required
              />
            </div>
          </label>
          <label className={style.card__row}>
            <div className={style.card__row_title}>CVC</div>
            <div className={style.card__input_wrapper}>
              <Field
                component="input"
                className={style.card__input}
                type="number"
                name="cvc"
                placeholder="***"
                required
              />
            </div>
          </label>
        </div>
      </div>
      <button className={style.btn}>Сохранить</button>
    </form>
  );
};
let Profile = props => {
  return (
    <>
      {props.toggleF === false && <ProfileForm {...props} />}
      {props.toggleF === true && <CardSuccessForm {...props} />}
    </>
  );
};

export default Profile;
