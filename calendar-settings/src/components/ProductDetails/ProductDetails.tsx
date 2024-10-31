import React, { useState } from 'react';
import { Box, Button, Typography, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  // Show and hide the image preview
  const showImgPreview = () => setIsPreviewVisible(true);
  const hidePreview = () => setIsPreviewVisible(false);

  return (
    <Box className="tw-bg-white tw-flex tw-rounded-lg tw-shadow-lg tw-p-8 tw-mx-auto tw-mt-28 tw-max-w-2xl">
      <Grid container spacing={2}>
        {/* Left Section: Product Image */}
        <Grid item xs={3}>
          <Box className="tw-relative">
            <motion.img
              src="https://i.postimg.cc/rwm6FtY6/hset.png"
              alt="Razer Kraken Kitty Edt Gaming Headset Quartz"
              className="tw-rounded-lg tw-w-full tw-h-auto tw-cursor-pointer"
              onClick={showImgPreview}
              whileHover={{
                rotateY: [0, 20, -5, 20, -10, 5, -15, 0],
                transition: { duration: 0.6, ease: 'easeInOut', repeat: Infinity },
              }}
            />
            <p className="tw-text-center tw-text-gray-500 tw-mt-2 tw-text-[12px]">
              Click image to zoom
            </p>
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={9}>
          <motion.div
            whileHover={{
              x: [-3, 3, -3, 3, 0],
              transition: { duration: 0.4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Chip
              label="Free shipping"
              className="tw-bg-black tw-text-white tw-text-xs tw-mb-2 tw-rounded-full tw-font-bold tw-cursor-pointer"
            />
          </motion.div>

          <h3 className="tw-font-extrabold tw-pt-5 tw-text-lg">Razer Kraken Kitty Edt Gaming</h3>
          <h3 className="tw-font-extrabold tw-text-lg tw-pt-auto">Headset Quartz</h3>
          <Typography className="tw-text-gray-500 tw-line-through tw-text-sm tw-pt-6">$200</Typography>
          <motion.p
            className="tw-text-pink-500 tw-font-bold tw-text-5xl tw-cursor-pointer"
            whileHover={{
              x: [-4, 4, -4, 4, 0],
              transition: { duration: 0.3, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            $150
          </motion.p>
          <p className="tw-text-black tw-text-sm tw-mt-2 tw-pb-10 tw-font-medium">
            The offer is valid until April 25 or as long as stock lasts
          </p>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            fullWidth
            className="tw-bg-pink-500 tw-text-white tw-mt-4 tw-py-3 tw-text-lg tw-font-semibold"
          >
            Add to cart
          </Button>

          {/* Stock Information */}
          <Box className="tw-flex tw-items-center tw-mt-4 tw-pb-5">
            <span className="tw-bg-green-500 tw-w-3 tw-h-3 tw-rounded-full tw-inline-block tw-mr-2"></span>
            <p className="tw-text-black tw-text-sm tw-font-medium">50+ pcs. in stock.</p>
          </Box>

          {/* Additional Buttons */}
          <Grid container spacing={1} className="tw-mt-4">
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<ShoppingCartIcon />}
                className="tw-border-gray-300 tw-text-gray-500 tw-font-semibold"
              >
                Add to cart
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<FavoriteIcon />}
                className="tw-border-gray-300 tw-text-gray-500 tw-font-semibold"
              >
                Add to wishlist
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Preview Modal */}
      {isPreviewVisible && (
        <Box className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black/80 tw-flex tw-items-center tw-justify-center tw-z-50">
          <Box className="tw-relative">
            <button
              onClick={hidePreview}
              className="tw-absolute tw-top-2 tw-right-2 tw-text-white tw-bg-black tw-rounded-full tw-p-2 tw-cursor-pointer"
            >
              ✕
            </button>
            <img
              src="https://i.postimg.cc/rwm6FtY6/hset.png"
              alt="Preview"
              className="tw-max-w-[1500%] tw-max-h-[150%] tw-rounded-lg tw-object-contain"
              />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
