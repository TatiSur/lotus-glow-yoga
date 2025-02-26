import { FC } from 'react';
import { DatePicker } from '@/shared/ui/date-picker';

interface BookSessionDatePickerProps {
  name: string;
  label: string;
  errorMessage: string;
  selected: Date | null;
  disabled?: boolean;
  onChange?: (date: Date | null) => void;
}

const BookSessionDatePicker: FC<BookSessionDatePickerProps> = (props) => {
  return <DatePicker {...props} />;
};

export default BookSessionDatePicker;
