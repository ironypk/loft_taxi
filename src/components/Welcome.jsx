import React from "react";
import "../style/welcome.css";
import Logo from "./Logo";
import Login from "./Login";
import Regist from "./Regist";

let Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__logo">
        <Logo/>
      </div>
      <Login/>
    </div>
  );
};

export default Welcome;
