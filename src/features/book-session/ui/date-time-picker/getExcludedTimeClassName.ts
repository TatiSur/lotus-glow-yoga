import { format } from 'date-fns';

interface GetExcludedTimeClassNameParams {
  availableTimes: string[];
  excludedClass: string;
}

/**
 * Returns a function that applies a class to times outside the specified available times.
 * @param availableTimes - Array of available times in `HH:mm` format.
 * @param excludedClass - CSS class applied to excluded times.
 * @returns Function to be passed to `timeClassName` in `DatePicker`.
 */
export const getExcludedTimeClassName = ({
  availableTimes,
  excludedClass,
}: GetExcludedTimeClassNameParams) => {
  return (time: Date): string => {
    const formattedTime = format(time, 'HH:mm');

    if (availableTimes.includes(formattedTime)) {
      return '';
    }

    return excludedClass;
  };
};
