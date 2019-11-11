import * as Axios from "axios";
import {updateSaveCardActionCreator, clearCardActionCreator }  from './profile_reducer';

const profileMiddleware = store => next => action => {
    if(action.type === updateSaveCardActionCreator.toString()) {
        let card = store.getState().profilePage
        let  saveCard  = async (card) => {
          const {data : {error}} = await Axios.post('https://loft-taxi.glitch.me/card', card);
          if(error !== undefined){
            alert(error)
          } else{
            alert('Карта Сохранена');
            store.dispatch(clearCardActionCreator());
          }
      }
      saveCard(card)
    };
    next(action);
}





export default profileMiddleware ;