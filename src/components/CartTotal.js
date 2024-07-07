import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CartTotal.scss';

const CartTotal = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const discount = useSelector((state) => state.cart.discount);

    const finalPrice = totalPrice - discount;

    return (
        <div className="cart-total">
            <div className="cart-list-total">
                <h2>Total Cart Value </h2>
            </div>
            <div className="cart-total">
                <table>
                    <tbody>
                        <tr>
                            <td>Cart value</td>
                            <td>QAR {totalPrice}</td>
                        </tr>
                        <tr>
                            <td>Discounts</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>QAR {totalPrice}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <button>Continue</button>


        </div>
    );
};

export default CartTotal;
