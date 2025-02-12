import { FC } from 'react';
import { DatePicker } from '@/shared/ui/date-picker';

interface BookSessionDatePickerProps {
  name: string;
  label: string;
  disabled?: boolean;
}

const BookSessionDatePicker: FC<BookSessionDatePickerProps> = (props) => {
  return <DatePicker {...props} />;
};

export default BookSessionDatePicker;
