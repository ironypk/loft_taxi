import { createAction } from "redux-actions";

const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
const UPDATE_EXPIRY_DATE = "UPDATE_EXPIRY_DATE";
const UPDATE_CARD_NAME = "UPDATE_CARD_NAME";
const UPDATE_CVC = "UPDATE_CVC";
const SAVE_CARD = "SAVE_CARD";
const SAVE_CARD_SUCCESS = "SAVE_CARD_SUCCESS";
const SAVE_CARD_ERROR = "SAVE_CARD_ERROR";

let initialState = {
  card: {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: ""
  },
  isFetching: false,
  token: localStorage.token || null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARD_NUMBER:
      return {
        ...state,
        card: { ...state.card, cardNumber: action.payload }
      };
    case UPDATE_EXPIRY_DATE:
      return {
        ...state,
        card: { ...state.card, expiryDate: action.payload }
      };
    case UPDATE_CARD_NAME:
      return {
        ...state,
        card: { ...state.card, cardName: action.payload }
      };
    case UPDATE_CVC:
      return {
        ...state,
        card: { ...state.card, cvc: action.payload }
      };

    case SAVE_CARD: {
      return {
        ...state,
        isFetching: true
      };
    }

    case SAVE_CARD_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }

    case SAVE_CARD_SUCCESS: {
      return {
        ...state,
        card: {
          ...state.card,
          cardNumber: "",
          expiryDate: "",
          cardName: "",
          cvc: ""
        },
        isFetching: false
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

export const saveCard = createAction(SAVE_CARD);

export const saveCardSuccess = createAction(SAVE_CARD_SUCCESS);

export const saveCardError = createAction(SAVE_CARD_ERROR);

export default profileReducer;
