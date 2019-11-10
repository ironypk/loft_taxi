import {
  updateCardNumberActionCreator,
  updateExpiryDateActionCreator,
  updateCardNameActionCreator,
  updateCvcActionCreator,
  updateSaveCardActionCreator
} from "../../redux/profile_reducer";
import Profile from "./Profile";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardNumber : (cardNumber) => {
      dispatch(updateCardNumberActionCreator(cardNumber))
    },
    updateExpiryDate : (expiryDate) => {
      dispatch(updateExpiryDateActionCreator(expiryDate))
    },
    updateCardName : (cardName) => {
      dispatch(updateCardNameActionCreator(cardName));
    },
    updateCvc : (cvc) => {
      dispatch(updateCvcActionCreator(cvc))
    },
    saveCard : () => {
      dispatch(updateSaveCardActionCreator())
    }
  }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;