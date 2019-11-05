import React from "react";
import Regist from "./Regist";
import StoreContext from "./../../../../StoreContext";
import {
  updateUserNameActionCreator,
  updateUserPassActionCreator,
  updateUserEmailActionCreator,
  updateUserSecondNameActionCreator
} from "../../../../redux/regist_reducer";

let RegistContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().registPage.user;
        let updateUserName = userName => {
          store.dispatch(updateUserNameActionCreator(userName));
        };
        let updateUserPass = userPass => {
          store.dispatch(updateUserPassActionCreator(userPass));
        };
        let updateUserEmail = userEmail => {
          store.dispatch(updateUserEmailActionCreator(userEmail));
        };

        let updateUserSecondName = userSecondName => {
          store.dispatch(updateUserSecondNameActionCreator(userSecondName));
        };
        return (
          <Regist
            updateUserName={updateUserName}
            updateUserPass={updateUserPass}
            updateUserEmail={updateUserEmail}
            updateUserSecondName={updateUserSecondName}
            state={state}
            setForm={props.setForm}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default RegistContainer;
