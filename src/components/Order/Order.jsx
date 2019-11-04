import React ,{useState} from "react";
import all from "./Order.module.css";
import Profile from "../Profile/Profile";
import Maps from "../Map/Map";
import Header from "./Header/Header";

let Order = (props) => {
  let [page, setPage] = useState('map');

  return (
      <div className={all.order}>
        <Header setLogin={props.setLogin} setPage={setPage} />
        <div className="order__content">
          {page === 'map' && <Maps/> }
          {page === 'profile' && <Profile/> }
        </div>
      </div>
  );
};

export default Order;
