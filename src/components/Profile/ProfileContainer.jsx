import React from "react";
import { saveCard } from "../../redux/reducers/profile_reducer";
import ProfileForm from "./Profile";
import { connect } from "react-redux";
import Overlay from "../common/Overlay";
import { reduxForm } from "redux-form";
import { toggleForm } from "../../redux/reducers/profile_reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    card: state.profilePage.card,
    toggleF: state.profilePage.toggleForm,
    isFetching: state.profilePage.isFetching
  };
};

let ReduxProfileForm = reduxForm({
  form: "profile"
})(ProfileForm);

let ProfileContainer = props => {
  const onSubmit = payload => {
    props.saveCard(payload);
  };
  return (
    <>
      <ReduxProfileForm {...props} onSubmit={onSubmit} />
      {props.isFetching ? <Overlay /> : null}
    </>
  );
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    saveCard,
    toggleForm
  })
)(ProfileContainer);
