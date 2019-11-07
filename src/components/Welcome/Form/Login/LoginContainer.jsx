import {
  loginActionCreator,
  updateUserNameActionCreator,
  updateUserPassActionCreator
} from "../../../../redux/login_reducer";
import Login from "./Login";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
      state : state.loginPage.user
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateUserName : (userName) => {
      dispatch(updateUserNameActionCreator(userName))
    },
    updateUserPass : (userPass) => {
      dispatch(updateUserPassActionCreator(userPass));
    },
    login : () => {
      dispatch(loginActionCreator());
    }
  }
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;
