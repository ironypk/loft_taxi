import React from "react";
import styleButton from '../Profile/Profile.module.css';
import style from './RequestCard.module.css';
import { withRouter, Link } from "react-router-dom";



let RequestCard = (props) => {
    return (
        <div className={style.requestCard}>
            <h2 className='requestCard__title'>Заполните платежные данные</h2>
            <p>Укажите информаци о банковской карте, чтобы сделать заказ</p>
            
            <Link  to={`${props.match.url}/profile`} >
                <button className={styleButton.btn}>Перейти в профиль</button>
            </Link>
        </div>
    )
    
}


export default withRouter(RequestCard);