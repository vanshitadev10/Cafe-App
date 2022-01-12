import React, { useContext } from 'react';

import MenuItem from './MenuItems/MenuItem';
import MenuForm from './MenuItems/MenuForm';
import styles from './AvailableItems.module.css';
import CartContext from '../../store/cart-context';

const menuItems = [
    {
        id: 'item1',
        name: 'CAPPUCCINO',
        description: 'Dark coffee with thick milk foam',
        price: 149
    },
    {
        id: 'item2',
        name: 'FLAT WHITE',
        description: 'Steamed milk coffee to shoot your day',
        price: 149
    },

    {
        id: 'item3',
        name: 'LEMON GREEN COFFEE',
        description: 'Hot and rich green coffee with the goodness of lemon',
        price: 249
    },
    {
        id: 'item4',
        name: 'FILTER COFFEE',
        description: 'South Indian type coffee you can\'t resist',
        price: 249
    },
    {
        id: 'item5',
        name: 'VANILLA LATTE',
        description: 'Coffee with unusual touch of rich vanilla flavour',
        price: 249
    },
    {
        id: 'item6',
        name: 'HONEY CINNAMON COFFEE',
        description: 'Coffee with goodness of cinnamon and honey',
        price: 449
    },
    {
        id: 'item7',
        name: 'VEGAN SHAKE',
        description: 'Cold coffee with a classic touch',
        price: 449
    },
    {
        id: 'item8',
        name: 'HOT VELVET COFFEE',
        description: 'Delicious coffee with new hot avtar',
        price: 799
    },
    {
        id: 'item9',
        name: 'TANGERINE WHITE CHOCOLATE ICED COFFEE',
        description: 'Creamy and chocolatey cold coffee',
        price: 999
    },
    {
        id: 'item10',
        name: 'CRUNCHY FRAPPE',
        description: 'Coffee with the crunch of Oreo',
        price: 999
    }

];

const AvailableItems = () => {

    const cartCtx = useContext(CartContext);

    const onAddToCartHandler = (itemId, itemNum) => {

        const itemAdded = menuItems.filter(item => item.id === itemId);

        cartCtx.addItem({
            id: itemId,
            name: itemAdded[0].name,
            amount: itemAdded[0].price,
            value: itemNum
        })
    }

    return (
        <ul className={styles['menu-item']}>
            {menuItems.map(item =>
                <li className={styles['menu-list']} key={item.id}>
                    <MenuItem name={item.name} description={item.description} value={item.price} />
                    <MenuForm id={item.id} onAdding={onAddToCartHandler} />
                </li>
            )}
        </ul>
    );
};

export default AvailableItems;