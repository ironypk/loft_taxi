import React from 'react';
import s from "./Logo.css";
import {Link} from "react-router-dom";



let Logo = () => {
    return (
      <Link to='#' className="logo">
          <div className="logo__one">Loft</div>
          <div className="logo__two">Taxi</div>
      </Link>
    );
  };

export default Logo;