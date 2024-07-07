import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CartTotal.scss';

const CartTotal = () => {
    const totalPrice = useSelector((state) => state.totalPrice);

    return (
        <div className="cart-total">
            <div>Cart value</div>
            <div>QAR {totalPrice}</div>
            <div>Discounts</div>
            <div>0</div>
            <div>Total</div>
            <div>QAR {totalPrice}</div>
            <button>Continue</button>
        </div>
    );
};

export default CartTotal;
