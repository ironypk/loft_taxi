import React from "react";
import { connect } from "react-redux";
import { getNewRoute } from "../../redux/reducers/taxi_reducer";


let GetNewRoute = (props) => {
    return (
        <div className='redirect_form'>
            <h2 className='redirect_form__title'>Заказ размещен</h2>
            <p className='redirect_form__text'>Ваше такси уже едет к вамю Прибудет приблизительно чере 10 минут</p>
            <button onClick={()=>{
                props.getNewRoute()
            }} className='btn'>Сделать новый заказ</button>
        </div>
    )
    
}


export default connect(null,{getNewRoute})(GetNewRoute);