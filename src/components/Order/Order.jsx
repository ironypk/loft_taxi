import React from "react";
import all from "./Order.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, Switch, withRouter } from "react-router-dom";
import RequestCard from "../RequestCard/RequestCard";
import { connect } from "react-redux";
import {compose} from 'redux'
import TakeTaxiContainer from "../TakeTaxi/TakeTaxiContainer";
import { checkStorageCard } from "../../redux/reducers/profile_reducer";



let Order = (props) => {
  if(!props.profilePage.isCard && localStorage.card){
    props.checkStorageCard()
  }
  return (
    <div className={all.order}>
      <Header />
      <div className="order__content">
        {!props.profilePage.isCard && props.location.pathname === '/order/map' ? <RequestCard/> : null}
        {props.profilePage.isCard && props.location.pathname ==='/order/map' ? <TakeTaxiContainer/> : null}
        <Switch>
          <Route path={`${props.match.path}/`} exact component={Maps} />
          <Route path={`${props.match.path}/profile`} component={ProfileContainer} />
          <Route component={Maps}/>
        </Switch>
      </div>
    </div>
  );
};


let mapStateToProps = (state) => {
  return {
    profilePage : state.profilePage
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {checkStorageCard})
)(Order);
