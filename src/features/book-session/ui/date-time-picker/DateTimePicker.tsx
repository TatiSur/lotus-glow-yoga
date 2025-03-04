'use client';

import { FC, useEffect, useState } from 'react';

import { DatePicker } from '@/shared/ui/date-picker';
import { SessionSchedule } from '@/features/book-session';

import type { BookedDates } from '../../model/types';
import { getExcludedDates } from './getExcludedDates';
import { getBookedDates } from './getBookedDates';
import { getDayClassName } from './getDayClassName';
import { getExcludedTimeClassName } from '@/features/book-session/ui/date-time-picker/getExcludedTimeClassName';

interface DateTimePickerProps extends SessionSchedule {
  dateErrorMessage: string;
  timeErrorMessage: string;
  reset?: boolean;
  loading?: boolean;
  disabledAll?: boolean;
  onChangeDate?: () => void;
  onChangeTime?: () => void;
  bookedDates: BookedDates;
  sessionTimes: Record<number, string[]>;
}

const DateTimePicker: FC<DateTimePickerProps> = ({
  dateErrorMessage,
  timeErrorMessage,
  disabledAll,
  onChangeDate,
  onChangeTime,
  unavailableDays,
  reset,
  loading,
  bookedDates,
  sessionTimes,
}) => {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);

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

  const excludedDates = getExcludedDates({
    unavailableDays,
  });
  const bookedDays = getBookedDates({ bookedDates });
  const dayClassName = getDayClassName({ dates: bookedDates });
  const timeClassName = getExcludedTimeClassName({
    availableTimes: selectedDate ? sessionTimes?.[selectedDate.getDay()] : [],
    excludedClass: 'excluded-time',
  });

  return (
    <>
      <DatePicker
        name="date"
        label="Preferred Date"
        loading={loading}
        selected={selectedDate}
        errorMessage={dateErrorMessage}
        disabled={disabledAll}
        onChange={handleDateChange}
        minDate={today}
        maxDate={maxDate}
        excludeDates={[...excludedDates, ...bookedDays]}
        dayClassName={dayClassName}
      />
      <DatePicker
        name="time"
        label="Preferred Time"
        mode="time"
        loading={loading}
        selected={selectedTime}
        errorMessage={timeErrorMessage}
        disabled={disabledAll || !selectedDate}
        onChange={handleTimeChange}
        timeClassName={timeClassName}
      />
    </>
  );
};

export default DateTimePicker;
