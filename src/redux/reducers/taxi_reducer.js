import { createAction } from "redux-actions";

const CHOOSE_PATH = 'CHOOSE_PATH'

let initialState = {
  path : [
      {id : 1, place : 'Пулково'},
      {id : 2, place : 'Шаверма'},
      {id : 3, place : 'Больница'},
      {id : 4, place : 'Кладбище'}
  ],
  to: '',
  from: ''
};

const taxiReducer = (state = initialState, action) => {
  switch (action.type) {
      case CHOOSE_PATH :
          return{
              ...state
          }
    default:
      return state;
  }
};

export default taxiReducer;


export const choosePath = createAction(CHOOSE_PATH)
