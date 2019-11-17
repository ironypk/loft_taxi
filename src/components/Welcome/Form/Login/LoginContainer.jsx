import { login } from "../../../../redux/reducers/login_reducer";
import Login from "./Login";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    isFetching: state.loginPage.isFetching
  };
};

const LoginContainer = connect(mapStateToProps, {
  login
})(Login);

export default LoginContainer;
