import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import '../styles/CartItem.scss';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <div className="item-name">{item.name}</div>
            <div className="item-qty">
                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                {item.quantity}
                <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
            <div className="item-price">QAR {item.price * item.quantity}</div>
        </div>
    );

};

export default CartItem;
