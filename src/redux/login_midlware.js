import * as Axios from "axios";
import { loginActionCreator } from "./login_reducer";

const loginMiddleware = store => next => action => {
  if (action.type === loginActionCreator.toString()) {
    let user = store.getState().loginPage.user;
    let login = async user => {
      const {
        data: { token, error }
      } = await Axios.post("https://loft-taxi.glitch.me/auth", user);
      if (error !== undefined) {
        alert(error);
      } else {
        localStorage.setItem("token", token);
        alert("успех");
      }
    };
    login(user);
  }
  next(action);
};

export default loginMiddleware;
