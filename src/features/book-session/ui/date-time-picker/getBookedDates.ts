import { parseISO } from 'date-fns';
import { BookedDates } from '../../model/types';

interface BookedDate {
  date: Date;
  message: string;
}

interface GetBookedDatesParams {
  bookedDates: BookedDates;
  messageTemplate?: string;
}

/**
 * Generates an array of fully booked dates for `excludeDates` in DatePicker.
 * @param bookedDates - Object with dates as keys and booking details.
 * @param messageTemplate - Custom message template for each excluded date.
 * @returns An array of excluded dates formatted for `react-datepicker` with messages.
 */
export const getBookedDates = ({
  bookedDates,
  messageTemplate = 'Fully booked this day',
}: GetBookedDatesParams): BookedDate[] => {
  return (
    Object.entries(bookedDates)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, details]) => details.fullyBooked)
      .map(([date]) => ({
        date: parseISO(date),
        message: messageTemplate,
      }))
  );
};
