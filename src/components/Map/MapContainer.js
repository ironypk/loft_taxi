import { connect } from "react-redux";
import { getMap } from "../../redux/reducers/taxi_reducer";
import { checkStorageCard } from "../../redux/reducers/profile_reducer";
import Maps from './Map'



let mapStateToProps = (state) => {
    return {
      isCard: state.profilePage.isCard,
      isRoute: state.taxi.isRoute
    }
  }
  
  export default connect(mapStateToProps, { getMap, checkStorageCard })(Maps);
  
