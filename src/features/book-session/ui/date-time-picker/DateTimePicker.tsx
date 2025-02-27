'use client';

import { FC, useEffect, useState } from 'react';
import { DatePicker } from '@/shared/ui/date-picker';
import { SessionSchedule } from '@/features/book-session';
import { getExcludedDates } from './getExcludedDates';

interface DateTimePickerProps extends SessionSchedule {
  dateErrorMessage: string;
  timeErrorMessage: string;
  reset?: boolean;
  disabledAll?: boolean;
  onChangeDate?: () => void;
  onChangeTime?: () => void;
}

const DateTimePicker: FC<DateTimePickerProps> = ({
  dateErrorMessage,
  timeErrorMessage,
  disabledAll,
  onChangeDate,
  onChangeTime,
  unavailableDays,
  sessionDuration,
  reset,
}) => {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);
  const excludedDates = getExcludedDates({ unavailableDays });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  useEffect(() => {
    if (reset) {
      setSelectedDate(null);
      setSelectedTime(null);
    }
  }, [reset]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null);
    onChangeDate?.();
  };

  const handleTimeChange = (time: Date | null) => {
    if (selectedDate && time) {
      const combinedDateTime = new Date(selectedDate);
      combinedDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);
      setSelectedTime(combinedDateTime);
    }
    onChangeTime?.();
  };

  return (
    <>
      <DatePicker
        name="date"
        label="Preferred Date"
        selected={selectedDate}
        errorMessage={dateErrorMessage}
        disabled={disabledAll}
        onChange={handleDateChange}
        minDate={today}
        maxDate={maxDate}
        excludeDates={excludedDates}
      />
      <DatePicker
        name="time"
        label="Preferred Time"
        mode="time"
        selected={selectedTime}
        errorMessage={timeErrorMessage}
        disabled={disabledAll || !selectedDate}
        onChange={handleTimeChange}
        timeIntervals={sessionDuration}
        minTime={
          selectedDate && selectedDate.toDateString() === today.toDateString()
            ? today
            : new Date(0, 0, 0, 0, 0)
        }
        maxTime={new Date(0, 0, 0, 23, 45)}
      />
    </>
  );
};

export default DateTimePicker;
