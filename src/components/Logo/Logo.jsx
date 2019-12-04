import React from 'react';
import style from "./Logo.module.css";
import {Link} from "react-router-dom";



let Logo = () => {
    return (
      <Link to='#' className={style.logo}>
          <div className={`logo__one ${style.logo__one}`}>Loft</div>
          <div className={`logo__two ${style.logo__two}`}>Taxi</div>
      </Link>
    );
  };

export default Logo;