import React from "react";
import all from "./Header.module.css";
import Logo from "../../Logo/Logo";
import Menu from "./Menu/Menu";

let Header = () => {
  return (
    <header className={all.header}>
      <div className={`${all.header__container} container`}>
        <div className="header__logo">
          <Logo/>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
