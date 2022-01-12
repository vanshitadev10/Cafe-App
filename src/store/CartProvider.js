import React, { useReducer } from 'react';

import CartContext from './cart-context';


const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {

        const existingItemIndex = state.items.findIndex(item => item.id === action.itemAdded.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItem;
        let updatedAmount;

        if (existingItem) {

            let updatedCartItem;

            if ((existingItem.value + action.itemAdded.value) > 10) {
                updatedCartItem = {
                    ...existingItem,
                    value: action.itemAdded.value
                }
                updatedAmount = state.totalAmount - (existingItem.amount * existingItem.value) + (action.itemAdded.amount * updatedCartItem.value);

            }
            else {
                updatedCartItem = {
                    ...existingItem,
                    value: existingItem.value + action.itemAdded.value
                }
                updatedAmount = state.totalAmount - (existingItem.amount * existingItem.value) + action.itemAdded.amount * updatedCartItem.value;
            }

            updatedItem = [...state.items]
            updatedItem[existingItemIndex] = updatedCartItem;
        }
        else {
            updatedItem = state.items.concat(action.itemAdded);
            updatedAmount = state.totalAmount + action.itemAdded.amount * action.itemAdded.value;
        }



        return {
            items: updatedItem,
            totalAmount: updatedAmount
        };
    }

    if (action.type === 'REMOVE_ITEM') {

        const existingItemIndex = state.items.findIndex(item => item.id === action.itemToRemove);
        const existingItem = state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.amount;
        let updatedItem;

        if (existingItem.value === 1) {
            updatedItem = state.items.filter(item => item.id !== action.itemToRemove);
        }
        else {
            const updatedCartItem = {
                ...existingItem,
                value: existingItem.value - 1
            }

            updatedItem = [...state.items]
            updatedItem[existingItemIndex] = updatedCartItem;
        }

        return {
            items: updatedItem,
            totalAmount: updatedAmount
        };
    }


    return initialCartState;
}


const CartProvider = props => {

    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState)

    const addItemToCart = item => {
        dispatchCart({ type: 'ADD_ITEM', itemAdded: item });
    };

    const removeItemFromCart = id => {
        dispatchCart({ type: 'REMOVE_ITEM', itemToRemove: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
}

export default CartProvider;