import React from 'react'
import '../styles/CartList.scss';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Cart from '../assets/cart.png';


function CartList() {
    const cart = useSelector((state) => state.cart.cart);
    if (!Array.isArray(cart)) {
        return <div>No items in the cart.</div>;
    }
    return (
        <div className="cart-list">
            <div className="cart-list-header">
                <i className="fas fa-shopping-cart"></i> {/* Basket icon */}
                <img src="../assets/cart.png" alt='cart' />
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
        </div>
    )
}

export default CartList