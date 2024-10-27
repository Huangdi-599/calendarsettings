import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PuzzleBlack, PuzzleBlack2, PuzzleBlack3, PuzzleBlack5 } from './Badges';

const fallVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: (custom: number) => ({
    y: [custom * -20, 400],
    opacity: [1, 0],
    transition: { duration: 3, delay: custom * 0.5, repeat: Infinity },
  }),
};

const Loader: React.FC = () => {
  return (
    <Box className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-white tw-max-w-7xl tw-mx-auto">
      {/* Header with Logo and Title */}
      <Box className="tw-absolute tw-top-8 tw-left-8 tw-flex tw-items-center">
        <Box className="tw-w-16 tw-h-16 tw-mr-2">
          <Box className="tw-w-full tw-h-full">
            <PuzzleBlack5 />
          </Box>
        </Box>
        <Typography variant="h5" className="tw-font-bold">
          {/* Puzzle Piece Solution */}
        </Typography>
      </Box>

      {/* Centered Welcome Text and Button */}
      <Box className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-flex-grow">
        <Typography variant="h4" className="tw-font-bold tw-mb-6">
          Welcome to Puzzle Piece Solution
        </Typography>
        <Button variant="outlined" className="tw-text-pink-500 tw-border-pink-500 tw-rounded-full tw-px-12 tw-py-3">
          Get Started
        </Button>
      </Box>

      {/* Falling Puzzle Pieces */}
      <Box className="tw-absolute tw-top-10 tw-left-1/4">
        <Box
          component={motion.div}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fallVariant}
          className="tw-w-12 tw-h-12"
        >
          <Box className="tw-w-full tw-h-full">
            <PuzzleBlack />
          </Box>
        </Box>
      </Box>
      <Box className="tw-absolute tw-top-10 tw-left-1/2">
        <Box
          component={motion.div}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fallVariant}
          className="tw-w-12 tw-h-12"
        >
          <Box className="tw-w-full tw-h-full">
            <PuzzleBlack2 />
          </Box>
        </Box>
      </Box>
      <Box className="tw-absolute tw-top-10 tw-right-1/4">
        <Box
          component={motion.div}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fallVariant}
          className="tw-w-12 tw-h-12"
        >
          <Box className="tw-w-full tw-h-full">
            <PuzzleBlack3 />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
