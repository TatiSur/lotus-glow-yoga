'use client';

import { FC, HTMLAttributes, useEffect, useState } from 'react';
import type { SingleValue } from 'react-select';

import { InputField } from '@/shared/ui/input-field';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { DatePicker } from '@/shared/ui/date-picker';
import { SessionTypeSelect } from '@/entities/session-types';
import type { SessionType } from '@/entities/session-types/model/types';
import type { SelectOption } from '@/shared/ui/custom-select/CustomSelect';

import { BookSessionDatePicker } from '../book-session-date-picker';

interface BookSessionFormProps extends HTMLAttributes<HTMLFormElement> {
  sessionTypes?: SessionType[];
}

const BookSessionForm: FC<BookSessionFormProps> = ({
  sessionTypes,
  ...props
}) => {
  const [selectedSessionType, setSelectedSessionType] =
    useState<SessionType | null>(null);

  useEffect(() => {
    const sessionTypeIds = sessionStorage.getItem('sessionTypeIds');
    if (sessionTypeIds) {
      sessionStorage.removeItem('sessionTypeIds');

      const sessionTypeIdsArr = JSON.parse(sessionTypeIds);

      const selectedSessionType = sessionTypes?.find(({ id }) =>
        sessionTypeIdsArr.includes(id)
      );

      if (selectedSessionType) setSelectedSessionType(selectedSessionType);
    }
  }, []);

  const handleSelectSessionType = (newValue: SingleValue<SelectOption>) => {
    setSelectedSessionType(newValue as SessionType);
  };

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

      <SessionTypeSelect
        sessionTypes={sessionTypes}
        sessionType={selectedSessionType}
        onSelect={handleSelectSessionType}
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
