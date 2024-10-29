import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PuzzleBlack, PuzzleBlack2, PuzzleBlack3, PuzzleBlack5 } from './Badges';

// Function to generate initial positions and fall duration for a fixed number of pieces
const generateStaticPieces = (count: number) => {
  const pieces = [];
  for (let i = 0; i < count; i++) {
    const pieceType = [PuzzleBlack, PuzzleBlack2, PuzzleBlack3][
      Math.floor(Math.random() * 3)
    ];
    const randomLeft = Math.random() * 100; // Position from 0% to 100% horizontally
    const randomDuration = Math.random() * 2 + 3; // Duration between 3 and 5 seconds for a steady fall effect
    pieces.push({ pieceType, randomLeft, randomDuration });
  }
  return pieces;
};

// Motion variant for the falling effect
const fallVariant = {
  hidden: { y: -200, opacity: 1 }, // Start above the viewport
  visible: (custom: { randomDuration: number }) => ({
    y: [0, 1200], // Fall to 1000px to cover the height of the viewport
    opacity: [1, 1, 0], // Fade out near the bottom
    transition: {
      duration: custom.randomDuration,
      ease: 'linear',
      repeat: Infinity,
    },
  }),
};

const Loader: React.FC = () => {
  const pieces = generateStaticPieces(50); // Set a fixed number of pieces

  return (
    <Box className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-white tw-max-w-7xl tw-mx-auto overflow-hidden">
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
        <Button
          variant="outlined"
          className="tw-text-pink-500 tw-border-pink-500 tw-rounded-full tw-px-12 tw-py-3"
        >
          Get Started
        </Button>
      </Box>

      {/* Constant Falling Puzzle Pieces */}
      {pieces.map(({ pieceType: Piece, randomLeft, randomDuration }, index) => (
        <Box
          key={index}
          component={motion.div}
          custom={{ randomDuration }}
          initial="hidden"
          animate="visible"
          variants={fallVariant}
          className="tw-absolute tw-w-12 tw-h-12"
          style={{ left: `${randomLeft}%`, top: '-200px' }} // Start above the viewport for a rain effect
        >
          <Box className="tw-w-full tw-h-full">
            <Piece />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Loader;
