const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
const UPDATE_EXPIRY_DATE = "UPDATE_EXPIRY_DATE";
const UPDATE_CARD_NAME = "UPDATE_CARD_NAME";
const UPDATE_CVC = "UPDATE_CVC";
const SAVE_CARD ='SAVE_CARD';

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
        cardNumber: action.cardNumber
      };
    case UPDATE_EXPIRY_DATE:
      return {
        ...state,
        expiryDate: action.expiryDate
      };
    case UPDATE_CARD_NAME:
      return {
        ...state,
        cardName: action.cardName
      };
    case UPDATE_CVC:
      return {
        ...state,
        cvc: action.cvc
      };

    case SAVE_CARD: {
        return {
            ...state,
            cardNumber: "",
            expiryDate: "",
            cardName: "",
            cvc: ""
        }
    }
    default:
      return state;
  }
};

export const updateCardNumberActionCreator = cardNumber => ({
  type: UPDATE_CARD_NUMBER,
  cardNumber: cardNumber
});

export const updateExpiryDateActionCreator = expiryDate => ({
  type: UPDATE_EXPIRY_DATE,
  expiryDate: expiryDate
});

export const updateCardNameActionCreator = cardName => ({
  type: UPDATE_CARD_NAME,
  cardName: cardName
});

export const updateCvcActionCreator = cvc => ({
  type: UPDATE_CVC,
  cvc: cvc
});

export const updateSaveCardActionCreator = () => ({
    type: SAVE_CARD
  });

export default profileReducer;
