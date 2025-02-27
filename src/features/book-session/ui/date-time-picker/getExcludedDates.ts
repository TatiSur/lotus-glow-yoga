import { addDays } from 'date-fns';

interface ExcludedDate {
  date: Date;
  message: string;
}

interface GetExcludedDatesParams {
  unavailableDays: number[];
  monthsAhead?: number;
  messageTemplate?: string;
}

/**
 * Generates an array of excluded dates based on unavailable days.
 * @param unavailableDays - Array of weekday indexes (0 = Sunday, 6 = Saturday) that should be excluded.
 * @param monthsAhead - Number of months ahead to generate excluded dates (default: 12).
 * @param messageTemplate - Custom message template for each excluded date. Use `{day}` as a placeholder (default: "No sessions available on {day}").
 * @returns An array of excluded dates formatted for `react-datepicker` with messages.
 */
export const getExcludedDates = ({
  unavailableDays,
  monthsAhead = 12,
  messageTemplate = 'No sessions available on {day}',
}: GetExcludedDatesParams): ExcludedDate[] => {
  const today = new Date();
  const excludedDates: ExcludedDate[] = [];

  for (let i = 0; i < monthsAhead * 31; i++) {
    const date = addDays(today, i);
    if (unavailableDays.includes(date.getDay())) {
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      excludedDates.push({
        date,
        message: messageTemplate.replace('{day}', dayName),
      });
    }
  }

  return excludedDates;
};
