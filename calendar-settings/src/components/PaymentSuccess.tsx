import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg tw-p-6 tw-shadow-md tw-max-w-md tw-mx-auto">
      <div className="tw-flex tw-justify-center tw-mb-4">
        <div className="tw-w-12 tw-h-12 tw-bg-green-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="tw-w-6 tw-h-6 tw-text-green-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">Payment Successful!</h2>
      <p className="tw-text-gray-600 tw-mt-2 tw-text-center">
        Thank you for subscribing. Your account has been successfully upgraded.
      </p>

      <div className="tw-bg-gray-100 tw-rounded-md tw-p-4 tw-mt-4 tw-w-full">
        <div className="tw-flex tw-justify-between tw-text-gray-700 tw-mb-2">
          <span>Order ID</span>
          <span className="tw-font-medium">#123456</span>
        </div>
        <div className="tw-flex tw-justify-between tw-text-gray-700 tw-mb-2">
          <span>Plan</span>
          <span className="tw-font-medium">Premium</span>
        </div>
        <div className="tw-flex tw-justify-between tw-text-gray-700">
          <span>Next billing date</span>
          <span className="tw-font-medium">Dec 4, 2024</span>
        </div>
      </div>

      <button className="tw-bg-gray-900 tw-text-white tw-w-full tw-py-2 tw-mt-6 tw-rounded-md hover:tw-bg-gray-800">
        Go to Dashboard
      </button>
      <button className="tw-bg-gray-200 tw-text-gray-700 tw-w-full tw-py-2 tw-mt-2 tw-rounded-md hover:tw-bg-gray-300">
        Download Receipt
      </button>
    </div>
  );
};

export default PaymentSuccess;