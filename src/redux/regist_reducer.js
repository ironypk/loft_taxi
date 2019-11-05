const UPDATE_USER_NAME = "UPDATE-USER-NAME";
const UPDATE_USER_PASS = "UPDATE-USER-PASS";
const UPDATE_USER_SECODNAME = "UPDATE_USER_SECONAME";
const UPDATE_USER_EMAIL = "EMAIL";
const REGIST = "REGIST";

const registReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      state.name = action.name;
      return state;
    case UPDATE_USER_PASS:
      state.password = action.pass;
      return state;
    case UPDATE_USER_SECODNAME:
      state.secondName = action.secondName;
      return state;
    case UPDATE_USER_EMAIL:
      state.email= action.email;
      return state;

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
