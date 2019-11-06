const UPDATE_USER_NAME = "UPDATE-USER-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const loginReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      state.name = action.name;
      return state;
    case UPDATE_USER_PASS:
      state.password = action.pass;
      return state;
    case LOGIN:
      state.isLoggedIn = !state.isLoggedIn;
      return state;
    case LOGOUT:
      console.log('logout')
      state.isLoggedIn = !state.isLoggedIn;
      state.name = "";
      state.password = "";
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
