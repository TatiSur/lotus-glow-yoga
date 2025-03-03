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
  loading?: boolean;
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
  loading,
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

  const [date, setDate] = useState<Date | null>(null);

  const handleChange = useCallback(
    (
      date: Date | null,
      event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
    ) => {
      setDate(date);
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
      {loading && (
        <span className="loader absolute inset-0 z-50 mx-auto mt-4" />
      )}
      <input type="hidden" name={name} ref={hiddenInputRef} />
      <ReactDatePicker
        fixedHeight
        id={datePickerId}
        name={name}
        selected={typeof selected === 'undefined' ? date : selected}
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
          errorMessage && 'base-field-error-styles',
          className
        )}
        {...props}
      />
      <FieldIcon
        icon={isTimePicker ? <TimeOutlineIcon /> : <CalendarOutlineIcon />}
        disabled={disabled}
      />
      {!disabled && errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
};

export default DatePicker;
