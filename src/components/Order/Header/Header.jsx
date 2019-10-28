import React from "react";
import all from "./Header.module.css";
import Logo from "../../Logo/Logo";
import Menu from "./Menu/Menu";

let Header = (props) => {
  return (
    <header className={all.header}>
      <div className={`${all.header__container} container`}>
        <div className="header__logo">
          <Logo/>
        </div>
        <Menu setLinkPage={props.setLinkPage} setLoginPage={props.setLoginPage} />
      </div>
    </header>
  );
};

export default Header;
