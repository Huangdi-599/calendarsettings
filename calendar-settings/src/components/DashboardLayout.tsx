import React, { useState } from 'react';
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

const DashboardLayout = () => {
  const [timezone, setTimezone] = useState(moment.tz.guess());

  return (
    <div className="tw-bg-gray-50 tw-p-8 tw-min-h-screen">
      {/* Header */}
      <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-p-4 tw-flex tw-items-center tw-justify-between">
        <div className="tw-flex tw-items-center">
          <div className="tw-bg-yellow-400 tw-text-white tw-p-3 tw-rounded-full tw-text-lg">P</div>
          <div className="tw-ml-4">
            <h2 className="tw-text-xl tw-font-semibold">Airbnb Solutions</h2>
            <p className="tw-text-sm tw-text-gray-500">Western Street, U.K</p>
          </div>
        </div>
        <button className="tw-bg-pink-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-md">Edit</button>
      </div>

      <div className="tw-grid tw-grid-cols-3 tw-gap-8 tw-mt-8">
        <div className="tw-col-span-1">
          <div className="tw-grid tw-grid-cols-1 tw-gap-8">
            <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-p-6">
              <h3 className="tw-text-lg tw-font-semibold">Leads</h3>
              <div className="tw-text-6xl tw-font-bold tw-text-blue-500 tw-my-4">200</div>
              <a href="#" className="tw-text-blue-500 tw-underline">View</a>
            </div>

            <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-p-6">
              <h3 className="tw-text-lg tw-font-semibold">Responses</h3>
              <p className="tw-text-gray-500">You haven't responded to any leads yet</p>
              <a href="#" className="tw-text-blue-500 tw-underline tw-mt-4 block">View</a>
            </div>
          </div>
        </div>

        <div className="tw-col-span-2">
          <div className="tw-bg-white tw-shadow-md tw-rounded-md tw-p-6">
            <h3 className="tw-text-lg tw-font-semibold">Lead Settings</h3>
            <div className="tw-mt-4">
              <p className="tw-text-gray-700 tw-font-medium">Services</p>
              <p className="tw-text-gray-500">You'll receive leads in these categories:</p>
              <div className="tw-my-2 tw-flex tw-flex-wrap">
                <span className="tw-bg-gray-200 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-mr-2">Marketing & Sales</span>
                <span className="tw-bg-gray-200 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-mr-2">Web Development</span>
                <span className="tw-bg-gray-200 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-mr-2">+5</span>
              </div>
              <button className="tw-text-blue-500 tw-underline tw-mb-4">Edit</button>
            </div>

            <div className="tw-mt-4">
              <p className="tw-text-gray-700 tw-font-medium">Location</p>
              <p className="tw-text-gray-500">You'll receive customers within:</p>
              <p className="tw-mt-2 tw-text-gray-800">Western Street, U.K</p>
              <button className="tw-text-blue-500 tw-underline">Edit</button>
            </div>

            <TimezoneSelector timezone={timezone} setTimezone={setTimezone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
