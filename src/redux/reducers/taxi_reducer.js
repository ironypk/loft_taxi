import { createAction } from "redux-actions";

const FETCH_ADRESS_LIST = "FETCH_ADRESS_LIST";
const FETCH_ADRESS_LIST_SUCCESS = "FETCH_ADRESS_LIST_SUCCESS";
const FETCH_ADRESS_LIST_ERROR = "FETCH_ADRESS_LIST_ERROR";
const GET_ROUTE = "GET_ROUTE";
const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
const ON_CHANGE_ROUTE_FROM = "ON_CHANGE_ROUTE_FROM";
const ON_CHANGE_ROUTE_TO = "ON_CHANGE_ROUTE_TO";
const GET_MAP = "GET_MAP";
const GET_NEW_ROUTE = 'GET_NEW_ROUTE'
const CLEAR_INPUT_FROM = 'CLEAR_INPUT_FROM'
const CLEAR_INPUT_TO = 'CLEAR_INPUT_TO'

let initialState = {
  adressList: [],
  route: {
    to: "",
    from: ""
  },
  isRoute: false,
  map: ""
};
const taxiReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ADRESS_LIST: {
      return {
        ...state
      };
    }

    case FETCH_ADRESS_LIST_SUCCESS: {
      return {
        ...state,
        adressList: action.payload.map(item => {
          return item;
        })
      };
    }

    case GET_ROUTE: {
      return {
        ...state
      };
    }


    case GET_MAP : {
      return {
        ...state,
        map : action.payload
      }
    }

    case GET_ROUTE_SUCCESS: {
      return {
        ...state,
        isRoute : true
      };
    }

    case GET_NEW_ROUTE: {
      return {
        ...state,
        isRoute : false,
        route : {...state.route, to:'', from:''}
      };
    }

    case ON_CHANGE_ROUTE_FROM: {
      return {
        ...state,
        route: { ...state.route, from: action.payload }
      };
    }

    case ON_CHANGE_ROUTE_TO: {
      return {
        ...state,
        route: { ...state.route, to: action.payload }
      };
    }

    case FETCH_ADRESS_LIST_ERROR: {
      return {
        ...state
      };
    }

    case CLEAR_INPUT_FROM:{
      return {
        ...state,
        route: {...state.route , from: ''}
      }
    }


    case CLEAR_INPUT_TO:{
      return {
        ...state,
        route: {...state.route , to: ''}
      }
    }

    default:
      return state;
  }
};

export default taxiReducer;

export const clearInputFrom = createAction(CLEAR_INPUT_FROM)

export const clearInputTo = createAction(CLEAR_INPUT_TO)

export const getNewRoute = createAction(GET_NEW_ROUTE)

export const getMap = createAction(GET_MAP);

export const getRouteSuccess = createAction(GET_ROUTE_SUCCESS);

export const getRoute = createAction(GET_ROUTE);

export const onChangeRouteFrom = createAction(ON_CHANGE_ROUTE_FROM);
export const onChangeRouteTo = createAction(ON_CHANGE_ROUTE_TO);

export const fetchAdressList = createAction(FETCH_ADRESS_LIST);
export const fetchAdressListSuccess = createAction(FETCH_ADRESS_LIST_SUCCESS);
export const fetchAdressListError = createAction(FETCH_ADRESS_LIST_ERROR);
