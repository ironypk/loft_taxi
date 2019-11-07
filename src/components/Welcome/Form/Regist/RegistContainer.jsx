import Regist from "./Regist";
import {
  updateUserNameActionCreator,
  updateUserPassActionCreator,
  updateUserEmailActionCreator,
  updateUserSecondNameActionCreator
} from "../../../../redux/regist_reducer";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    state: state.registPage.user
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateUserName: userName => {
      dispatch(updateUserNameActionCreator(userName));
    },
    updateUserPass: userPass => {
      dispatch(updateUserPassActionCreator(userPass));
    },
    updateUserEmail: userEmail => {
      dispatch(updateUserEmailActionCreator(userEmail));
    },
    updateUserSecondName: userSecondName => {
      dispatch(updateUserSecondNameActionCreator(userSecondName));
    }
  };
};

const RegistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Regist);




export default RegistContainer;
