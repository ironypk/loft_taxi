import { createAction } from "redux-actions";

const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
const UPDATE_EXPIRY_DATE = "UPDATE_EXPIRY_DATE";
const UPDATE_CARD_NAME = "UPDATE_CARD_NAME";
const UPDATE_CVC = "UPDATE_CVC";
const SAVE_CARD = "SAVE_CARD";
const CLEAR_CARD = "CLEAR_CARD";

let initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
  token: localStorage.token
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARD_NUMBER:
      return {
        ...state,
        cardNumber: action.payload
      };
    case UPDATE_EXPIRY_DATE:
      return {
        ...state,
        expiryDate: action.payload
      };
    case UPDATE_CARD_NAME:
      return {
        ...state,
        cardName: action.payload
      };
    case UPDATE_CVC:
      return {
        ...state,
        cvc: action.payload
      };

    case SAVE_CARD: {
      return {
        ...state
      };
    }

    case CLEAR_CARD: {
      return {
        ...state,
        cardNumber: "",
        expiryDate: "",
        cardName: "",
        cvc: ""
      };
    }
    default:
      return state;
  }
};

export const updateCardNumber = createAction(UPDATE_CARD_NUMBER);

export const updateExpiryDate = createAction(UPDATE_EXPIRY_DATE);

export const updateCardName = createAction(UPDATE_CARD_NAME);

export const updateCvc = createAction(UPDATE_CVC);

export const updateSaveCard = createAction(SAVE_CARD);

export const clearCard = createAction(CLEAR_CARD);

export default profileReducer;
