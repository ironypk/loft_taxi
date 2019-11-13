import {
  updateCardNumber,
  updateExpiryDate,
  updateCardName,
  updateCvc,
  updateSaveCard
} from "../../redux/profile_reducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    state: state.profilePage
  };
};

let ProfileContainer = connect(mapStateToProps, {
  updateCardNumber,
  updateExpiryDate,
  updateCardName,
  updateCvc,
  updateSaveCard
})(Profile);

export default ProfileContainer;
