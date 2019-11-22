import React, { useState, useEffect } from "react";
import style from "./TakeTaxi.module.css";

let PathList = props => {
  return (
    <ul className={style.path_list}>
      {props.adressList.map(item => {
        switch (props.currentField) {
          case "from": {
            if (props.isMatching(item, props.from) && item !== props.to) {
              return (
                <li
                  onClick={() => {
                    props.onChangeRouteFrom(item);
                    props.setCurrentField(null);
                  }}
                  key={item.toString()}
                  className={style.path_item}
                >
                  {item}
                </li>
              );
            } else {
              return null;
            }
          }

          case "to": {
            if (props.isMatching(item, props.to) && item !== props.from) {
              return (
                <li
                  onClick={() => {
                    props.onChangeRouteTo(item);
                    props.setCurrentField(null);
                  }}
                  key={item.toString()}
                  className={style.path_item}
                >
                  {item}
                </li>
              );
            } else {
              return null;
            }
          }
          default:
            return null;
        }
      })}
    </ul>
  );
};

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
      className={`${style.take_taxi} form`}
    >
      <div className={style.take_taxi__label_wrapper}>
        <label className="label">
          <div className="label_title">Откуда</div>
          <div className="input_wrapper">
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
          </div>
        </label>
        {currentField === "from" && (
          <PathList
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
          <div className="input_wrapper">
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
          </div>
        </label>
        {currentField === "to" && (
          <PathList
            isMatching={isMatching}
            currentField={currentField}
            setCurrentField={setCurrentField}
            {...props}
          />
        )}
      </div>

      <button className="btn">Закзать</button>
    </form>
  );
};

export default TakeTaxiForm;
