import React, { useState } from 'react';

import styles from './MenuForm.module.css';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const MenuForm = props => {

    const [numberOfItems, setNumberOfItems] = useState('1');
    const [numberIsValid, setNumberIsValid] = useState(true);

    const addNumberOfMugs = e => {
        setNumberOfItems(e.target.value);
    }

    const addItemToCartHandler = e => {
        e.preventDefault();

        if (numberOfItems.trim().length === 0 || +numberOfItems === 0) {
            setNumberIsValid(false);
        }
        else {
            setNumberIsValid(true);
            props.onAdding(props.id, +numberOfItems);
        }

        setNumberOfItems('1');
    }

    return (
        <form className={styles['form-control']} onSubmit={addItemToCartHandler}>
            <Input for={'amount'} label={'Amount:'} value={numberOfItems} onChange={addNumberOfMugs} input={{ type: 'number', min: '0', max: '10' }} />
            <Button type='submit' className={styles.item__addBtn}>+Add</Button>
            {!numberIsValid && <p className={styles.invalid__num}>Please Enter Valid Number Of Items (1-10)</p>}
        </form>
    );
};

export default MenuForm;