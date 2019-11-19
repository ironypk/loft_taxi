import loginReducer, {
  login,
  loginSuccess,
  loginError,
  logout
} from "./login_reducer";

let state = {
  user: {
    email: "",
    password: ""
  },
  isLoggedIn: false,
  isFetching: false
};

describe(">>>A C T I O N --- Test loginActions", () => {
  it("+++ actionCreator login", () => {
    const add = login(50);
    expect(add).toEqual({ type: "LOGIN", payload: 50 });
  });

  it("+++ actionCreator loginSuccess", () => {
    const add = loginSuccess(50);
    expect(add).toEqual({ type: "LOGIN_SUCCESS", payload: 50 });
  });

  it("+++ actionCreator loginError", () => {
    const add = loginError(50);
    expect(add).toEqual({ type: "LOGIN_ERROR", payload: 50 });
  });

  it("+++ actionCreator logout", () => {
    const add = logout(50);
    expect(add).toEqual({ type: "LOGOUT", payload: 50 });
  });
});

describe(">>>R E D U C E R --- Test calculatorReducers", () => {
  it("+++ reducer for LOGIN", () => {
    state = loginReducer(state, {
      type: "LOGIN",
      payload: { email: "email", password: "password" }
    });
    expect(state).toEqual({
      user: { email: "email", password: "password" },
      isLoggedIn: false,
      isFetching: true
    });
  });

  it("+++ reducer for LOGIN_SUCCESS", () => {
    state = loginReducer(state, { type: "LOGIN_SUCCESS" });
    expect(state).toStrictEqual({
      ...state,
      isLoggedIn: true,
      isFetching: false
    });
  });

  it("+++ reducer for LOGIN_ERROR", () => {
    state = loginReducer(state, { type: "LOGIN_ERROR" });
    expect(state).toStrictEqual({
      ...state,
      isFetching: false
    });
  });

  it("+++ reducer for LOGOUT", () => {
    state = loginReducer(state, { type: "LOGOUT" });
    expect(state).toStrictEqual({
      ...state,
      user: { ...state.user, email: "", password: "" },
      isLoggedIn: false
    });
  });
});
