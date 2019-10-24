import React from 'react';
import all from './Order.module.css';
import Profile from '../Profile/Profile';
import Maps from '../Map/Map';
import Header from './Header/Header';

let Order = () => {
  return (
    <div className={all.order}>
        <Header/>
        <div className='order__content'>
            <Maps/>
        </div>
    </div>
  );
}

export default Order;