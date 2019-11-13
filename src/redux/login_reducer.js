import { createAction } from "redux-actions";
const UPDATE_USER_EMAIL = "UPDATE-USER-EMAIL";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

let initialState = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false,
  isFetching: false
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
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: true
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

export const updateUserName = createAction(UPDATE_USER_EMAIL);

export const updateUserPass = createAction(UPDATE_USER_PASS);

export const login = createAction(LOGIN);

export const loginSuccess = createAction(LOGIN_SUCCESS);

export const loginError = createAction(LOGIN_ERROR);

export const logout = createAction(LOGOUT);

export default loginReducer;
