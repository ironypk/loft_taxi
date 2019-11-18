import loginReducer, { login, loginSuccess, loginError, logout} from "./login_reducer";

let state = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false,
  isFetching: false
};

it("try to login", () => {
  let action = login({ email: "email", password: "password" });
  let newState = loginReducer(state, action);
  expect(newState).toStrictEqual({
    ...state,
    user: { ...action.payload },
    isLoggedIn: false,
    isFetching: true
  });
});


it("if login success", () => {
  let action = loginSuccess();
  let newState = loginReducer(state, action);
  expect(newState).toStrictEqual({
    ...state,
    isLoggedIn: true,
    isFetching: false
  });
});



it("if login Error", () => {
  let action = loginError();
  let newState = loginReducer(state, action);
  expect(newState).toStrictEqual({
    ...state,
    isFetching: false
  });
});


it("logout", () => {
  let action = logout();
  let newState = loginReducer(state, action);
  expect(newState).toStrictEqual({
    ...state,
        user: {...state.user,
          email:'',
          password: ''
        },
        isLoggedIn: false
  });
});

