const UPDATE_USER_NAME = "UPDATE-USER-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

let initialState = {
  user: {
    name: "",
    password: ""
  },
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        user: {
          ...state.user,
          name: action.name
        }
      };

    case UPDATE_USER_PASS:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.pass
        }
      };

    case LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        user: {
          ...state.user,
          name: "",
          password: ""
        }
      };
    default:
      return state;
  }
};

export const updateUserNameActionCreator = userName => ({
  type: UPDATE_USER_NAME,
  name: userName
});

export const updateUserPassActionCreator = userPass => ({
  type: UPDATE_USER_PASS,
  pass: userPass
});

export const loginActionCreator = () => ({
  type: LOGIN
});

export const logoutActionCreator = () => ({
  type: LOGOUT
});

export default loginReducer;
