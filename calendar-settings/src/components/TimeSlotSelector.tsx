import React from 'react';

interface TimeSlotSelectorProps {
  timeslot: string;
  setTimeslot: (newTimeslot: string) => void;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({ timeslot, setTimeslot }) => {
  return (
    <div className="tw-mb-4">
      <label className="tw-text-lg tw-font-medium tw-mb-2">Time Slot Duration (minutes)</label>
      <select
        value={timeslot}
        onChange={(e) => setTimeslot(e.target.value)}
        className="tw-border tw-border-gray-300 tw-p-2 tw-rounded-md tw-w-full"
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
};

export default TimeSlotSelector;