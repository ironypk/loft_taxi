import React from "react";
import style from "./Preloader.module.css";
import spinner from "./spinner.svg";

const Preloader = () => {
  return <img className={style.preloader} src={spinner} />;
};

export default Preloader