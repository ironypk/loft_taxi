const UPDATE_USER_NAME = "UPDATE-USER-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const store = {
  _state: {
    user: {
      name: "",
      password: ""
    },
    isLoggedIn: false
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
    if (action.type === UPDATE_USER_NAME) {
      this._state.user.name = action.name;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_USER_PASS) {
      this._state.user.password = action.pass;
      this._callSubscriber(this._state);
    } else if (action.type === LOGIN) {
      this._state.isLoggedIn = !this._state.isLoggedIn;
    } else if (action.type === LOGOUT) {
      this._state.isLoggedIn = !this._state.isLoggedIn;
      this._state.user.name = "";
      this._state.user.password = "";
    }
  }
};

export const updateUserNameActionCreator = userName => ({
  type: UPDATE_USER_NAME,
  name: userName
});

export const updateUserPassActionCreator = userPass => ({
  type: UPDATE_USER_PASS,
  pass: userPass
});

export const loginActionCreator = () => ({
  type: LOGIN
});

export const logoutActionCreator = () => ({
  type: LOGOUT
});

export default store;

window.store = store;
