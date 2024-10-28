import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PuzzleBlack, PuzzleBlack2, PuzzleBlack3, PuzzleBlack5 } from './Badges';

const generateRandomPieces = (count: number) => {
  const pieces = [];
  for (let i = 0; i < count; i++) {
    // Randomly select a puzzle piece
    const pieceType = [PuzzleBlack, PuzzleBlack2, PuzzleBlack3][
      Math.floor(Math.random() * 3)
    ];
    // Random position and duration
    const randomLeft = Math.random() * 100; // Percentage for left position (0% to 100%)
    const randomDuration = Math.random() * 1 + 2; // Duration between 2 and 3 seconds
    pieces.push({ pieceType, randomLeft, randomDuration });
  }
  return pieces;
};

const fallVariant = {
  hidden: { y: -100, opacity: 0 }, // Start from above the viewport
  visible: (custom: { randomDuration: number }) => ({
    y: [Math.random() * -100 - 100, 1000], // End position lower down the page
    opacity: [1, 0],
    transition: {
      duration: custom.randomDuration,
      repeat: Infinity,
    },
  }),
};

const Loader: React.FC = () => {
  const [pieces, setPieces] = useState(generateRandomPieces(20));

  // Regenerate the pieces every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPieces(generateRandomPieces(20));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        <Button
          variant="outlined"
          className="tw-text-pink-500 tw-border-pink-500 tw-rounded-full tw-px-12 tw-py-3"
        >
          Get Started
        </Button>
      </Box>

      {/* Falling Puzzle Pieces */}
      {pieces.map(({ pieceType: Piece, randomLeft, randomDuration }, index) => (
        <Box
          key={index}
          component={motion.div}
          custom={{ randomDuration }}
          initial="hidden"
          animate="visible"
          variants={fallVariant}
          className="tw-absolute tw-w-12 tw-h-12"
          style={{ left: `${randomLeft}%`, top: 0 }}
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
