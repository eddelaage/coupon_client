import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const couponsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COUPON':
      console.log('ADD_COUPON')
      console.log('action', action)
      action.payload.id= Date.now()
      const newState = [...state, action.payload]
      return newState;
    case 'EDIT_COUPON':
      console.log('EDIT_COUPON')
      const couponId = action.payload.id
      return state.map(coupon => {
        if(coupon.id !== couponId) {
          return coupon
        }
        return action.payload
      })
    default:
      return state
  }
}

const store = createStore(combineReducers({ coupons: couponsReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
