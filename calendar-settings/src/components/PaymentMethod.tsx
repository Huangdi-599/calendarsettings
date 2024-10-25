import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const PaymentMethod: React.FC = () => {
  return (
    <Box className="tw-max-w-7xl tw-bg-white tw-rounded-lg tw-p-8 tw-mx-auto tw-mt-10">
      {/* Title */}
      <h1 className="tw-text-3xl tw-font-bold tw-mb-6">Payment Method</h1>

      {/* Card Number Input */}
      <Box className="tw-mb-6">
        <p className="tw-font-semibold tw-mb-2">Card Number</p>
        <TextField
          placeholder="Enter card number"
          variant="outlined"
          fullWidth
          className="tw-bg-white"
        />
      </Box>

      {/* CCV and Expiry Date */}
      <Box className="tw-flex tw-gap-4 tw-mb-6">
        <Box className="tw-flex-grow">
          <p className="tw-font-semibold tw-mb-2">CCV</p>
          <TextField
            placeholder="Enter CCV"
            variant="outlined"
            className="tw-w-full tw-bg-white"
          />
        </Box>
        <Box className="tw-flex-grow">
          <p className="tw-font-semibold tw-mb-2">Expiry Date</p>
          <TextField
            placeholder="MM/YY"
            variant="outlined"
            className="tw-w-full tw-bg-white"
          />
        </Box>
      </Box>

      {/* Add Button */}
      <Box className="tw-text-right">
        <Button variant="contained" className="tw-bg-primary tw-text-white">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentMethod;
