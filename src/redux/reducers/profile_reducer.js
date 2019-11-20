import { createAction } from "redux-actions";
const SAVE_CARD = "SAVE_CARD";
const SAVE_CARD_SUCCESS = "SAVE_CARD_SUCCESS";
const SAVE_CARD_ERROR = "SAVE_CARD_ERROR";
const TOGGLE_FORM = 'TOGGLE_FORM';

let initialState = {
  card: {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: ""
  },
  isCard : false,
  toggleForm : false,
  isFetching: false,
  token: localStorage.token || null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CARD: {
      return {
        ...state,
        card : {...action.payload},
        isFetching: true
      };
    }

    case SAVE_CARD_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }

    case TOGGLE_FORM : {
      return {
        ...state,
        toogleForm : action.payload
      }
    }

    case SAVE_CARD_SUCCESS: {
      return {
        ...state,
        isCard: true,
        toggleForm : true,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export const saveCard = createAction(SAVE_CARD);

export const toggleForm = createAction(TOGGLE_FORM)

export const saveCardSuccess = createAction(SAVE_CARD_SUCCESS);

export const saveCardError = createAction(SAVE_CARD_ERROR);

export default profileReducer;
