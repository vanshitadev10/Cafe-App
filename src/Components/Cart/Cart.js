import React from 'react';

import styles from './Cart.module.css';
import Button from '../UI/Button';

const Cart = props => {
    return (
        <li className={styles.modal__section}>
            <div className={styles.modal__items}>
                <div className={styles.modal__itemsName}>{props.items.name}</div>
                <div className={styles.modal__itemsPrice}>{props.items.amount}/-</div>
                <div className={styles.modal__itemsValue}>&times; {props.items.value}</div>
            </div>
            <div className={styles.modal__buttons}>
                <Button className={styles['btn-primary']} onClick={props.onRemove}>-</Button>
            <Button className={styles['btn-primary']} onClick={props.onAdd}>+</Button>
        </div>
        </li >

    );
};

export default Cart;