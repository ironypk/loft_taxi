import React from 'react';
import '../style/Order.css';
import Logo from './Logo';
import Profile from './profile';
import Maps from './Map';

let Order = () => {
  return (
    <div className="order">
        <header className='main_header'>
            <div className='main_header__container container'>
                <div className='main_header__logo'>
                    <Logo/>
                </div>
                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <a href="#" className='menu__link'>
                                Карта
                            </a>
                        </li>
                        <li className='menu__item'>
                            <a href="#" className='menu__link'>
                                Профиль
                            </a>
                        </li>
                        <li className='menu__item'>
                            <a href="#" className='menu__link'>
                                Войти
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className='order__content'>
            <Maps/>
        </div>
    </div>
  );
}

export default Order;