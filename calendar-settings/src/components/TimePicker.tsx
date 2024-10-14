import React from 'react';

interface TimePickerProps {
  label: string;
  time: string;
  setTime: (newTime: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, time, setTime }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <div className="tw-flex tw-flex-col tw-mb-4">
      <label className="tw-text-lg tw-font-medium tw-mb-2">{label}</label>
      <input
        type="time"
        value={time}
        onChange={handleChange}
        className="tw-border tw-border-gray-300 tw-p-2 tw-rounded-md"
      />
    </div>
  );
};

export default TimePicker;
