import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import TakeTaxiForm from "./TakeTaxi";
import {
  fetchAdressList,
  getRoute,
  onChangeRouteFrom,
  onChangeRouteTo,
  clearInputFrom,
  clearInputTo

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
  connect(mapStatetoProps, { fetchAdressList, onChangeRouteFrom, onChangeRouteTo, getRoute, clearInputFrom, clearInputTo })
)(TakeTaxiForm);
