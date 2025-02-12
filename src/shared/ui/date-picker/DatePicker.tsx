'use client';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';

import {
  FC,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import ReactDatePicker from 'react-datepicker';
import clsx from 'clsx';

import { FieldLabel } from '@/shared/ui/field-label';
import { FieldError } from '@/shared/ui/field-error';
import CalendarOutlineIcon from '@/shared/assets/icons/calendar-outline.svg';
import TimeOutlineIcon from '@/shared/assets/icons/time-outline.svg';
import { FieldIcon } from '../field-icon';
import CustomDatePickerInput from './CustomDatePickerInput';

type DatePickerProps = Omit<
  ReactDatePickerProps,
  | 'onChange'
  | 'selected'
  | 'selectsRange'
  | 'selectsMultiple'
  | 'showMonthYearDropdown'
> & {
  name: string;
  mode?: 'date' | 'time';
  label?: string;
  errorMessage?: string;
  selected?: Date | null;
  onChange?: (
    date: Date | null,
    event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => void;
};

const DatePicker: FC<DatePickerProps> = ({
  id,
  name,
  label,
  mode = 'date',
  errorMessage = '',
  className,
  selected,
  onChange,
  timeIntervals = 60,
  disabled,
  ...props
}) => {
  const datePickerId = id || `date-picker-${name}`;
  const isTimePicker = mode === 'time';
  const dateFormat = isTimePicker ? 'h:mm aa' : 'MM/dd/yyyy';

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState<Date | null>(selected || null);
  const [error, setError] = useState<string>(errorMessage);

  const handleChange = useCallback(
    (
      date: Date | null,
      event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
    ) => {
      setDate(date);
      setError('');
      onChange?.(date, event);
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = date ? date.toISOString() : '';
      }
    },
    [onChange]
  );

  return (
    <div className="relative w-full">
      {label && <FieldLabel htmlFor={datePickerId}>{label}</FieldLabel>}
      <input type="hidden" name={name} ref={hiddenInputRef} />
      <ReactDatePicker
        fixedHeight
        id={datePickerId}
        name={name}
        selected={date}
        onChange={handleChange}
        dateFormat={dateFormat}
        calendarStartDay={0}
        timeIntervals={timeIntervals}
        disabled={disabled}
        showTimeSelect={isTimePicker}
        showTimeSelectOnly={isTimePicker}
        customInput={<CustomDatePickerInput />}
        timeCaption="Time"
        calendarClassName="custom-calendar"
        popperClassName="custom-popper"
        className={clsx(
          'base-field-styles pr-20',
          error && 'base-field-error-styles',
          className
        )}
        {...props}
      />
      <FieldIcon
        icon={isTimePicker ? <TimeOutlineIcon /> : <CalendarOutlineIcon />}
        disabled={disabled}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default DatePicker;
