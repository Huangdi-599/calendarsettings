import React from 'react';
import moment from 'moment-timezone';

interface TimezoneSelectorProps {
  timezone: string;
  setTimezone: (newTimezone: string) => void;
}

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({ timezone, setTimezone }) => {
  const timezones = moment.tz.names();

  return (
    <div className="tw-mb-4">
      <label className="tw-text-lg tw-font-medium tw-mb-2">Select Timezone</label>
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        className="tw-border tw-border-gray-300 tw-p-2 tw-rounded-md tw-w-full"
      >
        {timezones.map(tz => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
