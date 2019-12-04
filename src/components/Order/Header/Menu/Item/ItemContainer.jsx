import { logout } from "../../../../../redux/reducers/login_reducer";
import Item from "./Item";

import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    state: state
  };
};

let ItemContainer = connect(mapStateToProps, { logout })(Item);

export default ItemContainer;
