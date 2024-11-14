import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentFailed = () => {
  const errorInfo = {
    errorCode: 'ERR_PAYMENT_001',
    transactionId: '#123456',
    errorMessage: 'Your payment could not be processed. Please try again or use a different payment method.'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
    {/* Error Message */}
      <div className="text-center mb-6 sm:mb-8">
        <FaTimesCircle className="text-red-500 text-5xl sm:text-6xl mb-3 sm:mb-4 mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Payment Failed
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-md mx-auto">
          We're sorry, but there was an issue processing your payment
        </p>
      </div>

      {/* Error Details */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8 w-full max-w-[90%] sm:max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Error Details</h2>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-gray-600 text-sm sm:text-base">Error Code:</span>
            <span className="font-medium text-sm sm:text-base">{errorInfo.errorCode}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-gray-600 text-sm sm:text-base">Transaction ID:</span>
            <span className="font-medium text-sm sm:text-base">{errorInfo.transactionId}</span>
          </div>
          <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-md">
            <p className="text-sm sm:text-base text-red-700">
              {errorInfo.errorMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[90%] sm:max-w-md">
        <Link
          to="/checkout"
          className="w-full sm:w-1/2 px-6 py-2.5 bg-red-600 text-white text-center text-sm sm:text-base 
          rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 
          focus:ring-red-500 focus:ring-offset-2"
        >
          Try Again
        </Link>
        <Link
          to="/cart"
          className="w-full sm:w-1/2 px-6 py-2.5 bg-gray-600 text-white text-center text-sm sm:text-base 
          rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 
          focus:ring-gray-500 focus:ring-offset-2"
        >
          Return to Cart
        </Link>
      </div>

      {/* Help Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Need help?{' '}
          <Link
            to="/contact"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PaymentFailed;
