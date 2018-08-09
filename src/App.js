import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import CouponList from './components/CouponList'
import {connect} from 'react-redux'

class App extends Component {

  state = { coupons : []}

  render() {
    return (
      <div>
        <h1>Liste des coupons</h1>
        <Form formAddCoupon='Ajouter un coupon' addCoupon={this.props.addCoupon}/>
        <CouponList coupons={this.props.coupons} editCoupon={this.props.editCoupon}/>
      </div>
    );
  }
}

const addCouponActionCreator = (coupon) => {
  return {
    type: 'ADD_COUPON',
    payload: coupon
  }
}

const editCouponActionCreator = (coupon) => {
  return {
    type: 'EDIT_COUPON',
    payload: coupon
  }
}

const mapStateToProps = (state) => {
  return {
    coupons: state.coupons
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    addCoupon: (coupon) => {
      dispatch(addCouponActionCreator(coupon))
    },
    editCoupon: (coupon) => {
      dispatch(editCouponActionCreator(coupon))
    }
  }
}

// export default App;
export default connect(mapStateToProps, mapDipatchToProps)(App)

