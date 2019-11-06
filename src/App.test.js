import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount } from "enzyme";
import Welcome from "./components/Welcome/Welcome.jsx";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

it("render welcome", () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains(<Welcome />)).toEqual(true);
});
