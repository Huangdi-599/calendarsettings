import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

const LeadPage: React.FC = () => {
  return (
    <Box className="tw-w-full tw-bg-gray-100 tw-p-8 tw-flex tw-justify-center tw-items-center tw-min-h-screen">
      <Box className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-3xl tw-p-6 tw-relative">
        {/* Header Section */}
        <Box className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <Typography variant="h5" component="h1" className="tw-font-bold">
            Griff
          </Typography>
          <Typography variant="body2" className="tw-text-gray-500">
            2h ago
          </Typography>
        </Box>

        {/* Service and Location */}
        <Typography variant="subtitle1" className="tw-mb-1">
          Web Design
        </Typography>
        <Typography variant="body2" className="tw-text-gray-500 tw-mb-4">
          London, SW3 (Nationwide)
        </Typography>
        <Typography variant="body2" className="tw-text-gray-400 tw-mb-4">
          Happy to receive service online
        </Typography>

        {/* Contact Information */}
        <Box className="tw-flex tw-gap-4 tw-mb-6">
          <Box className="tw-flex tw-items-center tw-gap-2">
            <Phone />
            <Typography variant="body2">081*********</Typography>
          </Box>
          <Box className="tw-flex tw-items-center tw-gap-2">
            <Email />
            <Typography variant="body2">c*******@c****.com</Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box className="tw-flex tw-gap-4 tw-mb-6">
          <Button variant="contained" color="primary" className="tw-bg-pink-500 tw-text-white">
            Contact Griff
          </Button>
          <Button variant="outlined" color="error">
            Not interested
          </Button>
        </Box>

        {/* Highlights Section */}
        <Typography variant="h6" className="tw-mb-2">
          Highlights
        </Typography>
        <Box className="tw-flex tw-gap-4 tw-mb-6">
          <Box className="tw-flex tw-items-center tw-gap-2">
            <span className="tw-bg-blue-100 tw-text-blue-600 tw-rounded-full tw-px-2 tw-text-xs">Payment verified</span>
          </Box>
          <Box className="tw-flex tw-items-center tw-gap-2">
            <span className="tw-bg-green-100 tw-text-green-600 tw-rounded-full tw-px-2 tw-text-xs">High hiring intent</span>
          </Box>
        </Box>

        {/* Details Section */}
        <Typography variant="h6" className="tw-mb-2">
          Details
        </Typography>
        <Box className="tw-text-gray-600 tw-space-y-2">
          <Typography variant="body2" className="tw-text-gray-400">
            What platform will you be using?
          </Typography>
          <Typography variant="body2">I will be using any</Typography>

          <Typography variant="body2" className="tw-text-gray-400">
            What other platform will you be using?
          </Typography>
          <Typography variant="body2">I will be using any one that comes to mind</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeadPage;
