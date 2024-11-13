import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PAYMENT_METHOD } from '../../../constants';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    paymentMethod: PAYMENT_METHOD.CREDIT_CARD
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show confirmation dialog first
    const confirmPayment = window.confirm('Are you sure you want to proceed with the payment?');
    
    if (confirmPayment) {
      try {
        // Here you would dispatch your payment action
        // await dispatch(submitPayment({ ...formData, totalPrice, cart }));
        
        // Show success message and redirect
        const successMessage = `Payment of $${totalPrice} was successful!\nThank you for your purchase.`;
        alert(successMessage);
        navigate('/order-success');
      } catch (error) {
        // Show detailed error message
        const errorMessage = `Payment failed: ${error.message || 'Please try again later.'}`;
        alert(errorMessage);
      }
    }
  };

  const handleCancel = () => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this payment?');
    if (confirmCancel) {
      navigate('/cart');
    }
  };

  return (
    <div className='payment'>
      <h2>Payment Details</h2>
      
      <div className='order-summary'>
        <h3>Order Summary</h3>
        <div className='total-price'>Total: ${totalPrice}</div>
        
        <div className='products-list'>
          {selectedItems.map((item) => (
            <div key={item.id} className='product-item'>
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} id='payment-form' className='payment-form'>
        <div className='payment-form-group'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='payment-form-group'>
          <label htmlFor='address'>Delivery Address</label>
          <textarea
            name='address'
            id='address'
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='payment-form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='payment-form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='payment-form-group'>
          <label htmlFor='paymentMethod'>Payment Method</label>
          <select
            name='paymentMethod'
            id='paymentMethod'
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value={PAYMENT_METHOD.CREDIT_CARD}>Credit Card</option>
            <option value={PAYMENT_METHOD.PAYPAL}>PayPal</option>
            <option value={PAYMENT_METHOD.BANK_TRANSFER}>Bank Transfer</option>
          </select>
        </div>

        <div className='payment-actions'>
          <button type='button' onClick={handleCancel} className='btn-cancel'>
            Cancel
          </button>
          <button type='submit' className='btn-confirm'>
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
