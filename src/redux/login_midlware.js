import * as Axios from "axios";
import {
  loginActionCreator,
  loginSuccessActionCreator,
  loginErrorActionCreator
} from "./login_reducer";

const loginMiddleware = store => next => action => {
  if (action.type === loginActionCreator.toString()) {
    let user = store.getState().loginPage.user;
    let login = async user => {
      const {
        data: { token, error }
      } = await Axios.post("https://loft-taxi.glitch.me/auth", user);
      if (error !== undefined) {
        store.dispatch(loginErrorActionCreator())
        alert(error);
      } else {
        localStorage.setItem("token", token);
        store.dispatch(loginSuccessActionCreator());
      }
    };
    login(user);
  }
  next(action);
};

export default loginMiddleware;
