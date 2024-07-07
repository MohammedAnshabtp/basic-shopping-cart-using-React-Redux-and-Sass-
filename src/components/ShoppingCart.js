import React from 'react'
import CartList from '../components/CartList';
import CartTotal from '../components/CartTotal';

import '../styles/ShoppingCart.scss';


function ShoppingCart() {
    return (
        <div className="shopping-cart">

            <div className="cart-summary">

                <CartList />
            </div>
            <div className="total-cart-value">
                <CartTotal />
            </div>
        </div>
    )
}

export default ShoppingCart