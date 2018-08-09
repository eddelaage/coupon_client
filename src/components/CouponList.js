import React from 'react';
import Coupon from './Coupon'

const CouponList = (props) => {
  return (
      <div>
        <h3>Vos coupons</h3>
          {
            props.coupons.map(coupon => <Coupon data={coupon} key={coupon.id} editCoupon={props.editCoupon}/>)
          }
      </div>
    )
}

export default CouponList