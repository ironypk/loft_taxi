import {createAction} from 'redux-actions'
const UPDATE_USER_NAME = "UPDATE-USER-REG-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-REG-PASS";
const UPDATE_USER_SURNAME = "UPDATE_USER_REG-SURNAME";
const UPDATE_USER_EMAIL = "REG-EMAIL";
const REGIST = "REGIST";

let initialState = {
  user: {
    email: "",
    name: "",
    surname: "",
    password: ""
  }
};

const registReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
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

    case UPDATE_USER_SURNAME:
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.payload
        }
      };

    case UPDATE_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };

    case REGIST:
      return {
        ...state
      };

    default:
      return state;
  }
};

export const updateUserNameActionCreator = createAction(UPDATE_USER_NAME);

export const updateUserPassActionCreator = createAction(UPDATE_USER_PASS);

export const updateUserEmailActionCreator = createAction(UPDATE_USER_EMAIL);

export const updateUserSecondNameActionCreator = createAction(UPDATE_USER_SURNAME);

export const registActionCreator = createAction(REGIST);

export default registReducer;
