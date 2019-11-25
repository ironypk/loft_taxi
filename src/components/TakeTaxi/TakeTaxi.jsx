import React, { useState, useEffect } from "react";
import style from "./TakeTaxi.module.css";
import AdressList from "./AdressList";

let TakeTaxiForm = props => {
  useEffect(() => {
    props.fetchAdressList();
  }, []);

  let [currentField, setCurrentField] = useState();

  let formRef = React.createRef();

  let onSubmit = e => {
    e.preventDefault(props.getRoute());
  };

  let onChangeRouteFrom = () => {
    let routeValue = formRef.current.elements.from.value;
    props.onChangeRouteFrom(routeValue);
  };

  let onChangeRouteTo = () => {
    let routeValue = formRef.current.elements.to.value;
    props.onChangeRouteTo(routeValue);
  };

  let isMatching = (full, chunk = "") => {
    chunk = chunk.toLowerCase();
    full = full.toLowerCase();
    if (full.indexOf(chunk) !== -1) {
      return true;
    }
    return false;
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={`take_taxi redirect_form`}
    >
      <div className={style.take_taxi__label_wrapper}>
        <label className="label">
          <div className="label_title">Откуда</div>
          <div
            className={`input_wrapper ${style.take_taxi__input_wrapper} ${style.take_taxi__input_wrapper_from}`}
          >
            <input
              onChange={onChangeRouteFrom}
              value={props.from}
              onFocus={() => {
                setCurrentField("from");
              }}
              className="input"
              name="from"
              required
            />
            <div
              onClick={() => {
                props.clearInputFrom();
              }}
              className={style.clear_btn}
            ></div>
          </div>
        </label>
        {currentField === "from" && (
          <AdressList
            className={`${style.path_list_from}`}
            currentField={currentField}
            setCurrentField={setCurrentField}
            isMatching={isMatching}
            {...props}
          />
        )}
      </div>
      <div className={style.take_taxi__label_wrapper}>
        <label className="label">
          <div className="label_title">Куда</div>
          <div className={`input_wrapper ${style.take_taxi__input_wrapper}`}>
            <input
              onChange={onChangeRouteTo}
              value={props.to}
              onFocus={() => {
                setCurrentField("to");
              }}
              className="input"
              name="to"
              required
            />
            <div
              onClick={() => {
                props.clearInputTo();
              }}
              className={style.clear_btn}
            ></div>
          </div>
        </label>
        {currentField === "to" && (
          <AdressList
            isMatching={isMatching}
            currentField={currentField}
            setCurrentField={setCurrentField}
            {...props}
          />
        )}
      </div>

      <button
        disabled={props.from.length === 0 || props.to.length === 0}
        className="btn"
      >
        Закзать
      </button>
    </form>
  );
};

export default TakeTaxiForm;
