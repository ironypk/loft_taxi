import loginReducer from "./login_reducer";
import registReducer from "./regist_reducer";

const store = {
  _state: {
    registPage : {
      user : {
        email : '',
        name : '',
        secondName : '',
        password: ''
      }
    },
    loginPage : {
      user: {
      name: "",
      password: "",
      isLoggedIn: false
      }
    }
  },
  _callSubscriber() {
    return;
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.registPage.user = registReducer(this._state.registPage.user, action)
    this._state.loginPage.user = loginReducer(this._state.loginPage.user, action)
    this._callSubscriber(this._state);
  }
};


export default store;

window.store = store;
