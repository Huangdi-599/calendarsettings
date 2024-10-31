import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
// import './Payment.css';
import CreditCard from './CreditCard';

const Payment: React.FC = () => {
  // State variables for card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false); // To control card flip animation

  return (
    <Box className="tw-max-w-xl tw-mx-auto tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md tw-mt-40">
      {/* Card Display */}
      <Box className="tw-relative tw-z-10 tw--top-10 tw-mx-auto tw-w-full tw-max-w-md">
        <CreditCard
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          cvv={cvv}
          isFlipped={isFlipped}
        />
      </Box>
      
      {/* Form Fields */}
      <Box component="form" className="tw-flex tw-flex-col tw-gap-4 tw-pt-0">
        <Typography variant="subtitle1" className="tw-text-gray-700">Card Number</Typography>
        <TextField
          variant="outlined"
          value={cardNumber}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
            value = value.slice(0, 16); // Limit to 16 digits
            value = value.replace(/(.{4})/g, '$1 ').trim(); // Add space every 4 digits
            setCardNumber(value);
          }}
          onFocus={() => setIsFlipped(false)}
          fullWidth
          className="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-border-blue-500 focus:tw-outline-none"
        />

        <Typography variant="subtitle1" className="tw-text-gray-700">Card Holder</Typography>
        <TextField
          variant="outlined"
          value={cardHolder}
          onChange={(e) => {
            const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only alphabetic characters and spaces
            setCardHolder(value);
          }}
          onFocus={() => setIsFlipped(false)}
          fullWidth
          className="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-border-blue-500 focus:tw-outline-none"
        />

        <Typography variant="subtitle1" className="tw-text-gray-700">Expiration Date</Typography>
        <Box className="tw-flex tw-gap-4 tw-items-center">
          <TextField
            select
            variant="outlined"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            SelectProps={{ native: true }}
            fullWidth
            onFocus={() => setIsFlipped(false)}
            className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-border-blue-500 focus:tw-outline-none"
          >
            <option value="" disabled>Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                {String(i + 1).padStart(2, '0')}
              </option>
            ))}
          </TextField>

          <TextField
            select
            variant="outlined"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            SelectProps={{ native: true }}
            fullWidth
            onFocus={() => setIsFlipped(false)}
            className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-border-blue-500 focus:tw-outline-none"
          >
            <option value="" disabled>Year</option>
            {Array.from({ length: 10 }, (_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </TextField>

          {/* CVV Field */}
          <TextField
            variant="outlined"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))} // Restrict to 3 digits
            onFocus={() => setIsFlipped(true)}
            fullWidth
            className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-border-blue-500 focus:tw-outline-none"
          />
        </Box>

        {/* Submit Button */}
        <Button variant="contained" color="primary" className="tw-mt-4">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
