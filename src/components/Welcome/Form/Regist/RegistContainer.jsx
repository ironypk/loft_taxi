import Regist from "./Regist";
import { regist } from "../../../../redux/reducers/regist_reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    user: state.registPage.user,
    isFetching: state.registPage.isFetching
  };
};

const RegistContainer = connect(mapStateToProps, {
  regist
})(Regist);

export default RegistContainer;
