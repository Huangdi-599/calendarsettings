import React, { useState } from 'react';
import { Box, Button, TextField, Autocomplete } from '@mui/material';
import { CreditIcon } from './Badges';

const BuyCredits: React.FC = () => {
  const [creditAmount, setCreditAmount] = useState<string | null>('1 credit for $1.50');
  const creditOptions = ['1 credit for $1.50', '5 credits for $7.00', '10 credits for $13.00'];

  return (
    <Box className="tw-max-w-7xl tw-bg-white tw-rounded-lg tw-p-4 tw-mx-auto tw-mt-10">
      {/* Title */}
      <h1 className="tw-text-3xl tw-font-bold tw-mb-6">Buy Credits</h1>

      {/* Available credits */}
      <Box className="tw-flex tw-items-center tw-mb-6 tw-gap-2">
        <CreditIcon />
        <p className="tw-text-lg tw-ml-2">110</p>
      </Box>

      {/* Credits Expiry */}
      <p className="tw-text-gray-500 tw-mb-2">These credits will expire on</p>
      <p className="tw-text-gray-900 tw-mb-6">September 11, 2024</p>

      {/* Credit Amount */}
      <p className="tw-font-semibold tw-mb-2">Select the amount you want to buy</p>
      <Box className="tw-max-w-md tw-mb-6">
        <Autocomplete
          freeSolo
          options={creditOptions} 
          value={creditAmount}
          onChange={(_, newValue) => setCreditAmount(newValue)} // Handle value change
          renderInput={(params) => (
            <TextField {...params} placeholder="1 credit for $1.50" variant="outlined" className="tw-w-full" />
          )}
        />
      </Box>

      {/* Promo code */}
      <p className="tw-font-semibold tw-mb-2">Promo code</p>
      <Box className="tw-flex tw-gap-10 tw-items-center tw-mb-6 tw-max-w-md">
        <TextField
          placeholder="Enter a code"
          variant="outlined"
          className="tw-w-full"
        />
        <Button variant="outlined" className="tw-text-pink-500 tw-border-pink-500">
          Apply
        </Button>
      </Box>

      {/* Buttons */}
      <Box className="tw-flex tw-justify-end tw-items-center tw-gap-4 tw-mt-10">
        <Button variant="text" className="tw-text-pink-500">
          Cancel
        </Button>
        <Button variant="contained" className="tw-bg-pink-500 tw-text-white">
          Buy Credits
        </Button>
      </Box>
    </Box>
  );
};

export default BuyCredits;
