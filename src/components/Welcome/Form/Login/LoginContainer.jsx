import React from "react";
import {
  loginActionCreator,
  updateUserNameActionCreator,
  updateUserPassActionCreator
} from "../../../../redux/login_reducer";
import Login from "./Login";
import StoreContext from "./../../../../StoreContext";
let LoginContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().loginPage.user;
        let login = () => {
          store.dispatch(loginActionCreator());
        };

        let updateUserName = userName => {
          store.dispatch(updateUserNameActionCreator(userName));
        };

        let updateUserPass = userPass => {
          store.dispatch(updateUserPassActionCreator(userPass));
        };
        return (
            <Login
            state={state}
            login={login}
            updateUserName={updateUserName}
            updateUserPass={updateUserPass}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default LoginContainer;
