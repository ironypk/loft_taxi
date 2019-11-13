import React from "react";
import style from "./Profile.module.css";

let Profile = props => {
  let onSubmit = e => {
    e.preventDefault();
    props.saveCard();
  };

  let profileForm = React.createRef();

  let updateCardNumber = () => {
    let cardNumber = profileForm.current.elements.number.value;
    props.updateCardNumber(cardNumber);
  };

  let updateExpiryDate = () => {
    let expiryDate = profileForm.current.elements.date.value;
    props.updateExpiryDate(expiryDate);
  };

  let updateCardName = () => {
    let cardName = profileForm.current.elements.name.value;
    props.updateCardName(cardName);
  };

  let updateCvc = () => {
    let cvc = profileForm.current.elements.cvc.value;
    props.updateCvc(cvc);
  };

  return (
    <div className={style.profile}>
      <form onSubmit={onSubmit} ref={profileForm} className={style.payment}>
        <div className={style.payment__header}>
          <h3 className={style.payment__head}>Профиль</h3>
          <div>Способ оплаты</div>
        </div>
        <div className={style.payment__card_wrapper}>
          <div className={`${style.card} ${style.card_front}`}>
            <label className={style.card__row}>
              <div className={style.card__row_title}>Номер карты</div>
              <div className={style.card__input_wrapper}>
                <input
                  className={style.card__input}
                  onChange={updateCardNumber}
                  value={props.state.cardNumber}
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
                <input
                  className={style.card__input}
                  value={props.state.expiryDate}
                  onChange={updateExpiryDate}
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
                <input
                  className={style.card__input}
                  value={props.state.cardName}
                  onChange={updateCardName}
                  name="name"
                  placeholder="Введите имя владельца"
                  required
                />
              </div>
            </label>
            <label className={style.card__row}>
              <div className={style.card__row_title}>CVC</div>
              <div className={style.card__input_wrapper}>
                <input
                  className={style.card__input}
                  value={props.state.cvc}
                  onChange={updateCvc}
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
    </div>
  );
};

export default Profile;
