import * as Axios from "axios";
import {registActionCreator, registSuccesActionCreator , registErrorActionCreator}  from './regist_reducer';
import {loginSuccessActionCreator} from './login_reducer';


const registMiddleware = store => next => action => {
    if(action.type === registActionCreator.toString()) {
        let user = store.getState().registPage.user
        let  regist = async (user) => {
          const {data : {token,error}} = await Axios.post('https://loft-taxi.glitch.me/register', user);
          if(error !== undefined){
            store.dispatch(registErrorActionCreator)
            alert(error)
          } else{
            localStorage.setItem("token", token);
            store.dispatch(registSuccesActionCreator())
            store.dispatch(loginSuccessActionCreator())
          }
      }
      regist(user)
    }
    next(action);
}



export default registMiddleware;