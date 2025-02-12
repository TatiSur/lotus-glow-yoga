'use client';

import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { SingleValue } from 'react-select';

import { InputField } from '@/shared/ui/input-field';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { CustomSelect } from '@/shared/ui/custom-select';
import { DatePicker } from '@/shared/ui/date-picker';
import { SelectOption } from '@/shared/ui/custom-select/CustomSelect';

import { BookSessionDatePicker } from '../book-session-date-picker';

interface BookSessionFormProps extends HTMLAttributes<HTMLFormElement> {
  sessionType?: string;
}

const sessionTypes: SelectOption[] = [
  { value: 'yin', label: 'Yin Yoga' },
  { value: 'kundalini', label: 'Kundalini Yoga' },
  { value: 'bikram', label: 'Bikram Yoga' },
  { value: 'iyengar', label: 'Iyengar Yoga' },
];

const BookSessionForm: FC<BookSessionFormProps> = ({
  sessionType = '',
  ...props
}) => {
  const [selectedSessionType, setSelectedSessionType] =
    useState<SelectOption | null>(null);

  const handleSessionTypeChange = (
    newValue: SingleValue<SelectOption>
  ): void => {
    setSelectedSessionType(newValue);
  };

  useEffect(() => {
    if (sessionType) {
      const selectedSessionType = sessionTypes.find(
        (type) => type.value === sessionType
      );
      if (selectedSessionType) setSelectedSessionType(selectedSessionType);
    }
  }, [sessionType]);

  return (
    <form
      className="mx-auto flex w-full max-w-[344px] flex-col gap-7 md:grid md:max-w-full md:grid-cols-2"
      {...props}
    >
      <InputField
        id="name"
        name="name"
        label="Full Name"
        placeholder="Eg. Jane Doe"
        required
      />
      <InputField
        id="email"
        name="email"
        label="Email Address"
        placeholder="Eg. janedoe@gmail.com"
        required
      />
      <InputField
        id="phone"
        name="phone"
        label="Phone Number"
        placeholder="Eg. 180 1200 1000"
      />
      <CustomSelect
        name="sessionType"
        label="Preferred Session Type"
        value={selectedSessionType}
        onChange={handleSessionTypeChange}
        options={sessionTypes}
      />

      <BookSessionDatePicker
        name="date"
        label="Preferred Date"
        disabled={!selectedSessionType}
      />
      <DatePicker
        name="time"
        label="Preferred Time"
        mode="time"
        disabled={!selectedSessionType}
      />

      <Button
        type="submit"
        className="mt-6 bg-secondary text-light-text hover:bg-hover md:w-[293px]"
      >
        BOOK A SESSION
        <ArrowIcon />
      </Button>
    </form>
  );
};

export default BookSessionForm;
