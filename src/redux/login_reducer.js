const UPDATE_USER_EMAIL = "UPDATE-USER-EMAIL";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

let initialState = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        user: {
          ...state.user,
          email: action.email
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
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          ...state.user,
          email: "",
          password: ""
        }
      };
    default:
      return state;
  }
};

export const updateUserNameActionCreator = userEmail => ({
  type: UPDATE_USER_EMAIL,
  email: userEmail
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
