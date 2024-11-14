import * as types from './constants';

const initialState = {
  paymentStatus: null,
  paymentData: null,
  error: null
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONFIRM_PAYMENT:
      return {
        ...state,
        paymentStatus: 'processing',
        paymentData: action.payload
      };
    case types.PAYMENT_SUCCESS:
      return {
        ...state,
        paymentStatus: 'success'
      };
    case types.PAYMENT_FAILURE:
      return {
        ...state,
        paymentStatus: 'failed',
        error: action.payload
      };
    case types.CANCEL_PAYMENT:
      return initialState;
    default:
      return state;
  }
};

export default paymentReducer;