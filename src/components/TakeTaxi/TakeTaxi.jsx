import React, { useState } from "react";
import style from "./TakeTaxi.module.css";
import { Field, change } from "redux-form";
import styleButton from "../Profile/Profile.module.css";


let PathList = props => {
  return (
    <ul className={style.path_list}>
      {props.path.map(path => (
        <li
          onClick={() => {
            props.takePlaceFrom
              ? props.takePlaceFrom(path)
              : props.takePlaceTo(path);
          }}
          key={path.id}
          className={style.path_item}
        >
          {path.place}
        </li>
      ))}
    </ul>
  );
};

let TakeTaxiForm = props => {
  if(props.path.length === 0){
    props.fetchAdressList()
  }
  let [to, setTo] = useState(false);
  let [from, setFrom] = useState(false);
  let takePlaceFrom = path => {
    props.dispatch(change("taxi", "from", path.place));
    setFrom(false);
  };
  let takePlaceTo = path => {
    props.dispatch(change("taxi", "to", path.place));
    setTo(false);
  };

  return (
    <form onSubmit={props.handleSubmit} className={style.take_taxi}>
      <div className={style.take_taxi__label_wrapper}>
        <label className={style.take_taxi__label}>
          <div className={style.take_taxi__text}>Откуда</div>
          <div className={style.take_taxi__input_wrapper}>
            <Field
              onFocus={() => {
                setFrom(true);
              }}
              className={style.take_taxi__input}
              component="input"
              name="from"
              required
            />
          </div>
        </label>
        {from === true && <PathList takePlaceFrom={takePlaceFrom} {...props} />}
      </div>
      <div className={style.take_taxi__label_wrapper}>
        <label className={style.take_taxi__label}>
          <div className={style.take_taxi__text}>Куда</div>
          <div className={style.take_taxi__input_wrapper}>
            <Field
              onFocus={() => {
                setTo(true);
              }}
              className={style.take_taxi__input}
              component="input"
              name="to"
              required
            />
          </div>
        </label>
        {to === true && <PathList takePlaceTo={takePlaceTo} {...props} />}
      </div>

      <button className={styleButton.btn}>Закзать</button>
    </form>
  );
};



export default TakeTaxiForm;
