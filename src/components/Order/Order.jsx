import React ,{useState} from "react";
import all from "./Order.module.css";
import Profile from "../Profile/Profile";
import Maps from "../Map/Map";
import Header from "./Header/Header";
import { Route, BrowserRouter } from "react-router-dom";

let Order = ({setLogin}) => {
  let [page, setPage] = useState('map');

  return (
      <div className={all.order}>
        <Header setLogin={setLogin} setPage={setPage} />
        <div className="order__content">
          {page === 'map' && <Maps/> }
          {page === 'profile' && <Profile/> }
        </div>
      </div>
  );
};

export default Order;
