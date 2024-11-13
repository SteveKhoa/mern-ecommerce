import * as types from './constants';

export const confirmPayment = (paymentData) => ({
  type: types.CONFIRM_PAYMENT,
  payload: paymentData
});

export const paymentSuccess = () => ({
  type: types.PAYMENT_SUCCESS
});

export const paymentFailure = (error) => ({
  type: types.PAYMENT_FAILURE,
  payload: error
});

export const cancelPayment = () => ({
  type: types.CANCEL_PAYMENT
});