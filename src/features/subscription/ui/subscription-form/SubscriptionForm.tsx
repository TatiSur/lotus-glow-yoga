'use client';

import { FC, useActionState, useEffect, useState } from 'react';

import { InputField } from '@/shared/ui/input-field';
import { Button } from '@/shared/ui/button';
import SpinnerIcon from '@/shared/assets/icons/spinner.svg';
import { useToast } from '@/features/toast';

import { SubscriptionFormState } from '../../model/types';
import { initialSubscriptionState } from '../../model/initialSubscriptionState';
import { subscribeAction } from '../../action';

const SubscriptionForm: FC = () => {
  const { addToast } = useToast();

  const [localError, setLocalError] = useState<string>('');
  const [state, formAction, isPending] = useActionState<
    SubscriptionFormState,
    FormData
  >(subscribeAction, initialSubscriptionState);

  useEffect(() => {
    if (state.fieldError) {
      setLocalError(state.fieldError);
    }

    if (state.message) {
      addToast({
        message: state.message,
        type: state.hasError ? 'error' : 'success',
      });
    }
  }, [state]);

  return (
    <form
      noValidate
      action={formAction}
      className="flex w-full flex-col items-center justify-end gap-10 md:gap-x-4 md:gap-y-6 xl:flex-row"
    >
      <InputField
        id="email"
        label="Your email"
        type="email"
        name="email"
        placeholder="Eg. Jane Doe"
        required
        labelClassName="text-primary"
        wrapperClassName="max-w-[459px] w-full grow"
        errorMessage={localError}
        defaultValue={state.values.email}
        onInput={() => setLocalError('')}
      />
      {/*<SubmitButton className="xs:max-w-[230px]">Subscribe</SubmitButton>*/}

      <Button
        type="submit"
        variant="primary"
        disabled={isPending}
        className="xs:max-w-[230px]"
      >
        {isPending ? (
          <>
            Submitting...
            <SpinnerIcon className="size-4 animate-spin" />
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
};

export default SubscriptionForm;
