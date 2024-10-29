import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Payment.css';

const Payment: React.FC = () => {
  // State variables for card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false); // To control card flip animation

  return (
    <Box className="tw-max-w-xl tw-mx-auto tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md tw-mt-10">
      {/* Card Display */}
      <Box className={`tw-relative tw-w-full tw-h-40 tw-bg-blue-900 tw-rounded-lg tw-text-white tw-mb-6`}>
        {/* Front of the Card */}
        {!isFlipped && (
          <Box className="tw-absolute tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-p-4">
            <Typography variant="h6" className="tw-text-lg tw-font-semibold">
              {cardNumber || '#### #### #### ####'}
            </Typography>
            <Typography className="tw-mt-4">
              Card Holder: {cardHolder || 'FULL NAME'}
            </Typography>
            <Typography>
              Expires: {expiryMonth || 'MM'}/{expiryYear || 'YY'}
            </Typography>
          </Box>
        )}
        {/* Back of the Card */}
        {isFlipped && (
          <Box className="tw-absolute tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-p-4 tw-bg-blue-800">
            <Typography variant="h6" className="tw-text-lg tw-font-semibold tw-text-right">
              {cvv ? '***' : 'CVV'}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Form Fields */}

      {/* Card Number */ }

      <Box component="form" className="tw-flex tw-flex-col tw-gap-4">
      <Typography variant="subtitle1" className="tw-text-gray-700 tw-pt-5">Card Number</Typography>
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
        />
        
        {/* Card Holders */ }
        <Typography variant="subtitle1" className="tw-text-gray-700 tw-pt-5">Card Holder</Typography>
        <TextField
        variant="outlined"
        value={cardHolder}
        onChange={(e) => {
            // Allow only alphabetic characters and spaces
            const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
            setCardHolder(value);
        }}
        onFocus={() => setIsFlipped(false)}
        placeholder=""
        fullWidth
        />

        <Typography variant="subtitle1" className="tw-text-gray-700 tw-pt-5">Expiration Date</Typography>
        <Box className="tw-flex tw-gap-4 tw-items-center">
        {/* Expiration Date (Month and Year) */}
        <TextField
            select
            variant="outlined"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            SelectProps={{
            native: true,
            }}
            fullWidth
            onFocus={() => setIsFlipped(false)}
            className="tw-flex-1"
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
            SelectProps={{
            native: true,
            }}
            fullWidth
            onFocus={() => setIsFlipped(false)}
            className="tw-flex-1"
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
            className="tw-flex-1"
            onFocus={() => setIsFlipped(true)}
            fullWidth
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
