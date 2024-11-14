/**
 *
 * PaymentPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PaymentForm from '../../components/Store/PaymentForm';
import actions from '../../actions';

//import LoadingIndicator from '../../components/Common/LoadingIndicator';


class PaymentPage extends React.PureComponent {
  componentDidMount() {
    // Initial data fetching
  }

  componentDidUpdate(prevProps) {
    // Handle prop changes
  }

  render() {
    const { cartItems, cartTotal, cartId, confirmPayment, cancelPayment } = this.props;
    return (
      <div className='payment-page'>
        <div>
          <PaymentForm items={cartItems} total={cartTotal} onSubmit={confirmPayment} cartId={cartId} cancelPayment={cancelPayment} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // Your state mappings here
    //isLoading: state.loading.isLoading
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartTotal,
    cartId: state.cart.cartId
  };
};

export default connect(mapStateToProps, actions)(PaymentPage);