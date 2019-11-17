import React from "react";
import style from "./Profile.module.css";
import Preloader from "../common/Preloader";
import Overlay from "../common/Overlay";
import { reduxForm, Field } from "redux-form";

let ProfileForm = props => {
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

let ReduxProfileForm = reduxForm({
  form: "profile"
})(ProfileForm);

let Profile = props => {
  const onSubmit = payload => {
    props.saveCard(payload);
  };
  return (
    <>
      <ReduxProfileForm {...props} onSubmit={onSubmit} />
      {props.isFetching ? <Overlay /> : null}
    </>
  );
};

export default Profile;
