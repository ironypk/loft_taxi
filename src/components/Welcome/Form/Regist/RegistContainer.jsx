import Regist from "./Regist";
import {
  updateUserName,
  updateUserPass,
  updateUserEmail,
  updateUserSecondName,
  regist
} from "../../../../redux/reducers/regist_reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    user: state.registPage.user,
    isFetching: state.registPage.isFetching
  };
};

const RegistContainer = connect(mapStateToProps, {
  updateUserName,
  updateUserPass,
  updateUserEmail,
  updateUserSecondName,
  regist
})(Regist);

export default RegistContainer;
