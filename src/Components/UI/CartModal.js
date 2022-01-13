import React, { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';

import CartContext from '../../store/cart-context';
import styles from './CartModal.module.css';
import Cart from '../Cart/Cart';
import Button from './Button';
import Card from './Card';

const Backdrop = props => {
    return props.validState && <div onClick={props.onShowing} className={`${styles.backdrop}`} />;
}

const Modal = props => {

    const cartCtx = useContext(CartContext);

    const itemAddHandler = (item) => {

        if (item.value === 10) {
            return;
        }

        cartCtx.addItem({
            ...item,
            value: 1
        })
    }

    const itemRemoveHandler = itemId => {
        cartCtx.removeItem(itemId)
    }

    return (
        <Card className={`${styles.modal} ${props.validState && styles['show-modal']}`}>
            {/* <Cart key={cartCtx.items[cartCtx.items.findIndex(currentItem => currentItem.name === item.name)].id} validBoolean={props.validState} onChangingValid={props.onShowing} items={{name: item.name, amount: item.amount, value: item.value, totalAmount: cartCtx.totalAmount}} />) */}
            <ul className={styles.cart}>{cartCtx.items.map(item => <Cart key={cartCtx.items[cartCtx.items.findIndex(currentItem => currentItem.id === item.id)].id} onAdd={itemAddHandler.bind(null, item)} onRemove={itemRemoveHandler.bind(null, item.id)} items={{ name: item.name, amount: item.amount, value: item.value }} />)}</ul>
            <section className={styles.modal__price}>
                <h1>Total Amount</h1>
                <h1>Rs. {cartCtx.totalAmount}/-</h1>
            </section>
            <footer className={styles.modal__buttons}>
                <Button className={`${styles.btn} ${styles['btn-primary']}`} onClick={props.onShowing}>Close</Button>
                <Button className={`${styles.btn} ${cartCtx.totalAmount ? styles['btn-secondary'] : styles['btn-invalid']}`}>Order Now</Button>
            </footer>
        </Card>
    )
}

const CartModal = props => {

    const changeValidHandler = () => {
        props.onClosingCart(false);
    };

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop validState={props.value} onShowing={changeValidHandler} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modal validState={props.value} onShowing={changeValidHandler} totalAmount={props.totalPrice} />, document.getElementById('modal-root'))}
        </Fragment>
    );
};

export default CartModal;