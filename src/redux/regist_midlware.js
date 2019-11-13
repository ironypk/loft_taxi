import * as Axios from "axios";
import {regist, registSucces , registError}  from './regist_reducer';
import {loginSuccess} from './login_reducer';


const registMiddleware = store => next => action => {
    if(action.type === regist.toString()) {
        let user = store.getState().registPage.user
        let  regist = async (user) => {
          const {data : {token,error}} = await Axios.post('https://loft-taxi.glitch.me/register', user);
          if(error !== undefined){
            store.dispatch(registError)
            alert(error)
          } else{
            localStorage.setItem("token", token);
            store.dispatch(registSucces())
            store.dispatch(loginSuccess())
          }
      }
      regist(user)
    }
    next(action);
}



export default registMiddleware;