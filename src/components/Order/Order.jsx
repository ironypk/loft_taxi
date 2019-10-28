import React ,{useState} from "react";
import all from "./Order.module.css";
import Profile from "../Profile/Profile";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, BrowserRouter } from "react-router-dom";

let Order = (props) => {
  let [page, setPage] = useState('map');

  let setLinkPage = (link) =>{
    setPage(link)
  }

  return (
      <div className={all.order}>
        <Header setLoginPage={props.setLoginPage} setLinkPage={setLinkPage} />
        <div className="order__content">
          {page === 'map' && <Maps/> }
          {page === 'profile' && <Profile/> }
        </div>
      </div>
  );
};

export default Order;
