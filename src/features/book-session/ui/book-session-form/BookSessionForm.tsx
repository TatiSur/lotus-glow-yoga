'use client';

import { FC, HTMLAttributes, useActionState, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { InputField } from '@/shared/ui/input-field';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import type { SessionType } from '@/entities/session-types/model/types';
import SpinnerIcon from '@/shared/assets/icons/spinner.svg';
import { useToast } from '@/features/toast';
import type { BookSessionFormState } from '../../model/types';
import { initialBookSessionFormState } from '../../model/initialBookSessionFormState';
import { bookSessionAction } from '../../action/bookSessionAction';
import SessionScheduler from '@/features/book-session/ui/session-scheduler/SessionScheduler';

interface BookSessionFormProps extends HTMLAttributes<HTMLFormElement> {
  sessionTypes?: SessionType[];
}

const BookSessionForm: FC<BookSessionFormProps> = ({
  sessionTypes,
  ...props
}) => {
  const router = useRouter();
  const { addToast } = useToast();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [state, formAction, isPending] = useActionState<
    BookSessionFormState,
    FormData
  >(bookSessionAction, initialBookSessionFormState);

  useEffect(() => {
    if (state.fieldErrors) setErrors(state.fieldErrors);

    if (state.message) {
      addToast({
        message: state.message,
        type: state.hasError ? 'error' : 'success',
      });

      if (!state.hasError) {
        setTimeout(() => router.push('/'), 1000);
      }
    }
  }, [state]);

  const removeErrorMessage = (fieldName: string) => {
    setErrors((prev) => ({ ...prev, [fieldName]: '' }));
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
        onInput={() => removeErrorMessage('fullName')}
      />
      <InputField
        id="email"
        name="email"
        label="Email Address"
        placeholder="Eg. janedoe@gmail.com"
        required
        defaultValue={state.values.email}
        errorMessage={errors.email}
        onInput={() => removeErrorMessage('email')}
      />
      <InputField
        id="phone"
        name="phone"
        label="Phone Number"
        placeholder="Eg. 180 1200 1000"
        defaultValue={state.values.phone}
      />
      <SessionScheduler
        sessionTypes={sessionTypes}
        dateErrorMessage={errors.date}
        timeErrorMessage={errors.time}
        sessionTypeErrorMessage={errors.sessionTypeId}
        removeErrorMessage={removeErrorMessage}
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
