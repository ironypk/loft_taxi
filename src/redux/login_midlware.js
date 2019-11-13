import * as Axios from "axios";
import { login, loginSuccess, loginError } from "./login_reducer";

const loginMiddleware = store => next => action => {
  if (action.type === login.toString()) {
    let user = store.getState().loginPage.user;
    let login = async user => {
      const {
        data: { token, error }
      } = await Axios.post("https://loft-taxi.glitch.me/auth", user);
      if (error !== undefined) {
        store.dispatch(loginError());
        alert(error);
      } else {
        localStorage.setItem("token", token);
        store.dispatch(loginSuccess());
      }
    };
    login(user);
  }
  next(action);
};

export default loginMiddleware;
