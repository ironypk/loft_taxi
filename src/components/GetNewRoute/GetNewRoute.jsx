import React from "react";
import { connect } from "react-redux";
import { getNewRoute } from "../../redux/reducers/taxi_reducer";

let GetNewRoute = props => {
  const newRoute = map => {
    if (map.getLayer("route")) map.removeLayer("route");

    if (map.getSource("route")) map.removeSource("route");
  };
  return (
    <div className="redirect_form">
      <h2 className="redirect_form__title">Заказ размещен</h2>
      <p className="redirect_form__text">
        Ваше такси уже едет к вамю Прибудет приблизительно чере 10 минут
      </p>
      <button
        onClick={() => {
          newRoute(props.map);
          props.getNewRoute();
        }}
        className="btn"
      >
        Сделать новый заказ
      </button>
    </div>
  );
};

let mapStateToprops = state => {
  return {
    map: state.taxi.map
  };
};

export default connect(mapStateToprops, { getNewRoute })(GetNewRoute);
