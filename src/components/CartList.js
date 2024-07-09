import React from 'react'
import '../styles/CartList.scss';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Cart from '../assets/cart.png';
import DiscountCoupon from './DiscountCoupon';


function CartList() {
    const cart = useSelector((state) => state.cart.cart);
    if (!Array.isArray(cart)) {
        return <div>No items in the cart.</div>;
    }
    return (
        <div className="cart-list">
            <div className="cart-list-header">
                <div className="img-container">
                    <img src={Cart} alt="Cart" />

                </div>
                <h2>Cart summary</h2>
            </div>
            <div className="cart-table-header">
                <span>Ticket</span>
                <span>Qty</span>
                <span>Amount</span>
            </div>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <DiscountCoupon />
        </div>
    )
}

export default CartList