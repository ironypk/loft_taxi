const UPDATE_USER_NAME = "UPDATE-USER-REG-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-REG-PASS";
const UPDATE_USER_SECODNAME = "UPDATE_USER_REG-SECONDNREG-AME";
const UPDATE_USER_EMAIL = "REG-EMAIL";
// const REGIST = "REGIST";

let initialState = {
  user: {
    email: "",
    name: "",
    secondName: "",
    password: ""
  }
};

const registReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
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

    case UPDATE_USER_SECODNAME:
      return {
        ...state,
        user: {
          ...state.user,
          secondName: action.secondName
        }
      };

    case UPDATE_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
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

export const updateUserEmailActionCreator = userEmail => ({
  type: UPDATE_USER_EMAIL,
  email: userEmail
});

export const updateUserSecondNameActionCreator = userSecondName => ({
  type: UPDATE_USER_SECODNAME,
  secondName: userSecondName
});

export default registReducer;
