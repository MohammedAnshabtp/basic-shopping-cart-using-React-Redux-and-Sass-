import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/DiscountCoupon.scss';
import { APPLY_DISCOUNT } from "../redux/actions";

const DiscountCoupon = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();

    const handleApplyDiscount = () => {
        const discountValue = code === 'DISCOUNT10' ? 10 : 0;
        dispatch(APPLY_DISCOUNT(discountValue));
    };

    return (
        <div className="discount-coupon">
            <div className="coupon-input">
                <i className="fa fa-ticket-alt"></i>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter Discount code"
                />
                <button onClick={handleApplyDiscount}>Add</button>
            </div>
        </div>
    );
};

export default DiscountCoupon;
