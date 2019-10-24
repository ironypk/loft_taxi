import React from 'react';
import all from './Item.module.css';

let Item = (props) => {
  return (
    <li className={all.item}>
        <a href="#" className={all.item__link}>
            {props.item}
        </a>
    </li>
  );
}

export default Item;