import { createAction } from "redux-actions";
const SAVE_CARD = "SAVE_CARD";
const SAVE_CARD_SUCCESS = "SAVE_CARD_SUCCESS";
const SAVE_CARD_ERROR = "SAVE_CARD_ERROR";
const TOGGLE_FORM = "TOGGLE_FORM";
const SET_TOKEN = "SET_TOKEN";
const CHECK_STORAGE_CARD = "CHECK_STORAGE_CARD";

let initialState = {
  card: {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: ""
  },
  isCard: false,
  toggleForm: false,
  isFetching: false,
  token: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CARD: {
      return {
        ...state,
        card: { ...action.payload },
        isFetching: true
      };
    }

    case SAVE_CARD_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }

    case CHECK_STORAGE_CARD: {
      return {
        ...state,
        card : JSON.parse(localStorage.getItem('card')),
        isCard: true
      };
    }

    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      };
    }

    case TOGGLE_FORM: {
      return {
        ...state,
        toggleForm: action.payload
      };
    }

    case SAVE_CARD_SUCCESS: {
      return {
        ...state,
        isCard: true,
        toggleForm: true,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export const checkStorageCard = createAction(CHECK_STORAGE_CARD);
export const setToken = createAction(SET_TOKEN);
export const saveCard = createAction(SAVE_CARD);

export const toggleForm = createAction(TOGGLE_FORM);

export const saveCardSuccess = createAction(SAVE_CARD_SUCCESS);

export const saveCardError = createAction(SAVE_CARD_ERROR);

export default profileReducer;
