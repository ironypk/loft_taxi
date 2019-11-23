import React from "react";
import { withRouter, Link } from "react-router-dom";

let RequestCard = (props) => {
    return (
        <div className='redirect_form'>
            <h2 className='redirect_form__title'>Заполните платежные данные</h2>
            <p className='redirect_form__text'>Укажите информаци о банковской карте, чтобы сделать заказ</p>
            
            <Link  to={`${props.match.url}/profile`} >
                <button className='btn'>Перейти в профиль</button>
            </Link>
        </div>
    )
    
}


export default withRouter(RequestCard);