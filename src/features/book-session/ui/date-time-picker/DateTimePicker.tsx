'use client';

import { FC, useState } from 'react';
import { BookSessionDatePicker } from '@/features/book-session/ui/book-session-date-picker';
import { DatePicker } from '@/shared/ui/date-picker';

interface DateTimePickerProps {
  dateErrorMessage: string;
  timeErrorMessage: string;
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
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

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
      <BookSessionDatePicker
        name="date"
        label="Preferred Date"
        selected={selectedDate}
        errorMessage={dateErrorMessage}
        disabled={disabledAll}
        onChange={handleDateChange}
      />
      <DatePicker
        name="time"
        label="Preferred Time"
        mode="time"
        selected={selectedTime}
        errorMessage={timeErrorMessage}
        disabled={disabledAll || !selectedDate}
        onChange={handleTimeChange}
      />
    </>
  );
};

export default DateTimePicker;
