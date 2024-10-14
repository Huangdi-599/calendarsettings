import React, { useState } from 'react';
import { Box, Button, Checkbox } from '@mui/material';
import TimePicker from './TimePicker';
import TimeSlotSelector from './TimeSlotSelector';
import TimezoneSelector from './TimezoneSelector';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

interface DayTimeSlot {
  startTime: string;
  endTime: string;
}

interface DaySettings {
  available: boolean;
  timeslot: string;
  customTimeslotDuration?: number;
  timeSlotDetails: DayTimeSlot;
}

const Calendar: React.FC = () => {
  const [calendarSettings, setCalendarSettings] = useState<Record<string, DaySettings>>(() =>
    daysOfWeek.reduce(
      (acc, day) => ({
        ...acc,
        [day]: {
          available: false,
          timeslot: '30',
          customTimeslotDuration: undefined,
          timeSlotDetails: { startTime: '09:00', endTime: '17:00' },
        },
      }),
      {} as Record<string, DaySettings>
    )
  );

  const handleDayToggle = (day: string) => {
    setCalendarSettings((prevSettings) => ({
      ...prevSettings,
      [day]: {
        ...prevSettings[day],
        available: !prevSettings[day].available,
      },
    }));
  };

  const setTimeslot = (day: string, newTimeslot: string) => {
    setCalendarSettings((prevSettings) => ({
      ...prevSettings,
      [day]: {
        ...prevSettings[day],
        timeslot: newTimeslot,
        customTimeslotDuration: newTimeslot === 'custom' ? prevSettings[day].customTimeslotDuration : undefined,
      },
    }));
  };

  const setCustomTimeslotDuration = (day: string, newDuration: number) => {
    setCalendarSettings((prevSettings) => ({
      ...prevSettings,
      [day]: {
        ...prevSettings[day],
        customTimeslotDuration: newDuration,
      },
    }));
  };

  const setStartTime = (day: string, newStartTime: string) => {
    setCalendarSettings((prevSettings) => ({
      ...prevSettings,
      [day]: {
        ...prevSettings[day],
        timeSlotDetails: { ...prevSettings[day].timeSlotDetails, startTime: newStartTime },
      },
    }));
  };

  const setEndTime = (day: string, newEndTime: string) => {
    setCalendarSettings((prevSettings) => ({
      ...prevSettings,
      [day]: {
        ...prevSettings[day],
        timeSlotDetails: { ...prevSettings[day].timeSlotDetails, endTime: newEndTime },
      },
    }));
  };

  const [timezone, setTimezone] = useState('Europe/London');

  return (
    <Box className="tw-w-[700px] tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-lg tw-mx-auto tw-mt-10">
      <div className="tw-flex tw-justify-between tw-mb-6">
        <h2 className="tw-text-xl">Calendar Settings</h2>
      </div>

      <div className="tw-space-y-6">
        {daysOfWeek.map((day) => (
          <div key={day} className="tw-flex tw-justify-between tw-items-center tw-gap-4">
            <Checkbox
              checked={calendarSettings[day].available}
              onChange={() => handleDayToggle(day)}
              color="primary"
            />
            <span className="tw-uppercase tw-w-[50px]">{day}</span>

            {!calendarSettings[day].available ? (
              <span className="tw-text-gray-500">Unavailable</span>
            ) : (
              <div className="tw-flex tw-items-center tw-gap-4 tw-w-full">
                <TimePicker
                  label="Start Time"
                  time={calendarSettings[day].timeSlotDetails.startTime}
                  setTime={(newStartTime) => setStartTime(day, newStartTime)}
                />
                <span>-</span>
                <TimePicker
                  label="End Time"
                  time={calendarSettings[day].timeSlotDetails.endTime}
                  setTime={(newEndTime) => setEndTime(day, newEndTime)}
                />

                <TimeSlotSelector
                  timeslot={calendarSettings[day].timeslot}
                  setTimeslot={(newTimeslot) => setTimeslot(day, newTimeslot)}
                />

                {calendarSettings[day].timeslot === 'custom' && (
                  <input
                    type="number"
                    value={calendarSettings[day].customTimeslotDuration || 0}
                    onChange={(e) => setCustomTimeslotDuration(day, parseInt(e.target.value) || 0)}
                    className="tw-border tw-border-gray-300 tw-p-2 tw-rounded-md tw-w-20"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <TimezoneSelector timezone={timezone} setTimezone={setTimezone} />

      <div className="tw-flex tw-justify-center tw-mt-6">
        <Button variant="contained" color="primary">
          Save Calendar Settings
        </Button>
      </div>
    </Box>
  );
};

export default Calendar;