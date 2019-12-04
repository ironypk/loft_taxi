import { createAction } from "redux-actions";
const REGIST = "REGIST";
const REGIST_SUCCESS = "REGIST_SUCCESS";
const REGIST_ERROR = "REGIST_ERROR";

let initialState = {
  user: {
    email: "",
    name: "",
    surname: "",
    password: ""
  },
  isFetching: false
};

const registReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIST:
      return {
        ...state,
        user: { ...action.payload },
        isFetching: true
      };
    case REGIST_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case REGIST_ERROR:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};

export const regist = createAction(REGIST);

export const registSucces = createAction(REGIST_SUCCESS);

export const registError = createAction(REGIST_ERROR);

export default registReducer;
