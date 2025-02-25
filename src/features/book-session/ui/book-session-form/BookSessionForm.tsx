'use client';

import { FC, HTMLAttributes, useActionState, useEffect, useState } from 'react';
import type { SingleValue } from 'react-select';
import { useRouter } from 'next/navigation';

import { InputField } from '@/shared/ui/input-field';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { DatePicker } from '@/shared/ui/date-picker';
import { SessionTypeSelect } from '@/entities/session-types';
import type { SessionType } from '@/entities/session-types/model/types';
import type { SelectOption } from '@/shared/ui/custom-select/CustomSelect';
import SpinnerIcon from '@/shared/assets/icons/spinner.svg';
import { useToast } from '@/features/toast';

import { BookSessionDatePicker } from '../book-session-date-picker';
import type { BookSessionFormState } from '../../model/types';
import { initialBookSessionFormState } from '../../model/initialBookSessionFormState';
import { bookSessionAction } from '../../action/bookSessionAction';

interface BookSessionFormProps extends HTMLAttributes<HTMLFormElement> {
  sessionTypes?: SessionType[];
}

const BookSessionForm: FC<BookSessionFormProps> = ({
  sessionTypes,
  ...props
}) => {
  const router = useRouter();
  const { addToast } = useToast();

  const [selectedSessionType, setSelectedSessionType] =
    useState<SessionType | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [state, formAction, isPending] = useActionState<
    BookSessionFormState,
    FormData
  >(bookSessionAction, initialBookSessionFormState);

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

  useEffect(() => {
    if (state.fieldErrors) setErrors(state.fieldErrors);

    if (state.message) {
      addToast({
        message: state.message,
        type: state.hasError ? 'error' : 'success',
      });

      if (!state.hasError) {
        setSelectedSessionType(null);
        setTimeout(() => router.push('/'), 1000);
      }
    }
  }, [state]);

  const handleSelectSessionType = (newValue: SingleValue<SelectOption>) => {
    setSelectedSessionType(newValue as SessionType);
  };

  return (
    <form
      noValidate
      action={formAction}
      className="mx-auto flex w-full max-w-[344px] flex-col gap-7 md:grid md:max-w-full md:grid-cols-2"
      {...props}
    >
      <InputField
        id="fullName"
        name="fullName"
        label="Full Name"
        placeholder="Eg. Jane Doe"
        required
        defaultValue={state.values.fullName}
        errorMessage={errors.fullName}
        onInput={() => setErrors((prev) => ({ ...prev, fullName: '' }))}
      />
      <InputField
        id="email"
        name="email"
        label="Email Address"
        placeholder="Eg. janedoe@gmail.com"
        required
        defaultValue={state.values.email}
        errorMessage={errors.email}
        onInput={() => setErrors((prev) => ({ ...prev, email: '' }))}
      />
      <InputField
        id="phone"
        name="phone"
        label="Phone Number"
        placeholder="Eg. 180 1200 1000"
        defaultValue={state.values.phone}
      />

      <SessionTypeSelect
        sessionTypes={sessionTypes}
        sessionType={selectedSessionType}
        onSelect={handleSelectSessionType}
        errorMessage={errors.sessionTypeId}
        onInputChange={() =>
          setErrors((prev) => ({ ...prev, sessionTypeId: '' }))
        }
      />

      <BookSessionDatePicker
        name="date"
        label="Preferred Date"
        errorMessage={errors.date}
        disabled={!selectedSessionType}
        onChange={() => setErrors((prev) => ({ ...prev, date: '' }))}
      />
      <DatePicker
        name="time"
        label="Preferred Time"
        mode="time"
        errorMessage={errors.time}
        disabled={!selectedSessionType}
        onChange={() => setErrors((prev) => ({ ...prev, time: '' }))}
      />

      <Button
        type="submit"
        disabled={isPending}
        className="mt-6 bg-secondary text-light-text hover:bg-hover md:w-[293px]"
      >
        {isPending ? (
          <>
            Submitting...
            <SpinnerIcon className="size-4 animate-spin" />
          </>
        ) : (
          <>
            BOOK A SESSION
            <ArrowIcon />
          </>
        )}
      </Button>
    </form>
  );
};

export default BookSessionForm;
