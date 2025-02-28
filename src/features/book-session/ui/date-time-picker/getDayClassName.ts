import { format } from 'date-fns';
import { BookedDates } from '@/features/book-session/model/types';

interface GetDayClassNameParams {
  dates: BookedDates;
  dateFormat?: string;
}

/**
 * Returns a custom CSS class for a given date based on its booking status.
 * @param dates - Object containing booked date details.
 * @param dateFormat - Optional date format for parsing keys (default: 'yyyy-MM-dd').
 * @returns A function that assigns a class to each date in `DatePicker`.
 */
export const getDayClassName = ({
  dates,
  dateFormat = 'yyyy-MM-dd',
}: GetDayClassNameParams) => {
  return (date: Date): string => {
    const formattedDate = format(date, dateFormat);
    const { fullyBooked, partlyBooked } = dates[formattedDate] || {};

    return fullyBooked
      ? 'fully-booked-day'
      : partlyBooked
        ? 'partially-booked-day'
        : '';
  };
};
