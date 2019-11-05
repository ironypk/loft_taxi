import React from "react";
import {
  loginActionCreator,
  updateUserNameActionCreator,
  updateUserPassActionCreator
} from "../../../../redux/login_reducer";
import Login from "./Login";
import StoreContext from "./../../../../StoreContext";

let LoginContainer = props => {
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
            setPage={props.setPage}
            setForm={props.setForm}
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
