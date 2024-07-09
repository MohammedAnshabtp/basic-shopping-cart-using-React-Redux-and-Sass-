import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CartTotal.scss';
import Boat from "../assets/kid.png"

const CartTotal = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const discount = useSelector((state) => state.cart.discount);

    const finalPrice = totalPrice - discount;

    return (
        <div className="cart-total">

            <div className="cart-list-total">
                <h2>Total Cart Value </h2>
            </div>
            <div className="cart-img">
                <img src={Boat} alt="Cart" />
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
                            <td>{discount}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>QAR {finalPrice}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <button>Continue</button>


        </div>
    );
};

export default CartTotal;
