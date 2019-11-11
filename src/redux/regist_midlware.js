import * as Axios from "axios";
import {registActionCreator}  from './regist_reducer';


const registMiddleware = store => next => action => {
    if(action.type === registActionCreator.toString()) {
        let user = store.getState().registPage.user
        let  regist = async (user) => {
          const {data : {token,error}} = await Axios.post('https://loft-taxi.glitch.me/register', user);
          if(error !== undefined){
            alert(error)
          } else{
            localStorage.setItem("token", token);
            alert('успех')
          }
      }
      regist(user)
    };
    next(action);
}



export default registMiddleware;