import {
  login,
  updateUserName,
  updateUserPass
} from "../../../../redux/reducers/login_reducer";
import Login from "./Login";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    user: state.loginPage.user,
    isFetching: state.loginPage.isFetching
  };
};

const LoginContainer = connect(mapStateToProps, {
  updateUserName,
  updateUserPass,
  login
})(Login);

export default LoginContainer;
