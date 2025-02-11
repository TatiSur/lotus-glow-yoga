'use client';

import { FC, HTMLAttributes } from 'react';
import { InputField } from '@/shared/ui/input-field';

import CalendarOutlineIcon from '@/shared/assets/icons/calendar-outline.svg';
import TimeOutlineIcon from '@/shared/assets/icons/time-outline.svg';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { CustomSelect } from '@/shared/ui/custom-select';

interface BookSessionFormProps extends HTMLAttributes<HTMLFormElement> {
  sessionType?: string;
}

const sessionTypes = [
  { value: 'yin', label: 'Yin Yoga' },
  { value: 'kundalini', label: 'Kundalini Yoga' },
  { value: 'bikram', label: 'Bikram Yoga' },
  { value: 'iyengar', label: 'Iyengar Yoga' },
];

const BookSessionForm: FC<BookSessionFormProps> = ({
  sessionType = '',
  ...props
}) => {
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
        errorMessage=""
        options={sessionTypes}
        defaultValue={sessionTypes.find((type) => type.value === sessionType)}
      />
      <InputField
        id="date"
        name="date"
        label="Preferred Date"
        placeholder="DD/MM/YYYY"
        icon={<CalendarOutlineIcon />}
      />
      <InputField
        id="time"
        name="time"
        label="Preferred Time"
        placeholder="09:30 AM"
        icon={<TimeOutlineIcon />}
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
