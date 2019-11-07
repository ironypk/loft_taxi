import { logoutActionCreator } from "../../../../../redux/login_reducer";
import Item from "./Item";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { stat } from "fs";

// let ItemContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let logout = () => {
//           store.dispatch(logoutActionCreator());
//         }
//         return <Route render={({match})=>(
//           <Item match={match} link={props.link} item={props.item} logout={logout}/>
//         )}/>
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    logout : () => {
      dispatch(logoutActionCreator());
    }
  }
}

let ItemContainer = connect(mapStateToProps,mapDispatchToProps)(Item)

export default ItemContainer;
