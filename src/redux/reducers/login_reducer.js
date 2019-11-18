import { createAction } from "redux-actions";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

let initialState = {
  user:{
    email:'',
    password: ''
  },
  isLoggedIn: false,
  isFetching: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user : {...action.payload},
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
        isFetching: false
      };
    case LOGOUT:
      return {
        ...state,
        user: {...state.user,
          email:'',
          password: ''
        },
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export const login = createAction(LOGIN);

export const loginSuccess = createAction(LOGIN_SUCCESS);

export const loginError = createAction(LOGIN_ERROR);

export const logout = createAction(LOGOUT);

export default loginReducer;
