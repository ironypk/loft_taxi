import { connect } from "react-redux";
import App from "./App";


let mapStateToProps = (state) => {
  return {
    state : state.loginPage.isLoggedIn
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

let AppContainer = connect(mapStateToProps,mapDispatchToProps)(App)

export default AppContainer;
