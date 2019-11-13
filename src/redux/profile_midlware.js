import * as Axios from "axios";
import { updateSaveCard, clearCard } from "./profile_reducer";

const profileMiddleware = store => next => action => {
  if (action.type === updateSaveCard.toString()) {
    let card = store.getState().profilePage;
    let saveCard = async card => {
      const {
        data: { error }
      } = await Axios.post("https://loft-taxi.glitch.me/card", card);
      if (error !== undefined) {
        alert(error);
      } else {
        alert("Карта Сохранена");
        store.dispatch(clearCard());
      }
    };
    saveCard(card);
  }
  next(action);
};

export default profileMiddleware;
