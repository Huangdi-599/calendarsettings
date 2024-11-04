import React from 'react';

const PaymentFailure = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg tw-p-6 tw-shadow-md tw-max-w-md tw-mx-auto">
      <div className="tw-flex tw-justify-center tw-mb-4">
        <div className="tw-w-12 tw-h-12 tw-bg-red-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="tw-w-6 tw-h-6 tw-text-red-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">Payment Failed!</h2>
      <p className="tw-text-gray-600 tw-mt-2 tw-text-center">
        We were unable to process your payment. Please try again or contact support.
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
          <span>Date</span>
          <span className="tw-font-medium">Dec 4, 2024</span>
        </div>
      </div>

      <button className="tw-bg-red-600 tw-text-white tw-w-full tw-py-2 tw-mt-6 tw-rounded-md hover:tw-bg-red-500">
        Retry Payment
      </button>
      <button className="tw-bg-gray-200 tw-text-gray-700 tw-w-full tw-py-2 tw-mt-2 tw-rounded-md hover:tw-bg-gray-300">
        Contact Support
      </button>
    </div>
  );
};

export default PaymentFailure;
