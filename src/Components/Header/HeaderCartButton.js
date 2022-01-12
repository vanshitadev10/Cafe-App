import React, { Fragment, useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';


const HeaderCartButton = props => {

    const [animation, setAnimation] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((currentNumber, itemNumber) => {
        return currentNumber + itemNumber.value;
    }, 0);

    const {items} = cartCtx;


    useEffect(() => {

        if(items.length === 0){
            return;
        }

        setAnimation(true)

        const interval = setTimeout(() => {
            setAnimation(false);
        }, 200);

        return () => {
            clearTimeout(interval);
        }
    }, [items]);


    return (
        <Fragment>
            <button className={`${styles['btn-primary']} ${animation ? styles['cart-animation'] : ''}`} onClick={props.onClosingCart}>
                <CartIcon />&nbsp;Your Cart
                <Card className={styles['item-count']}>{numberOfItems}</Card>
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;