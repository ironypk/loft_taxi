import React from 'react';
import style from "./Profile.module.css";

let Profile = () => {

let onSubmit = (e) => {
  e.preventDefault();
}
    return (
      <div onSubmit={onSubmit}className={style.profile}>
          <form className={style.payment}>
            <div className={style.payment__header}>
              <h3 className={style.payment__head}>Профиль</h3>
              <div>Способ оплаты</div>
            </div>
            <div className={style.payment__card_wrapper}>
              <div className={`${style.card} ${style.card_front}`}>
                <label className={style.card__row}>
                  <div className={style.card__row_title}>Номер карты</div>
                  <div className={style.card__input_wrapper}>
                    <input className={style.card__input} name='number' placeholder='Введите номер карты'/>
                  </div>
                </label>
                <label className={style.card__row}>
                  <div className={style.card__row_title}>Срок действия</div>
                  <div className={style.card__input_wrapper}>
                    <input className={style.card__input} name='date' placeholder='00/00'/>
                  </div>
                </label>
              </div>
              <div className={`${style.card} ${style.card_back}`}>
                <label className={style.card__row}>
                  <div className={style.card__row_title}>Имя владельца</div>
                  <div className={style.card__input_wrapper}>
                    <input className={style.card__input} name='name' placeholder='Введите имя владельца'/>
                  </div>
                </label>
                <label className={style.card__row}>
                  <div className={style.card__row_title}>CVC</div>
                  <div className={style.card__input_wrapper}>
                    <input className={style.card__input} name='cvc' placeholder='***'/>
                  </div>
                </label>
              </div>
            </div>
            <button className={style.btn}>Сохранить</button>
          </form>
      </div>
    );
  };

export default Profile;