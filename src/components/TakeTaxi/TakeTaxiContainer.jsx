import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import TakeTaxiForm from "./TakeTaxi";
import {
  fetchAdressList,
  getRoute,
  onChangeRouteFrom,
  onChangeRouteTo

} from "../../redux/reducers/taxi_reducer";



let mapStatetoProps = state => {
  return {
    adressList: state.taxi.adressList,
    to : state.taxi.route.to,
    from : state.taxi.route.from
  };
};

export default compose(
  withRouter,
  connect(mapStatetoProps, { fetchAdressList, onChangeRouteFrom, onChangeRouteTo, getRoute })
)(TakeTaxiForm);
