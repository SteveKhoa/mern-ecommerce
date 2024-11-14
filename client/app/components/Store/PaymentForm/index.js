import React, { useState } from 'react';
import { PAYMENT_METHOD } from '../../../constants';

const PaymentForm = ({ items = [], total = 0, onSubmit, cancelPayment }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'Credit_Card',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="container py-4">
        <div className="row">
          {/* Form Section */}
          <div className="col-md-8">
            {/* Personal Information */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">Recipient Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Payment Method</h5>
                {Object.entries(PAYMENT_METHOD).map(([key, value]) => (
                  <div key={key} className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="paymentMethod"
                      value={key}
                      checked={formData.paymentMethod === key}
                      onChange={handleChange}
                      id={key}
                    />
                    <label className="custom-control-label" htmlFor={key}>
                      {value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>
                <div className="list-group mb-4">
                  {items.map((item, index) => (
                    <div key={index} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-0">{item.name}</h6>
                          <small className="text-muted">Quantity: {item.quantity}</small>
                        </div>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Total</h6>
                      <strong>${total.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-block"
                  form="payment-form"
                  type="submit"
                  style={{backgroundColor: '#28a745', borderColor: '#28a745', color: '#FFFFFF'}}
                >
                  <i className="fa fa-check"></i> Confirm Payment
                </button>
                <button
                  className="btn btn-secondary btn-block"
                  onClick={cancelPayment}
                  type="button"
                  style={{backgroundColor: '#dc3545', borderColor: '#dc3545', color: '#FFFFFF'}}
                >
                  <i className="fa fa-times"></i> Cancel Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
