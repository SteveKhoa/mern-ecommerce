import * as types from './constants';

import { success } from 'react-notification-system-redux';
import axios from 'axios';
import { push } from 'connected-react-router';

import { API_URL } from '../../constants';
import handleError from '../../utils/error';
import { addOrder } from '../Order/actions';

export const handlePayment = () => {
  console.log('handlePayment');
  return (dispatch, getState) => {
    const state = getState();
    const cartItems = state.cart.cartItems;
    const cartTotal = state.cart.cartTotal;
    const cartId =  '1234567890';

    if (!cartItems || cartItems.length === 0) {
      // Handle empty cart case
      return;
    }
    dispatch(push('/payment', { 
      state: {
        cartItems,
        cartTotal,
        cartId
      }
    }));
  };
};


export const confirmPayment = (formData) => {
  console.log('confirmPayment');
  return (dispatch, getState) => {
      const state = getState();
      dispatch(addOrder(formData));
  }
};

export const cancelPayment = () => {
  return (dispatch) => {
    dispatch(push('/shop'));
  }
};