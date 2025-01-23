'use client';

import { FC } from 'react';
import { InputField } from '@/shared/ui/input-field';

import CalendarOutlineIcon from '@/shared/assets/icons/calendar-outline.svg';
import TimeOutlineIcon from '@/shared/assets/icons/time-outline.svg';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';

const sessionTypes = ['Yin Yoga', 'Kundalini Yoga', 'Bikram Yoga', 'Iyengar Yoga'];

const BookSessionForm: FC = () => {
  return (
    <form className="mx-auto flex w-full max-w-[344px] flex-col gap-7 md:grid md:max-w-full md:grid-cols-2">
      <InputField label="Full Name" placeholder="Eg. Jane Doe" icon="*" />
      <InputField label="Email Address" placeholder="Eg. janedoe@gmail.com" icon="*" />
      <InputField label="Phone Number" placeholder="Eg. 180 1200 1000" />
      <div className="relative">
        <label className="absolute left-[42px] top-3 text-[10px] font-bold uppercase tracking-[0.3em] text-background">
          Preferred Session Type
        </label>
        <select className="w-full rounded-full border-2 border-light-text bg-transparent pb-3.5 pl-10 pr-20 pt-6 text-light-text placeholder:text-light-text placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary">
          {sessionTypes.map((type) => (
            <option key={type} value={type} className="text-dark-text">
              {type}
            </option>
          ))}
        </select>
      </div>
      <InputField label="Preferred Date" placeholder="DD/MM/YYYY" icon={<CalendarOutlineIcon />} />
      <InputField label="Preferred Time" placeholder="09:30 AM" icon={<TimeOutlineIcon />} />

      <Button type="submit" className="mt-6 bg-secondary text-light-text hover:bg-hover md:w-[293px]">
        BOOK A SESSION
        <ArrowIcon />
      </Button>
    </form>
  );
};

export default BookSessionForm;
