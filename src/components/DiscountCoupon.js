import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/DiscountCoupon.scss';
// import { APPLY_DISCOUNT } from "../redux/actions";
import { applyDiscount } from '../redux/reducers';

const DiscountCoupon = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();

    const handleApplyDiscount = () => {
        const discountValue = code;
        dispatch(applyDiscount(discountValue));
        setCode("")
        console.log(code, "code");
        // dispatch(APPLY_DISCOUNT(discountValue));
    };

    return (
        <div className="discount-coupon">
            <div className="coupon-input">
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
