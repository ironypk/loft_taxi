import {createAction} from 'redux-actions'
const UPDATE_USER_EMAIL = "UPDATE-USER-EMAIL";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

let initialState = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };

    case UPDATE_USER_PASS:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload
        }
      };

    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          ...state.user,
          email: "",
          password: ""
        }
      };
    default:
      return state;
  }
};

export const updateUserNameActionCreator = createAction(UPDATE_USER_EMAIL)

export const updateUserPassActionCreator = createAction(UPDATE_USER_PASS)

export const loginActionCreator = createAction(LOGIN)

export const logoutActionCreator = createAction(LOGOUT)

export default loginReducer;
