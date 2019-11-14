import {
  updateCardNumber,
  updateExpiryDate,
  updateCardName,
  updateCvc,
  saveCard
} from "../../redux/reducers/profile_reducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    card: state.profilePage.card,
    isFetching : state.profilePage.isFetching
  };
};

let ProfileContainer = connect(mapStateToProps, {
  updateCardNumber,
  updateExpiryDate,
  updateCardName,
  updateCvc,
  saveCard
})(Profile);

export default ProfileContainer;
