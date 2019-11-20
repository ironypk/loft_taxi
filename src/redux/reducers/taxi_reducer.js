import { createAction } from "redux-actions";

const FETCH_ADRESS_LIST = "FETCH_ADRESS_LIST";
const FETCH_ADRESS_LIST_SUCCESS = "FETCH_ADRESS_LIST_SUCCESS";
const FETCH_ADRESS_LIST_ERROR = "FETCH_ADRESS_LIST_ERROR";
const FILTER_ADRESS_LIST = "FILTER_ADRESS_LIST";
const GET_ROUTE = "GET_ROUTE";

let initialState = {
  path: [],
  route: {
    to: "",
    from: ""
  }
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
        path: action.payload.map((path, index) => {
          return { id: index, place: path };
        })
      };
    }

    case GET_ROUTE: {
      return {
        ...state,
        route: {
          ...state.route,
          from: action.payload.from,
          to: action.payload.to
        }
      };
    }

    // case FILTER_ADRESS_LIST : {
    //   return{
    //     ...state,
    //     path : state.path.filter(path => path.place !== action.payload.place)
    //   }
    // }

    case FETCH_ADRESS_LIST_ERROR: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default taxiReducer;

export const getRoute = createAction(GET_ROUTE);

export const filterAdressList = createAction(FILTER_ADRESS_LIST);
export const fetchAdressList = createAction(FETCH_ADRESS_LIST);
export const fetchAdressListSuccess = createAction(FETCH_ADRESS_LIST_SUCCESS);
export const fetchAdressListError = createAction(FETCH_ADRESS_LIST_ERROR);
