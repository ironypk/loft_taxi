import React from 'react'
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import TakeTaxiForm from "./TakeTaxi";
import { reduxForm } from "redux-form";
import {fetchAdressList, getRoute,  filterAdressList} from '../../redux/reducers/taxi_reducer'


let mapStatetoProps = state => {
  return {
    path: state.taxi.path
  };
};



const ReduxTakeTaxiForm = reduxForm({
  form: "taxi"
})(TakeTaxiForm);


const TakeTaxi = props => {
  const onSubmit = payload => {
    props.getRoute(payload)
  };
  return (
      <ReduxTakeTaxiForm {...props} onSubmit={onSubmit} />
  );
};


export default compose(
  withRouter,
  connect(mapStatetoProps, {fetchAdressList,filterAdressList, getRoute})
)(TakeTaxi);
