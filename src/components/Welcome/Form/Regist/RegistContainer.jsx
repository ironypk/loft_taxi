import Regist from "./Regist";
import {
  updateUserNameActionCreator,
  updateUserPassActionCreator,
  updateUserEmailActionCreator,
  updateUserSecondNameActionCreator,
  registActionCreator
} from "../../../../redux/regist_reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    state: {...state.registPage }
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
    updateUserSecondName: surname => {
      dispatch(updateUserSecondNameActionCreator(surname));
    },
    regist : () => {
      dispatch(registActionCreator());
    }
  };
};

const RegistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Regist);




export default RegistContainer;
