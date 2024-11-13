import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
  const paymentInfo = {
    orderId: '#123456',
    amount: '$99.99',
    date: new Date().toLocaleDateString()
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Success Message - Responsive text sizes */}
      <div className="text-center mb-6 sm:mb-8">
        <FaCheckCircle className="text-green-500 text-5xl sm:text-6xl mb-3 sm:mb-4 mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Thank you for your purchase
        </p>
      </div>

      {/* Payment Information - Responsive width and padding */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8 w-full max-w-[90%] sm:max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Payment Details</h2>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-gray-600 text-sm sm:text-base">Order ID:</span>
            <span className="font-medium text-sm sm:text-base">{paymentInfo.orderId}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-gray-600 text-sm sm:text-base">Amount Paid:</span>
            <span className="font-medium text-sm sm:text-base">{paymentInfo.amount}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-gray-600 text-sm sm:text-base">Date:</span>
            <span className="font-medium text-sm sm:text-base">{paymentInfo.date}</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Responsive layout and sizes */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[90%] sm:max-w-md">
        <Link
          to="/cart"
          className="w-full sm:w-1/2 px-6 py-2.5 bg-gray-600 text-white text-center text-sm sm:text-base 
          rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 
          focus:ring-gray-500 focus:ring-offset-2"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="w-full sm:w-1/2 px-6 py-2.5 bg-blue-600 text-white text-center text-sm sm:text-base 
          rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-offset-2"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
