import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import '../styles/CartItem.scss';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <span>{item.name}</span>
            <span>
                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                {item.quantity}
                <button onClick={() => dispatch(addItem(item))}>+</button>
            </span>
            <span>QAR {item.price}</span>
        </div>
    );
};

export default CartItem;
