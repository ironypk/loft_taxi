const UPDATE_USER_NAME = "UPDATE-USER-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


let initialState = {
  user: {
  name: "",
  password: "",
  isLoggedIn: false
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      state.user.name = action.name;
      return state;
    case UPDATE_USER_PASS:
      state.user.password = action.pass;
      return state;
    case LOGIN:
      state.user.isLoggedIn = !state.user.isLoggedIn;
      return state;
    case LOGOUT:
      state.user.isLoggedIn = !state.user.isLoggedIn;
      state.user.name = "";
      state.user.password = "";
      return state;
    default :
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
