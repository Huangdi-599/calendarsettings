import React, { useState } from 'react';
import { Box, Typography, Chip, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CreditIcon, FilterIcon } from './Badges';

const Leads: React.FC = () => {
  const [locations, setLocations] = useState<string[]>(['Abuja', 'Lagos']); // Initial locations
  const [newLocation, setNewLocation] = useState<string>(''); // For the input value

  // Function to handle the addition of a new location
  const handleAddLocation = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && newLocation.trim()) {
      setLocations([...locations, newLocation.trim()]); // Add new location
      setNewLocation(''); // Clear the input
    }
  };

  // Function to handle the removal of a location
  const handleDeleteLocation = (locationToDelete: string) => {
    setLocations(locations.filter((location) => location !== locationToDelete)); // Remove location
  };

  return (
    <Box className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-6">
      {/* Grid layout with 80% for main content and 20% for filters */}
      <Box className="tw-grid" style={{ gridTemplateColumns: '75% 25%' }}>
        
        {/* Main Content - 80% */}
        <Box className="tw-bg-white tw-p-6">
          <Typography variant="h4" className="tw-font-bold tw-mb-4">Leads List</Typography>
        </Box>

        {/* Filters Section - 20% */}
        <Box className="tw-bg-gray-100 tw-rounded-lg tw-shadow-md tw-p-6">
          {/* Filters Header */}
          <Box className="tw-flex tw-items-center tw-mb-4 tw-gap-4">
            <FilterIcon />
            <Typography variant="h6" className="tw-font-bold">
              Filters
            </Typography>
          </Box>

          {/* Locations Filter */}
          <Box>
            <Typography variant="subtitle1" className="tw-font-semibold tw-mb-2">
              Locations
            </Typography>
            <Box className="tw-flex tw-items-center tw-gap-2 tw-bg-white tw-rounded-md tw-p-2 tw-border tw-border-gray-300 tw-flex-wrap">
              {locations.map((location) => (
                <Chip
                  key={location}
                  label={location}
                  onDelete={() => handleDeleteLocation(location)} // Handle location removal
                  className="tw-bg-gray-200"
                />
              ))}
              <TextField
                variant="standard"
                placeholder="Add location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)} // Handle input change
                onKeyDown={handleAddLocation} // Add location on Enter
                InputProps={{ disableUnderline: true }}
                className="tw-flex-grow"
              />
            </Box>
          </Box>

          {/* Industry & Market Filter */}
          <Box className="tw-mt-6">
            <Typography variant="subtitle1" className="tw-font-semibold tw-mb-2">
              Industry & Market
            </Typography>
            <Accordion className="tw-bg-white tw-rounded-md tw-shadow-md">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="tw-bg-gray-200">
                <Typography>Web design</Typography>
              </AccordionSummary>
              <AccordionDetails className="tw-space-y-2">
                <Typography>Web design</Typography>
                <Typography>House cleaning</Typography>
                <Typography>Web development</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Credits Section */}
          <Box className="tw-mt-6 tw-flex tw-justify-between tw-items-center tw-bg-white tw-rounded-lg tw-p-4 tw-shadow-md">
            <Box className="tw-flex tw-items-center">
              <Box className="tw-flex tw-justify-center tw-items-center tw-text-white tw-mr-2">
                <CreditIcon />
              </Box>
              <Typography variant="body1">Credits: 110</Typography>
            </Box>
            <ExpandMoreIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Leads;
