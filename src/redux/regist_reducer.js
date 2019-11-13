import {createAction} from 'redux-actions'
const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const UPDATE_USER_PASS = "UPDATE_USER_PASS";
const UPDATE_USER_SURNAME = "UPDATE_USER_SURNAME";
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";
const REGIST = "REGIST";
const REGIST_SUCCESS = 'REGIST_SUCCESS';
const REGIST_ERROR = 'REGIST_ERROR';

let initialState = {
  user: {
    email: "",
    name: "",
    surname: "",
    password: ""
  },
  isFetching : false
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
        ...state,
        isFetching : true

      };
    case REGIST_SUCCESS : 
    return {
      ...state,
      isFetching : false
    }

    case REGIST_ERROR :
      return {
        ...state,
        isFetching : false
      }

    default:
      return state;
  }
};

export const updateUserNameActionCreator = createAction(UPDATE_USER_NAME);

export const updateUserPassActionCreator = createAction(UPDATE_USER_PASS);

export const updateUserEmailActionCreator = createAction(UPDATE_USER_EMAIL);

export const updateUserSecondNameActionCreator = createAction(UPDATE_USER_SURNAME);

export const registActionCreator = createAction(REGIST);

export const registSuccesActionCreator = createAction(REGIST_SUCCESS);

export const registErrorActionCreator = createAction(REGIST_ERROR);


export default registReducer;
